export default (text = 'Hello world me') => {
  const element = document.createElement('div');

  element.innerHTML = text;

  return element;
};
