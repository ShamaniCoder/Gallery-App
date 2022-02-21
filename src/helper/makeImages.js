import { API_KEY } from "../../constant.js";
import getDataCreateDetail from "../handler/getDataCreateDetail.js";
import createElement from "./createElement.js";
import { fetchData } from "./fetchData.js";

const makeImages = (data) => {
    console.log(data);
    const galleryElement = createElement('div', 'gallery')
    galleryElement.innerHTML = '';
    data.forEach((item) => {

        let img = createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';
        img.setAttribute('alt', 'image2')
        img.addEventListener('click', () => {getDataCreateDetail(galleryElement, item)})
        galleryElement.appendChild(img);

    })

    return galleryElement;
}

export default makeImages;