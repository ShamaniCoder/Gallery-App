

import { fetchData } from "../helper/fetchData.js";
import makeImages from "../helper/makeImages.js";
import { API_URL_RANDOM } from "../../constant.js";

const getRandomImages = async (searchInputElement, headerElement) => {
    const searchParam = searchInputElement.value;
    const url = `${API_URL_RANDOM}&count=30`
    const data = await fetchData(url)
    const imageResults = makeImages(data)
    headerElement.appendChild(imageResults)

}

export default getRandomImages;