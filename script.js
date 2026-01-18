// Animate skill badges
const skillBadges = document.querySelectorAll('.skill-badge');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
        }
    });
}, {threshold:0.2});
skillBadges.forEach(badge => observer.observe(badge));

// Certificate modal
const modal = document.getElementById("cert-modal");
const modalImg = document.getElementById("cert-modal-img");
const closeBtn = document.querySelector(".close");
const certificates = document.querySelectorAll(".certificate");

certificates.forEach(cert => {
    cert.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = cert.src;
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};

modal.onclick = function(e) {
    if(e.target === modal) modal.style.display = "none";
};
