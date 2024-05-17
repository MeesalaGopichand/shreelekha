document.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;

    document.querySelectorAll('.section').forEach(function (section) {
        var offset = section.offsetTop - window.innerHeight / 2;
        if (scrollPosition >= offset) {
            section.classList.add('animated');
        } else {
            section.classList.remove('animated');
        }
    });
});
