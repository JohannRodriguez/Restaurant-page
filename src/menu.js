import { newElement, appendElements } from './manageElements';

const menu = (target) => {
  const section = newElement('section', null, 'menu', 'rm');

  const sectionChilds = {
    backGImage: newElement('img', null, 'background', null, './resources/menubg.jpg'),
    title: newElement('h1', 'Our Menu'),
    bread: newElement('div', null, 'menu-choice bread'),
    coffee: newElement('div', null, 'menu-choice coffee'),
    dessert: newElement('div', null, 'menu-choice dessert'),
  };

  const breadChilds = {
    title: newElement('h3', 'FRESH BREAD'),
    breadList: newElement('ul'),
  };
  const coffeeChilds = {
    title: newElement('h3', 'COFFEE'),
    coffeeList: newElement('ul'),
  };
  const dessertChilds = {
    title: newElement('h3', 'DESSERT'),
    dessertList: newElement('ul'),
  };

  const breadListChilds = {
    pumpernickel: newElement('li', 'Pumpernickel....................$5.95'),
    honeyW: newElement('li', 'Honey Whole Wheat...........$5.95'),
    mozzarelaO: newElement('li', 'Mozzarela Onion................$6.25'),
    milledW: newElement('li', 'Milled Wheat......................$5.25'),
    tigerB: newElement('li', 'Tiger Bread.........................$5.75'),
    crispB: newElement('li', 'Crisp Bread........................$6.65'),
  };
  const coffeeListChilds = {
    espresso: newElement('li', 'Espresso............................$2.55'),
    americano: newElement('li', 'Cafe Americano.................$3.95'),
    latte: newElement('li', 'Cafe Latte..........................$5.50'),
    miel: newElement('li', 'Coffee Miel........................$4.50'),
    cappuccino: newElement('li', 'Cappuccino........................$4.00'),
    cocoa: newElement('li', 'Cocoa..................................$3.50'),
  };
  const dessertListChilds = {
    croissant: newElement('li', 'Croissant............................$9.55'),
    milleF: newElement('li', 'Mille-Feville......................$12.50'),
    cherryP: newElement('li', 'Cherry Pie...........................$13.50'),
    cremeB: newElement('li', 'Creme Brulée.....................$10.50'),
    appleC: newElement('li', 'Apple Cupcake....................$9.75'),
    cheesecake: newElement('li', 'Cheesecake.........................$11.50'),
  };

  appendElements(breadChilds.breadList, breadListChilds);
  appendElements(coffeeChilds.coffeeList, coffeeListChilds);
  appendElements(dessertChilds.dessertList, dessertListChilds);

  appendElements(sectionChilds.bread, breadChilds);
  appendElements(sectionChilds.coffee, coffeeChilds);
  appendElements(sectionChilds.dessert, dessertChilds);

  target.appendChild(appendElements(section, sectionChilds));
};

export default menu;