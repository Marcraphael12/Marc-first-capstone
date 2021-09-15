const nav = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const btn = document.querySelector('.menu');
const cls = document.querySelector('.cross');
btn.addEventListener('click', () => {
  body.appendChild(nav);
  nav.classList.add('show');
  nav.classList.remove('.nav-menu');
  btn.style.display = 'none';
});

cls.addEventListener('click', () => {
  nav.classList.remove('show');
  nav.classList.add('.nav-menu');
  btn.style.display = 'initial';
});

const student = [
  {
    name: ['Student name', 'Student name', 'Student name', 'Student name', 'Student name', 'Student name'],
    post: ['Post exsudatos labores itinerum longos.', 'Post exsudatos labores itinerum longos.', 'Post exsudatos labores itinerum longos.', 'Post exsudatos labores itinerum longos.', 'Post exsudatos labores itinerum longos.', 'Post exsudatos labores itinerum longos.'],
    pictures: ['./images/photos/profil1.jpg', './images/photos/profil2.jpg', './images/photos/profil3.jpg', './images/photos/profil4.jpg', './images/photos/profil5.jpg', './images/photos/profil6.jpeg'],
    testimony: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Nemo quaeso miretur.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Nemo quaeso miretur.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Nemo quaeso miretur.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Nemo quaeso miretur.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Nemo quaeso miretur.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.Nemo quaeso miretur.'],
  },
];
const partners = document.querySelector('.partners');
const students = document.createElement('section');
const main = document.querySelector('.h-main');
students.classList.add('team-members', 'column-center');

students.innerHTML = `<h1 class="column-center team-title">Some Students Testimony</h1>
<ul class="students-testimony column-center">
  <li class="student inline-center">
  <img src="${student[0].pictures[0]}" alt="Student picture" class="student-image">
    <div class="informations">
      <h3 class="name">${student[0].name[0]}</h3>
      <h4 class="post">${student[0].post[0]}</h4>
      <p class="testimony">${student[0].testimony[0]}</p>
    </div>
  </li>
  <li class="student inline-center">
    <img src="${student[0].pictures[1]}" alt="Student picture" class="student-image">
    <div class="informations">
      <h3 class="name">${student[0].name[1]}</h3>
      <h4 class="post">${student[0].post[1]}</h4>
      <p class="testimony">${student[0].testimony[1]}</p>
    </div>
  </li>
  <li class="student inline-center">
    <img src="${student[0].pictures[2]}" alt="Student picture" class="student-image">
    <div class="informations">
      <h3 class="name">${student[0].name[2]}</h3>
      <h4 class="post">${student[0].post[2]}</h4>
      <p class="testimony">${student[0].testimony[2]}</p>
    </div>
  </li>
  <li class="student inline-center">
    <img src="${student[0].pictures[3]}" alt="Student picture" class="student-image">
    <div class="informations">
      <h3 class="name">${student[0].name[3]}</h3>
      <h4 class="post">${student[0].post[3]}</h4>
      <p class="testimony">${student[0].testimony[3]}</p>
    </div>
  </li>
  <li class="student inline-center">
    <img src="${student[0].pictures[4]}" alt="Student picture" class="student-image">
    <div class="informations">
      <h3 class="name">${student[0].name[4]}</h3>
      <h4 class="post">${student[0].post[4]}</h4>
      <p class="testimony">${student[0].testimony[4]}</p>
    </div>
  </li>
  <li class="student inline-center">
    <img src="${student[0].pictures[5]}" alt="Student picture" class="student-image">
    <div class="informations">
      <h3 class="name">${student[0].name[5]}</h3>
      <h4 class="post">${student[0].post[5]}</h4>
      <p class="testimony">${student[0].testimony[5]}</p>
    </div>
  </li>
</ul>`;

main.insertBefore(students, partners);
