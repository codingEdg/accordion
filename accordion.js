document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        const icon = accordion.querySelector('.icon');
        const answer = accordion.querySelector('.answer');

        accordion.addEventListener('click', function() {
            icon.classList.toggle("active");
            answer.classList.toggle("active");
        });
    });
});
