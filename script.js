const nav = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const btn = document.querySelector('.menu');
const cls = document.querySelector('.cross');

btn.addEventListener('click', () => {
  body.appendChild(nav);
  nav.classList.add('show');
  nav.classList.remove('.nav-menu');
  btn.style.display = 'none';
})

cls.addEventListener('click', () => {
  nav.classList.remove('show');
  nav.classList.add('.nav-menu');
  btn.style.display = 'initial';
})
