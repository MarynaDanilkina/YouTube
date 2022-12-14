const width = 360; //image width
const count = 3; // number of images
const gap = 54;
const carousel = document.querySelector('.carousel');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
let position = 0;

carousel.querySelector('.prev').onclick = function () {
  position += (width * count) + (count * gap);
  position = Math.min(position, 0);
  ul.style.marginLeft = position + 'px';
}

carousel.querySelector('.next').onclick = function () {
  position -= (width * count) + (count * gap);
  position = Math.max(position, -(width * (li.length - count) + gap * (li.length - count)))
  ul.style.marginLeft = position + 'px';
}