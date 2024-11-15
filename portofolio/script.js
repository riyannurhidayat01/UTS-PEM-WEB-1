
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fungsi untuk mengarahkan ke bagian tertentu pada halaman
document.getElementById('aboutBtn').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('projectsBtn').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});
