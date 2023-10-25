import { useSelector, useDispatch } from "react-redux";
import classNames from 'classnames';
import { setSelected } from "../store";

function ShowCategory({ children, className, activeClassName }) {
    const category = useSelector((state) => state.categories);
    const dispatch = useDispatch()

    
    const handleClick = () => {
        dispatch(setSelected(children))
    };

    const isActive = category.selected === children;

    const classes = classNames(
        'text-blue-500', 
        className,
        isActive && activeClassName
    );

    return <div className={classes} onClick={handleClick}>{children}</div>;
};

export default ShowCategory;