const newElement = (type, text, eClass, eId) => {
  const element = document.createElement(type);
  if(text) {
    element.textContent = text;
  }
  if(eId) {
    element.id = eId;
  }
  if(eClass) {
    element.classList = eClass;
  }
  return element;
};

const appendElements = (parent, childs) => {
  for(const [key, value] of Object.entries(childs)) {
    parent.appendChild(value);
  }
  return parent;
};

export {newElement, appendElements};