// Smooth scroll to section on link click
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Donation form submission handling
document.getElementById("donation-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your generous donation!");
    this.reset();
});