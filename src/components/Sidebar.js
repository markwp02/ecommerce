import { useFetchProductCategoriesQuery } from "../store";
import ShowCategory from "./ShowCategory";

function Sidebar() {

    const {data, error, isFetching} = useFetchProductCategoriesQuery();

    let content;
    if (isFetching) {
        content = <div>Is Loading categories</div>
    } else if (error) {
        content = <div>Error loading categories.</div>
    } else {
        content = data.map(category => {
            return <ShowCategory key={category} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">{category}</ShowCategory>
        });
    }

    return (
        <div className="sticky top-0 overflow-y flex flex-col items-start">
            {content}
        </div>
    );
};

export default Sidebar;