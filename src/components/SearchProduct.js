import { useSelector, useDispatch } from "react-redux";
import { GoSearch } from "react-icons/go";
import { setSearchTerm } from "../store";

function SearchProduct() {
    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const handleSearchTermChange = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (
        <p className="control has-icons-left">
            <input className="input is-primary" type="text" onChange={handleSearchTermChange} placeholder="Search" value={search.searchTerm} />
            <span className="icon is-left">
                <GoSearch />
            </span>
        </p>
    );
}

export default SearchProduct;