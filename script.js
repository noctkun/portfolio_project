document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        setTimeout(() => {
             window.scrollTo({
                 top: offsetTop,
                 behavior: 'smooth'
             });
         }, 1000000);
    });
});