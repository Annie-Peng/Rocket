const highlight = document.querySelectorAll('.highlight');
const banner = document.querySelector('.banner .row');
const anRounded1 = document.querySelector('.an-rounded1');
const anRounded2 = document.querySelector('.an-rounded2');
const coach = document.querySelectorAll(`div.an-pic[data-coach]`);
const coachGroup = document.querySelector('.coach-group');
const transContent = document.querySelector('.trans-content');
const navMarquee = document.querySelector('.navMarquee');
const sponserMarquee = document.querySelector('.sponserMarquee');

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


let data = [
    {
        'title': '前端教練 | 廖洧杰',
        'content': `<li>2016-2022 過往經歷：<a href="https://www.hexschool.com/">六角學院校長</a>、<a href="https://www.facebook.com/%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%9F%B9%E8%A8%93%E7%87%9F-113926539963626">高雄火箭隊</a>前端教練</li>
                    <li>2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位</li>
                    <li>2013-2019 授課人數：線上+線下授課學員超過 25,000 位</li>
                    <li>2014-2019 線下授課：<a href="https://www.im.nuk.edu.tw/?page_id=95">高雄大學前端領域兼任講師</a></li>
                    <li>2007-2019 實務經驗：經手超過 100 個實際專案，其領域不乏中小企業、政府專案、銀行系統</li>`
    },
    {
        'title': '前端教練 | 穎旻',
        'content': `<li>六角學院前端工程師</li>
                    <li>六角學院前端講師</li>
                    <li>金龍國小教育訓練講師</li>
                    <li>國泰產險教育訓練講師</li>`
    },
    {
        'title': '後端教練 | 賈斯汀',
        'content': `<li>高雄市警察局縣市合併內外部整合</li>
                    <li>嘉義縣警察局全球資訊網與內部知識網</li>
                    <li>總統府全球資訊網系統維護及開發</li>
                    <li>總統府 APP 新聞即時通系統開發</li>
                    <li>金管會 EIP SSO 整合</li>
                    <li>經濟部工業局電子書包加值應用計畫系統規劃、設計開發</li>
                    <li>國立海生館活動與報名系統規劃開發</li>
                    <li>國立海生館海洋教育網規劃開發</li>
                    <li>台灣淨水器材百科商務平台規劃開發</li>
                    <li>高雄市小學電子書包試行計畫</li>
                    <li>屏東國立海生館活動與報名系統</li>
                    <li>屏東國立海生館海洋教育網</li>
                    <li>威錦水器材百科補助計畫</li>
                    <li>屏東國立海生館活動與報名系統</li>
                    <li>屏東國立海生館活動與報名系統</li>
                    <li>屏東國立海生館活動與報名系統</li>`
    },
    {
        'title': 'UI 教練 | 卡斯伯',
        'content': `<li>2016-2022 過往經歷：<a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.hexschool.com%2F">六角學院</a>共同創辦人技術 Blog - 卡斯伯前端</li>
                    <li>2016-2022 近期授課經驗：<a href="https://www.hexschool.com/courses/vue-training.html">Vue 3 直播班講師</a>、<a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqRZLtIcPdls%26list%3DRDCMUC-b2nGm0xLzic38Byti0VjA%26start_radio%3D1">從 Figma 到 VSCode，設計做到網頁切版</a></li>
                    <li>2013-2016 實務經驗：鴻海軟體工程師，設計師轉職前端工程師，擅長將複雜觀念用圖形化方式呈現</li>
                    <li>六屆 IT 鐵人邦獲選紀錄</li>
                    <li>Modern Web 研討會講者</li>
                    <li>研討會經驗-經驗豐富的技術開發者 2017 Modern Web 技術講者</li>
                    <li>2021 {Laravel x Vue} Conf 技術講者</li>
                    <li>五屆 IT 鐵人賽優選</li>`,
    }

]


// coach資料替換
coachGroup.addEventListener('click',function(e){
    // console.log(e.target.dataset.coach);
    if(e.target.getAttribute('class')=='coach-group d-flex'){
        return;
    }else{
    let str='';
    coach.forEach(function(item,index){
        if(item.getAttribute('data-coach')==e.target.dataset.coach){
            str=`<h4 class="title fs-4">${data[index].title}</h4>
                <ul class="list lh-28" style="font-weight: 400">
                ${data[index].content}
                </ul>
                </div>`;
            item.classList.add("bg-blue-100");
            item.classList.remove("bg-white");
        }else{
            item.classList.remove("bg-blue-100");
            item.classList.add("bg-white");
        }
    })
    transContent.innerHTML=str;
    }
})










//跑馬燈
let nav='';
for(i=0;i<10;i++){
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

let sponser='';
for(i=0;i<10;i++){
    sponser+=`<div class="item me-4">
    <div class="pic bg-white text-center"><img src="./organizer/lg/organizer-rocket-lg.png"></div>
    <div class="sub-title mt-3">主辦單位</div>
    <div class="content">火箭隊</div>
  </div>
  <div class="item me-4">
    <div class="pic bg-white text-center"><img src="./organizer/lg/organizer-hexschool-lg.png"></div>
    <div class="sub-title mt-3">協辦單位</div>
    <div class="content">六角學院</div>
  </div>
  <div class="item me-4">
    <div class="pic bg-white text-center"><img src="./organizer/lg/organizer-goodidea-lg.png"></div>
    <div class="sub-title mt-3">協辦單位</div>
    <div class="content">好想工作室</div>
  </div>
  <div class="item me-4">
    <div class="pic bg-white text-center"><img src="./organizer/lg/organizer-kdan-lg.png"></div>
    <div class="sub-title mt-3">合作招募廠商</div>
    <div class="content">凱鈿科技</div>
  </div>
  <div class="item me-4">
    <div class="pic bg-white text-center"><img src="./organizer/lg/organizer-titan-lg.pg.png"></div>
    <div class="sub-title mt-3">合作招募廠商</div>
    <div class="content">鈦坦科技</div>
  </div>
  <div class="item me-4">
    <div class="pic bg-white text-center"><img src="./organizer/lg/organizer-skw-lg.png"></div>
    <div class="sub-title mt-3">合作招募廠商</div>
    <div class="content">坂和企業</div>
  </div>
  <div class="item me-4">
    <div class="pic bg-white text-center"><img src="./organizer/lg/organizer-wistron-lg.png"></div>
    <div class="sub-title mt-3">合作招募廠商</div>
    <div class="content">緯創資通</div>
  </div>`;

};
sponserMarquee.innerHTML=sponser;


    










