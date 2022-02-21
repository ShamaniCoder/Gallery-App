import createElement from "../helper/createElement.js"
import getImages from "../handler/getImages.js"

const header = () => {
    const headerElement = createElement('div', 'header-section')
    const divElement = createElement('div', 'header-content')
    const logoElement = createElement('h1', 'logo')
    const paragraphElement = createElement('p', 'sub-line')
    const searchInputElement = createElement('input', 'search-box')
    const buttonElement = createElement('button', 'search-btn')

    logoElement.textContent = "logo"
    paragraphElement.textContent = 'the best royalty free images you can find here.';
    buttonElement.textContent = 'Search';

    searchInputElement.setAttribute('placeholder', 'Search Image')

    headerElement.appendChild(divElement)
    divElement.appendChild(logoElement)
    divElement.appendChild(paragraphElement)
    divElement.appendChild(searchInputElement)
    divElement.appendChild(buttonElement)

    buttonElement.addEventListener('click', () => { getImages(searchInputElement, headerElement) })
    

    return headerElement;
}

export default header