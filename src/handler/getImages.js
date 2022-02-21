import { fetchData } from "../helper/fetchData.js";
import makeImages from "../helper/makeImages.js";
import { API_URL } from "../../constant.js";


const getImages = async (searchInputElement, headerElement) => {
    const searchParam = searchInputElement.value;
    const url = `${API_URL}&query=${searchParam}&per_page=50`
    const data = await fetchData(url)
    const imageResults = makeImages(data.results)
    headerElement.appendChild(imageResults)

}

export default getImages;