var anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var href = anchor.getAttribute('href');
        if (!href)
            return;
        var targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
});
