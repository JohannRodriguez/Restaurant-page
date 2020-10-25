import navBar from './navbar.js'
import homePage from './homepage.js';
import menu from './menu.js';

const pageContent = document.getElementById('content');

navBar(pageContent);
homePage(pageContent);
menu(pageContent);

const home = document.getElementById('home');

home.addEventListener('click', () => {
  const hp = document.getElementById('rm');
  hp.remove();
  homePage(pageContent);
});