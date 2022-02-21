import header from './src/views/header.js';

const headerContainer = header();

const userInterface = document.getElementById('user-interface');
userInterface.appendChild(headerContainer);
