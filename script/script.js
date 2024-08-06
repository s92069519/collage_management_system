var sidebar = document.querySelector('.sidebar');
var side_btn = document.querySelector('#side-btn');
var heard_name = document.querySelector('.head-name');
var bodyE = document.body;

side_btn.addEventListener('click', () => {
    sidebar.classList.add('s-active');
    heard_name.classList.add('s-head');
});

bodyE.addEventListener('dblclick', () => {
    sidebar.classList.remove('s-active');
    heard_name.classList.remove('s-head');
});
