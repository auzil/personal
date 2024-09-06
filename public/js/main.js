// animate with vanilla JS on enter view
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver


// get all elements with class .animate
document.addEventListener('DOMContentLoaded', function() {
    let elements = document.querySelectorAll('.animateView');
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animateViewActive', 'animateViewFadeInUp');
                observer.unobserve(entry.target);
                // return;
            }
        });
    });
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let elements = document.querySelectorAll('.animateImage');
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animateImageActive', 'animateViewFadeInLeft');
                observer.unobserve(entry.target);
                // return;
            }
        });
    });
    elements.forEach(element => {
        observer.observe(element);
    });
});

function showSidebar() {
    console.log('show sidebar');
    let sidebar = document.getElementsByClassName('sidebar');
    sidebar[0].classList.toggle('active');
}

// hideSidebar
function hideSidebar() {
    console.log('hide sidebar');
    let sidebar = document.getElementsByClassName('sidebar');
    sidebar[0].classList.remove('active');
}
//add css class animate__animated animate__fadeInUp to animate elements on scroll