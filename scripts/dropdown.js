document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtn = document.getElementById('dropbtn');
    var dropdownContent = document.getElementById('myDropdown');
    dropdownBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
    });
    window.addEventListener('click', function (event) {
        if (!event.target.matches('#dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});