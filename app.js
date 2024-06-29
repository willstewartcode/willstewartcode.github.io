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
            // remove this to only play animations once
            entry.target.classList.remove('show');
        }
    });
});

// gets elements with class "hidden"
const hiddenElements = document.querySelectorAll('.hidden');

// uses IntersectionObserver to loop through "hidden" elements
hiddenElements.forEach((el) => observer.observe(el));