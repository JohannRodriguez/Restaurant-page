import navBar from './navbar.js'
import homePage from './homepage.js';
import menu from './menu.js';
import contact from './contact.js';

const pageContent = document.getElementById('content');

navBar(pageContent);
homePage(pageContent);

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
  const hp = document.getElementById('rm');
  hp.remove();
  homePage(pageContent);
});

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const hp = document.getElementById('rm');
  hp.remove();
  menu(pageContent);
});

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', () => {
  const hp = document.getElementById('rm');
  hp.remove();
  contact(pageContent);
});