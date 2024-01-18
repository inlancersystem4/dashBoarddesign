document.getElementById('openSidebar').addEventListener('click', function () {
    document.querySelector('.layout-sidebar').classList.toggle('responsive_sidebar');
});

document.getElementById('closeSidebar').addEventListener('click', function () {
    document.querySelector('.layout-sidebar').classList.remove('responsive_sidebar');
});