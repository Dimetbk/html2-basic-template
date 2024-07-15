const point = document.querySelectorAll('.hero__point');
const itemSlider = document.querySelectorAll('.hero__offers-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

point[0].classList.add('activeImage');
itemSlider[0].classList.add('activeSlide');

let counter = 0;

for(let i = 0; i < point.length; i++){
  point[i].addEventListener('click',()=>{
    for(let k = 0; k < itemSlider.length; k++) {
      point[k].classList.remove('activeImage');
      itemSlider[k].classList.remove('activeSlide');
    }
    counter = i;
    itemSlider[counter].classList.add('activeSlide');
    point[counter].classList.add('activeImage');
  });
}

prevBtn.addEventListener ('click',()=>{
  for(let k = 0; k < itemSlider.length; k++) {
    point[k].classList.remove('activeImage');
    itemSlider[k].classList.remove('activeSlide');
  }
  counter--;
  if (counter < 0){
    counter = itemSlider.length - 1;
  }
  itemSlider[counter].classList.add ('activeSlide');
  point[counter].classList.add ('activeImage');
});

nextBtn.addEventListener ('click',()=>{
  for(let k = 0; k < itemSlider.length; k++) {
    point[k].classList.remove('activeImage');
    itemSlider[k].classList.remove('activeSlide');
  }
  counter++;
  if (counter >= itemSlider.length){
    counter = 0;
  }
  itemSlider[counter].classList.add ('activeSlide');
  point[counter].classList.add ('activeImage');
});
