
const menuBtn=document.querySelector('.menu-btn');const mobileNav=document.querySelector('.mobile-nav');
menuBtn.addEventListener('click',()=>{const o=mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o)});mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));
const galleryData={
 caramida:{title:'Model Cărămidă',imgs:['assets/img/g-caramida1.webp','assets/img/g-caramida2.webp','assets/img/g-caramida3.webp']},
 colt:{title:'Model Colț',imgs:['assets/img/g-colt1.webp','assets/img/g-colt2.webp']},
 nord:{title:'Model Nord',imgs:['assets/img/g-nord1.webp']},
 delta:{title:'Model Delta',imgs:['assets/img/g-delta1.webp']},
 orient:{title:'Model Orient',imgs:['assets/img/g-orient1.webp','assets/img/g-orient2.webp']},
 cub:{title:'Model Cub',imgs:['assets/img/g-cub1.webp','assets/img/g-cub2.webp','assets/img/g-cub3.webp']},
 urban:{title:'Model Urban',imgs:['assets/img/g-urban1.webp','assets/img/g-urban2.webp']},
 antic:{title:'Model Antic',imgs:['assets/img/g-antic1.webp']},
 yeti:{title:'Dale YETI',imgs:['assets/img/g-yeti1.webp','assets/img/g-yeti2.webp']},
 tuburi:{title:'Tuburi din beton',imgs:['assets/img/g-tuburi1.webp','assets/img/g-tuburi2.webp']},
 borduri:{title:'Borduri din beton',imgs:['assets/img/g-borduri1.webp','assets/img/g-borduri2.webp','assets/img/g-borduri3.webp','assets/img/g-borduri4.webp']},
 rigole:{title:'Rigole din beton',imgs:['assets/img/g-rigole1.webp','assets/img/g-rigole2.webp','assets/img/g-rigole3.webp']},
 capace:{title:'Capace gard / stâlp',imgs:['assets/img/g-capace1.webp','assets/img/g-capace2.webp']},
 piatra:{title:'Piatră decorativă din beton',imgs:['assets/img/g-piatra1.webp','assets/img/g-piatra2.webp','assets/img/g-piatra3.webp','assets/img/g-piatra4.webp']}
};
const lb=document.querySelector('.lightbox'),lbImg=lb.querySelector('img'),cap=lb.querySelector('.lb-caption');let current=[],idx=0,title='';
function show(){lbImg.src=current[idx];cap.textContent=title+(current.length>1?` • ${idx+1}/${current.length}`:'');}
function openGallery(imgs,t=''){current=imgs;idx=0;title=t;show();lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeLB(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-gallery]').forEach(b=>b.addEventListener('click',()=>{const g=galleryData[b.dataset.gallery];const clickedImg=b.querySelector('img')?.getAttribute('src');const imgs=clickedImg?[clickedImg,...g.imgs.filter(src=>src!==clickedImg)]:g.imgs;openGallery(imgs,g.title)}));document.querySelectorAll('[data-full]').forEach(b=>b.addEventListener('click',()=>openGallery([b.dataset.full],b.querySelector('em')?.textContent||'')));
lb.querySelector('.lb-close').onclick=closeLB;lb.querySelector('.lb-next').onclick=()=>{idx=(idx+1)%current.length;show()};lb.querySelector('.lb-prev').onclick=()=>{idx=(idx-1+current.length)%current.length;show()};lb.addEventListener('click',e=>{if(e.target===lb)closeLB()});document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')closeLB();if(e.key==='ArrowRight')lb.querySelector('.lb-next').click();if(e.key==='ArrowLeft')lb.querySelector('.lb-prev').click()});
const inputs=['length','width','waste'].map(id=>document.getElementById(id));function calc(){const l=+inputs[0].value||0,w=+inputs[1].value||0,r=+inputs[2].value||0;const base=l*w,total=base*(1+r/100);document.getElementById('total').textContent=total.toFixed(1)+' m²';document.getElementById('calcWa').href='https://wa.me/40741051193?text='+encodeURIComponent(`Bună ziua, doresc o ofertă pentru aproximativ ${total.toFixed(1)} m² de pavaj (suprafață ${base.toFixed(1)} m² + rezervă ${r}%).`);}
inputs.forEach(i=>i.addEventListener('input',calc));
