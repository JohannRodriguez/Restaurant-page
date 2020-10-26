import { appendElements, newElement } from './manageElements';

const contact = (target) => {
  const section = newElement('section', null, 'contact', 'rm');

  const sectionChilds = {
    backGImage: newElement('img', null, 'background', null, './resources/contactbg.jpg'),
    title: newElement('h1', 'Contact us'),
    number: newElement('p', 'Phone: (123)-123-1234', 'contact'),
    email: newElement('p', 'Email: littlemamas@sample.com', 'contact'),
    location: newElement('p', 'Where to find us: Fake Avenue no.537', 'contact'),
  };

  target.appendChild(appendElements(section, sectionChilds));
};

export default contact;