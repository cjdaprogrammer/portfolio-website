document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    const observer = new Intersection(entries => { 
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            sections.forEach(section => {
                section.classList.add("hidden");
            });
            
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.classList.remove("hidden");
        });
    });
    function downloadCV(event) {
        if (confirm("Do you want to download the CV?")) {
        } else {
            event.preventDefault();
        }
    }
});



