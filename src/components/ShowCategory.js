import useNavigation from '../hooks/use-navigation';
import { useSelector, useDispatch } from "react-redux";
import classNames from 'classnames';
import { setSelected } from "../store";
import { HOME_PAGE_PATH } from '../constants/PathConstants';

function ShowCategory({ children, className, activeClassName }) {
    const { navigate } = useNavigation();
    const category = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    
    /**
     * Don't allow opening a new tab with meta, or ctrl keys, as the
     * selected child needs to be set to selected state
     */
    const handleClick = () => {
        dispatch(setSelected(children));
        navigate(HOME_PAGE_PATH);
    };

    const isActive = category.selected === children;

    const classes = classNames(
        className,
        isActive && activeClassName
    );

    return <div className={classes} onClick={handleClick}>{children}</div>;
};

export default ShowCategory;