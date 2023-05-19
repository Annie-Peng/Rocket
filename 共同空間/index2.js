const highlight = document.querySelectorAll('.highlight');
const anRounded1 = document.querySelectorAll('.an-rounded1');
const select = document.querySelectorAll('.select');



anRounded1.forEach(function(item,index){
    item.addEventListener('click',function(e){
        highlight.forEach(function(item,index){
            item.style.display = "block";
            item.currentTime = 0;
        })
    })
    item.addEventListener('transitionend',function(e){
        highlight.forEach(function(item,index){
            item.style.display = "none";
        })
    })
})

select.forEach(function(item,index){
    item.addEventListener('click',function(e){
        e.currentTarget.classList.toggle('addBorder');
    })
})



const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

