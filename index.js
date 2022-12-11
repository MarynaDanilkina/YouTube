const menu = document.querySelectorAll('.hamburger');

menu.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('active')
  })
})