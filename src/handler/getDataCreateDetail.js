import createElement from "../helper/createElement.js";
import { fetchData } from "../helper/fetchData.js";
import { API_KEY } from '../../constant.js'


const getDataCreateDetail = async (galleryElement, item) => {
    galleryElement.innerHTML = '';
    const user_url = `https://api.unsplash.com/users/${item.user.username}?client_id=${API_KEY}`;
    const imageDetail = await fetchData(user_url)
    const popupContainer = createElement('div', 'popup-container');
    const userImage = createElement('img', 'user-image')
    const infoContainer = createElement('div', 'info-container');
    const userName = createElement('p', 'user-name')
    const userInstagram = createElement('p', 'user-instagram')
    const userBio = createElement('p', 'user-bio')
    const userTotalLikes = createElement('p', 'user-total-likes')
    const userTotalPhotos = createElement('p', 'user-total-photos')
    galleryElement.appendChild(popupContainer)
    popupContainer.appendChild(userImage)
    popupContainer.appendChild(infoContainer)
    infoContainer.appendChild(userName)
    infoContainer.appendChild(userInstagram)
    infoContainer.appendChild(userBio)
    infoContainer.appendChild(userTotalLikes)
    infoContainer.appendChild(userTotalPhotos)
    userImage.src = imageDetail.profile_image.large
    userName.textContent = `User Name : ${imageDetail.name} `
    userInstagram.textContent = `Instagram : ${imageDetail.instagram_username} `
    if (imageDetail.bio === null) {
        userBio.textContent = `Bio : Biography not found `
    } else {
        userBio.textContent = `Bio : ${imageDetail.bio} `
    }
    userTotalLikes.textContent = `Total Likes : ${imageDetail.total_likes} `
    userTotalPhotos.textContent = `Total Photos : ${imageDetail.total_photos} `
}

export default getDataCreateDetail