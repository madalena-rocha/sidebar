let menuButton = document.querySelector('#menu-button');
let sidebar = document.querySelector('.sidebar');
let searchButton = document.querySelector('.search-button');
let logoutButton = document.querySelector('.log-out');

menuButton.onclick = function() {
    sidebar.classList.toggle('active');
}

searchButton.onclick = function() {
    sidebar.classList.toggle('active');
}

logoutButton.onclick = function() {
    sidebar.classList.toggle('active');
}
