(function(){
  document.getElementById('year').textContent=new Date().getFullYear();
  var root=document.documentElement,btn=document.getElementById('theme'),saved=null;
  try{saved=localStorage.getItem('theme');}catch(e){}
  function dark(){return root.getAttribute('data-theme')?root.getAttribute('data-theme')==='dark':window.matchMedia('(prefers-color-scheme:dark)').matches;}
  function icon(){btn.textContent=dark()?'☀':'☾';}
  if(saved)root.setAttribute('data-theme',saved);
  icon();
  btn.addEventListener('click',function(){
    var next=dark()?'light':'dark';root.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next);}catch(e){}
    icon();
  });
  document.body.classList.remove('nojs');
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
  els.forEach(function(e){io.observe(e);});
})();
