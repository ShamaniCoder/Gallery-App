import getDataCreateDetail from "../handler/getDataCreateDetail.js";
import createElement from "./createElement.js";

const galleryElement = createElement('div', 'gallery')

const makeImages = (data) => {
    galleryElement.innerHTML = '';
    data.forEach((item) => {

        let img = createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';
        img.setAttribute('alt', 'image2')
        img.addEventListener('click', () => {
            getDataCreateDetail(item)
            window.scroll(0, 0)
        })
        galleryElement.appendChild(img);

    })

    return galleryElement;
}

export default makeImages;