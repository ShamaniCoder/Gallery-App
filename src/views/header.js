import createElement from "../helper/createElement.js"
import getImages from "../handler/getImages.js"
import getRandomImages from "../handler/getRandomImages.js"

const header = () => {
    const headerElement = createElement('div', 'header-section')
    const divElement = createElement('div', 'header-content')
    const logoElement = createElement('img', 'logo')
    const paragraphElement = createElement('p', 'sub-line')
    const searchInputElement = createElement('input', 'search-box')
    const buttonElement = createElement('button', 'search-btn')

    logoElement.src = "./public/images/hfylogo.png"
    paragraphElement.textContent = 'the best free images you can find here.';
    buttonElement.textContent = 'Search';

    searchInputElement.setAttribute('placeholder', 'Search Image')

    headerElement.appendChild(divElement)
    divElement.appendChild(logoElement)
    divElement.appendChild(paragraphElement)
    divElement.appendChild(searchInputElement)
    divElement.appendChild(buttonElement)

    buttonElement.addEventListener('click', () => {
        if (searchInputElement.value === '') {
            getRandomImages(headerElement)
        } else { getImages(searchInputElement, headerElement) }
    })

    searchInputElement.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            if (searchInputElement.value === '') {
                getRandomImages(headerElement)
            } else { getImages(searchInputElement, headerElement) }
        }
    })


    return headerElement;
}

export default header