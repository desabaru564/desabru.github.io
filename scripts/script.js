// Highlight menu aktif berdasarkan URL
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Efek transisi fade-in
    document.body.classList.add("loaded");
});

// Validasi Form Kontak
const form = document.querySelector("form");
if (form) {
    form.addEventListener('submit', function (e) {
        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const pesan = document.getElementById('pesan').value.trim();

        if (!nama || !email || !pesan) {
            alert("Semua kolom harus diisi!");
            e.preventDefault();
        }
    });
}

// Tombol Scroll ke Atas
window.onscroll = function () {
    const btn = document.getElementById("toTopBtn");
    if (btn) {
        btn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("toTopBtn");
    if (btn) {
        btn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(s => s.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Ganti gambar setiap 4 detik
}

document.addEventListener("DOMContentLoaded", showSlides);
