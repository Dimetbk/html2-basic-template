window.onload = function(){
  slideOne();
  slideTwo();
};

const sliderOne = document.getElementById('slider-1');
const sliderTwo = document.getElementById('slider-2');
const displayValOne = document.getElementById('range1');
const displayValTwo = document.getElementById('range2');
const minGap = 0;
const sliderTrack = document.querySelector('.filter__slider-track');
const sliderMaxValue = document.getElementById('slider-1').max;

function slideOne(){
  if(parseInt(sliderTwo.value, 10) - parseInt(sliderOne.value, 10) <= minGap){
    sliderOne.value = parseInt(sliderTwo.value, 10) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo(){
  // eslint-disable-next-line radix
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
    sliderTwo.value = parseInt(sliderOne.value, 10) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor(){
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #9070ec ${percent1}% , #9070ec ${percent2}%, #e2e2e2 ${percent2}%)`;
}
