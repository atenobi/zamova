const textEl = document.getElementsByClassName("css-content-text");
const titleEl = document.getElementsByClassName("content__title");
const sizeButton = document.getElementById("js-text-size-button");


const textSizeFunc = ()=> {
    [...textEl].forEach((el)=> {
        el.classList.toggle('big-text');
    })
};

const titleSizeFunc = () => {
    [...titleEl].forEach((el)=> {
        el.classList.toggle('big-text');
    })
};

sizeButton.addEventListener('click', textSizeFunc);
sizeButton.addEventListener('click', titleSizeFunc);