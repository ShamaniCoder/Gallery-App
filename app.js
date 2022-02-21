import header from './src/views/header.js';
// import popup from './src/views/popup.js';

const headerContainer = header();
// const popupContainer = popup();

const userInterface = document.getElementById('user-interface');
userInterface.appendChild(headerContainer);
// userInterface.appendChild(popupContainer);
