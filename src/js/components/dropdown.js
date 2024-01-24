
const dropdownButtons = document.querySelectorAll('.dropdown');
const dropdownContents = document.querySelectorAll('.dropdown-content');

dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.hasAttribute('data-active');
    closeAllDropdowns()

    const content = button.nextElementSibling;

    if(!isActive) {
      content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';

      button.hasAttribute('data-active') ? button.removeAttribute('data-active') :button.setAttribute('data-active', 'true');
      console.log(button)
    }

  });
});

dropdownContents.forEach(content => {
  content.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('link')) {
      content.style.display = 'none';
    }
  });
});


document.addEventListener('click', (event) => {
  const isDropdownButton = event.target.classList.contains('dropdown');
  const isDropdownContent = event.target.classList.contains('dropdown-content');

  if (!isDropdownButton && !isDropdownContent) {
    dropdownContents.forEach(content => {
      content.style.display = 'none';
    });
    dropdownButtons.forEach(buttons => {
      buttons.removeAttribute('data-active');
    })
  }
});

function closeAllDropdowns() {
  dropdownButtons.forEach(button => {
    const content = button.nextElementSibling;
    content.style.display = 'none';
    button.removeAttribute('data-active');
  });
}

