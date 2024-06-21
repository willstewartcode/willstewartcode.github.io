/* 
    Creates "IntersectionObserver" - detects if an element is visible
    to the user
*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// gets elements with class "hidden"
const hiddenElements = document.querySelectorAll('.hidden');

// uses IntersectionObserver to loop through "hidden" elements
hiddenElements.forEach((el) => observer.observe(el));

const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');
const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, {toggle: false});
navLinks.forEach((l) => {
    if (menuToggle.classList.contains('show')) {  // only fire on mobile
        l.addEventListener('click', () => { 
            bsCollapse.toggle() 
        })
    }
})