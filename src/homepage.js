import { appendElements, newElement } from './manageElements';

const homePage = (target) => {
  const div = newElement('div', null, 'homepage', 'rm');

  const divChilds = {
    backGImage: newElement('img', null, 'background', null, '/src/assets/images/homebg.jpg'),
    title: newElement('h1', 'Best desserts in town', 'hp-h'),
    desc: newElement('p', 'We are a dedicated to make you feel sweeter', 'hp-p'),
  };

  target.appendChild(appendElements(div, divChilds));
};

export default homePage;