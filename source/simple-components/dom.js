export default (text = '123 🎉🎉🎉') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};
