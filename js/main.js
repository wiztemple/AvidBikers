const toggleMenu = () => {

  const burger = document.querySelector('.burger');
  const nav = document.getElementById('navMenu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active-menu');
    nav.classList.toggle('is-active-menu');
  });
}

toggleMenu();