const imageEl = document.getElementById("js-dinamic-image");

const imgArr = [
  `url('./images/masha_dress.jpg')`,
  `url('./images/haed_beast.jpg')`,
  `url('./images/blured_mask.jpg')`,
  `url('./images/head_on_sun.jpg')`,
  `url('./images/holly.jpg')`,
  `url('./images/unblured_mask.jpg')`,
];

let counter = 0;

const changeImg = (e) => {
  if (counter < imgArr.length) {
    e.target.style.backgroundImage = imgArr[counter];
    e.target.style.backgroundAttachment = "fixed";
    e.target.style.backgroundRepeat = "no-repeat";
    e.target.style.backgroundSize = "contain";
    e.target.style.backgroundPositionX = "50%";
    counter += 1;
  } else {
    e.target.style.backgroundImage = imgArr[0];
    e.target.style.backgroundAttachment = "fixed";
    e.target.style.backgroundRepeat = "no-repeat";
    e.target.style.backgroundSize = "contain";
    e.target.style.backgroundPositionX = "50%";
    counter = 0;
  }
};

imageEl.addEventListener("click", changeImg);
