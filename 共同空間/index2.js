const highlight = document.querySelectorAll('.highlight');
const banner = document.querySelector('.banner .row');
const anRounded1 = document.querySelector('.an-rounded1');
const anRounded2 = document.querySelector('.an-rounded2');
const select = document.querySelectorAll('.select');
const navMarquee = document.querySelector('.navMarquee');



//banner click action
banner.addEventListener('click',function(e){
  // console.log(e.target.dataset.banner);
  if(e.target.getAttribute('class')==('row h-100 rounded-24 justify-content-center'||'col-2')){
      return;
  }else{
      highlight.forEach(function(item,index){
          if(e.target.dataset.banner==1){
              item.style.display = "block";
              anRounded1.classList.add('box-shadow1');
              anRounded2.classList.remove('box-shadow2');
          }else if(e.target.dataset.banner==2){
              item.style.display = "block";
              anRounded1.classList.remove('box-shadow1');
              anRounded2.classList.add('box-shadow2');
          }
      });
  };
})


//banner mouseover action
banner.addEventListener('mouseover',function(e){
  highlight.forEach(function(item,index){
      item.style.display = "none";
      anRounded1.classList.remove('box-shadow1');
      anRounded2.classList.remove('box-shadow2');
  });
})



// const slider = document.querySelector('.gallery');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', e => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', _ => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', _ => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', e => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const SCROLL_SPEED = 3;
//   const walk = (x - startX) * SCROLL_SPEED;
//   slider.scrollLeft = scrollLeft - walk;
// });

//跑馬燈
let nav='';
for(i=0;i<1000;i++){
    nav+=`<span class="fs-9 mx-3">
    Let’s join
    </span>
    <span class="mx-3">
    - 火箭隊培訓營 Rocket -
    </span>
    <span class="mx-3">
    - 共同空間 co-working space -
    </span>`;
};
navMarquee.innerHTML=nav;