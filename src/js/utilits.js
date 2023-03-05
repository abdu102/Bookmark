const $ = (tag) => {
    return document.querySelector(tag);
}
function createElement(tagName, className, content) {
    const newElement = document.createElement(tagName);
    newElement.setAttribute('class', className);
    newElement.innerHTML = content;
    return newElement;
} 
createElement('div', 'w-[150px] bg-red-500 h-5', '<p>caddwd</p>')