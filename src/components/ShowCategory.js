import { useState } from "react";
import classNames from 'classnames';

function ShowCategory({ children, className, activeClassName }) {
    const [activeCategory, setActiveCategory] = useState(false);
    
    const handleClick = () => {
        setActiveCategory(!activeCategory);
    };

    const classes = classNames(
        'text-blue-500', 
        className,
        activeCategory && activeClassName
    );

    return <div className={classes} onClick={handleClick}>{children}</div>;
};

export default ShowCategory;