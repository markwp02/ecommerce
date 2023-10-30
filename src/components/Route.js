import useNavigation from "../hooks/use-navigation";

function Route({ regexPath, children }) {
    const { currentPath } = useNavigation();

    if(currentPath.match(regexPath) != null) {
        return children;
    }
    return null;
}

export default Route;