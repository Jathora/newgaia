// Sidebar menu and submenu switching logic
document.querySelectorAll('.main-menu').forEach(menu => {
  menu.addEventListener('click', function(e) {
    e.preventDefault();
    // Switch active main menu
    document.querySelectorAll('.main-menu').forEach(m => m.classList.remove('active'));
    this.classList.add('active');
    // Show only relevant submenu
    document.querySelectorAll('.submenu').forEach(sub => sub.style.display = 'none');
    document.getElementById('submenu-' + this.dataset.menu).style.display = 'block';
    // Activate first question in submenu
    let firstQuestion = document.querySelector('#submenu-' + this.dataset.menu + ' .question-link');
    if (firstQuestion) firstQuestion.click();
  });
});

document.querySelectorAll('.question-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Switch active question
    let submenu = this.closest('.submenu');
    submenu.querySelectorAll('.question-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    // Show relevant content
    document.querySelectorAll('.question-content').forEach(cont => cont.style.display = 'none');
    document.getElementById('content-' + this.dataset.content).style.display = 'block';
  });
});

// On load, activate the first main menu item and its first question
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.main-menu.active').click();
});