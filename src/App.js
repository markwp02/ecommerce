import { useFetchProductCategoriesQuery } from "./store";

function App() {
    const {data, error, isFetching} = useFetchProductCategoriesQuery()

    let content;
    if (isFetching) {
        content = <div>Is Loading categories</div>
    } else if (error) {
        content = <div>Error loading categories.</div>
    } else {
        content = data.map(category => {
            return <div key={category}>{category}</div>
        });    
    }

    return <div>{content}</div>
};

export default App;