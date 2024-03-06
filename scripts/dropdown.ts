document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropbtn') as HTMLButtonElement;
    const dropdownContent = document.getElementById('myDropdown') as HTMLDivElement;

    dropdownBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!(event.target as HTMLElement).matches('#dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});