(function(){
var WA='256778947496';
var menu=document.getElementById('menu'),nav=document.querySelector('nav');
menu.addEventListener('click',function(){nav.classList.toggle('open')});
nav.addEventListener('click',function(e){if(e.target.tagName==='A')nav.classList.remove('open')});
// fees tabs
var tabs=document.querySelectorAll('.tabs button'),panels=document.querySelectorAll('.fee');
tabs.forEach(function(b){b.addEventListener('click',function(){
tabs.forEach(function(x){x.classList.remove('on')});b.classList.add('on');
panels.forEach(function(p){p.hidden=p.id!==b.dataset.t})})});
// lightbox
var lb=document.getElementById('lb'),lbi=lb.querySelector('img');
document.querySelectorAll('.gal img').forEach(function(i){i.parentNode.addEventListener('click',function(){lbi.src=i.src;lbi.alt=i.alt;lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});
// WhatsApp form
function wa(text){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(text)}
document.getElementById('waform').addEventListener('submit',function(e){
e.preventDefault();var f=e.target;
var t='Hello Dugnad School, my name is '+f.name.value+'. I am interested in '+f.level.value+'. '+(f.msg.value||'Please share more information.');
window.open(wa(t),'_blank','noopener')});
document.querySelectorAll('[data-wa]').forEach(function(a){a.href=wa(a.dataset.wa)});
// reveal
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}})},{threshold:.1});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
document.getElementById('yr').textContent=new Date().getFullYear();
})();