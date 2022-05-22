// Create viewport detector function
const isInViewport = function (elem) {
    const distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const scrollGallery = document.querySelectorAll('.scroll-gallery-container'),
    scrollImages = document.querySelectorAll('.scroll-gallery-images'),
    postGalleryImg = document.querySelectorAll('.kg-gallery-image > img'),
    postImg = document.querySelectorAll('.kg-image-card > img');
let img = document.querySelectorAll('.kg-gallery-image');


// On scroll, move gallery horizontally.

window.addEventListener('scroll', function () {

    const currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;

    for (let i = 0; i < scrollGallery.length; i++) {
        if (isInViewport(scrollGallery[i]) && prevScrollpos <= 800) {
            scrollImages[i].style.transform = `translateX(-${prevScrollpos}px)`;
        } else if (isInViewport(scrollGallery[i]) || prevScrollpos >= 801) {
            scrollImages[i].style.transform = `translateX(-${prevScrollpos / 10}px)`;
        } else if (isInViewport(scrollGallery[i]) || prevScrollpos > 1900) {
            scrollImages[i].style.transform = `translateX(-${prevScrollpos / 15}px)`;
        }
    }

}, false);


// $('.kg-gallery-image').click(function () {
//     $('.kg-gallery-image').wrap('<div class="fullscreen"></div>');
// });

// $('.kg-gallery-image').click(function (e) {
//     $(this).wrap('<div class="fullscreen"></div>');
// }, function () {
//     $(this).unwrap();;
// });

$('.kg-gallery-image').click(function (e) {
    if (this.parent().is("div")) {
        this.unwrap();
    } else {
        this.wrap('<div class="fullscreen"></div>');
    }
});
// $(".kp-gallery-image").each(function (i) {
//     $(this).on("click", function () {
//         $('.kg-gallery-image').wrap('<div class="fullscreen"></div>');
//     });
// });
