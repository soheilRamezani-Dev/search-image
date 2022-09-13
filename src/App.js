import Images from "./components/content/Images";
import SearchForm from "./components/header/SearchForm";
import { useState } from "react";


const App = () => {

    const [images,setImages] = useState([]);

    return <div>
        <SearchForm setImages={setImages} />
        <Images images={images} />
    </div>
}
 
export default App;