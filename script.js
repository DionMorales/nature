const nav=document.querySelector('nav'),phone=matchMedia('(max-width:600px)');

// Hamburger menu (phone)
document.getElementById('burger').onclick=()=>nav.classList.toggle('menu-open');

// Home cards: on phone, Learn More expands the card instead of opening the page
document.querySelectorAll('.cards .card').forEach(card=>card.addEventListener('click',e=>{
  if(!phone.matches)return;           // tablet + desktop: follow the link
  e.preventDefault();
  if(!e.target.closest('.learn'))return;
  const open=card.classList.toggle('open');
  card.querySelector('.learn').textContent=open?'Show Less':'Learn More';
}));