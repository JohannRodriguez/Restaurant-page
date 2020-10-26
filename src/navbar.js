import { appendElements, newElement } from './manageElements';

const navBar = (target) => {
  const nav = newElement('nav');

  const navChilds = {
    img: newElement('img', null, null, null, '/src/assets/images/logo.png'),
    navList: newElement('ul'),
  };

  const navListChilds = {
    home: newElement('li', 'Home', null, 'home'),
    menu: newElement('li', 'Menu', null, 'menu'),
    contact: newElement('li', 'Contact', null, 'contact'),
  };

  appendElements(navChilds.navList, navListChilds);

  target.appendChild(appendElements(nav, navChilds));
};

export default navBar;