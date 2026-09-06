var openBtn   = document.getElementById('openMenu');
var closeBtn  = document.getElementById('closeMenu');
var menu      = document.getElementById('mobileMenu');
var overlay   = document.getElementById('overlay');
var demoForm  = document.getElementById('demoForm');
var formMsg   = document.getElementById('formMsg');
var searchFrm = document.getElementById('searchForm');
var searchBox = document.getElementById('searchInput');
function openMenu()  { menu.classList.add('open');    overlay.classList.add('open');    }
function closeMenu() { menu.classList.remove('open'); overlay.classList.remove('open'); }

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
menu.querySelectorAll('a').forEach(function(link) { link.addEventListener('click', closeMenu); });
searchFrm.addEventListener('submit', function(e) {
  e.preventDefault();
  var q = searchBox.value.trim().toLowerCase();
  if (!q) return;

  var sections = { 'feature': '#features', 'demo': '#contact', 'contact': '#contact', 'resort': '#solutions', 'hotel': '#solutions', 'review': '#testimonial' };
  var go = '#features';
  for (var key in sections) { if (q.includes(key)) { go = sections[key]; break; } }

  document.querySelector(go).scrollIntoView({ behavior: 'smooth' });
  searchBox.value = '';
});
demoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!demoForm.checkValidity()) { demoForm.reportValidity(); return; }
  formMsg.classList.add('show');
  demoForm.reset();
  setTimeout(function() { formMsg.classList.remove('show'); }, 6000);
});
