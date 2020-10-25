const navBar = (target) => {
  const nav = document.createElement('nav');

  const img = document.createElement('img');
  img.src = './resources/logo.png';
  const navItems = document.createElement('ul');

  const home = document.createElement('li');
  home.textContent = 'Home';
  const menu = document.createElement('li');
  menu.textContent = 'Menu';
  const contact = document.createElement('li');
  contact.textContent = 'Contact';

  navItems.appendChild(home);
  navItems.appendChild(menu);
  navItems.appendChild(contact);
  nav.appendChild(img);
  nav.appendChild(navItems);
  
  target.appendChild(nav);
};

export default navBar;