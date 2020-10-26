import navBar from './navbar';
import homePage from './homepage';
import menu from './menu';
import contact from './contact';
import removeElement from './remove';

const pageContent = document.getElementById('content');

navBar(pageContent);
homePage(pageContent);

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
  const hp = document.getElementById('rm');
  removeElement(hp);
  homePage(pageContent);
});

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const m = document.getElementById('rm');
  removeElement(m);
  menu(pageContent);
});

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', () => {
  const c = document.getElementById('rm');
  removeElement(c);
  contact(pageContent);
});