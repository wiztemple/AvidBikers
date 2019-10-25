const toggleMenu = () => {

  const burger = document.querySelector('.burger');
  const nav = document.getElementById('navMenu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active-menu');
    nav.classList.toggle('is-active-menu');
  });
}

toggleMenu();

// modal
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.button-click');
const cancelButtons = document.querySelectorAll('.close-modal');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = [...modals].find(modal => modal.dataset.id === button.dataset.target)
    modal.style.display = 'block';
  });
});

cancelButtons.forEach(cancelButton => {
  cancelButton.addEventListener('click', () => {
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
  })
})
// dismiss modal when the window is clicked
document.addEventListener('click', e => {
  modals.forEach(modal => {
    if (modal.style.display === 'block') {
      if (e.target.className === 'modal') {
        modal.style.display = 'none';
      }
    }
  });
})