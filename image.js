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

const changeImg = () => {
  setInterval(()=> {
    if (counter < imgArr.length) {
      imageEl.style.backgroundImage = imgArr[counter];
      
      imageEl.style.backgroundRepeat = "no-repeat";
      imageEl.style.backgroundSize = "contain";
      imageEl.style.backgroundPositionX = "50%";
      counter += 1;
    } else {
      imageEl.style.backgroundImage = imgArr[0];
     
      imageEl.style.backgroundRepeat = "no-repeat";
      imageEl.style.backgroundSize = "contain";
      imageEl.style.backgroundPositionX = "50%";
      counter = 0;
    }

  }, 5000)
 
};

window.addEventListener("load", changeImg());
