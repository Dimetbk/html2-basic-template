const point = document.querySelectorAll('.hero__point');
const itemSlider = document.querySelectorAll('.hero__offers-item');
const prevBtn = document.getElementById('prevbtn');
const nextBtn = document.getElementById('nextbtn');

point[0].classList.add('activeimage');
itemSlider[0].classList.add('activeslide');

let counter = 0;

for(let i = 0; i < point.length; i++){
  point[i].addEventListener('click',()=>{
    for(let k = 0; k < itemSlider.length; k++) {
      point[k].classList.remove('activeimage');
      itemSlider[k].classList.remove('activeslide');
    }
    counter = i;
    itemSlider[counter].classList.add('activeslide');
    point[counter].classList.add('activeimage');
  });
}

prevBtn.addEventListener ('click',()=>{
  for(let k = 0; k < itemSlider.length; k++) {
    point[k].classList.remove('activeimage');
    itemSlider[k].classList.remove('activeslide');
  }
  counter--;
  if (counter < 0){
    counter = itemSlider.length - 1;
  }
  itemSlider[counter].classList.add ('activeslide');
  point[counter].classList.add ('activeimage');
});

nextBtn.addEventListener ('click',()=>{
  for(let k = 0; k < itemSlider.length; k++) {
    point[k].classList.remove('activeimage');
    itemSlider[k].classList.remove('activeslide');
  }
  counter++;
  if (counter >= itemSlider.length){
    counter = 0;
  }
  itemSlider[counter].classList.add ('activeslide');
  point[counter].classList.add ('activeimage');
});
