export default (text = 'Hello world me22') => {
  const element = document.createElement('div');

  element.innerHTML = text;
  return element;
};
