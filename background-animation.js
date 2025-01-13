const backgrounds = [
    'url("background1.png")',
    'url("background2.png")',
    'url("background3.png")',
];

let currentIndex = 0;
const body = document.getElementById('animated-background');

// Fungsi untuk mengganti latar belakang
function changeBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    body.style.backgroundImage = backgrounds[currentIndex];
    body.style.backgroundAttachment = "fixed"; // Tetapkan kembali properti fixed
    body.style.backgroundSize = "cover"; // Pastikan tetap menutupi layar
    body.style.backgroundPosition = "center"; // Posisikan di tengah
}

// Ganti background setiap 10 detik
setInterval(changeBackground, 10000);

// Atur background awal
body.style.backgroundImage = backgrounds[currentIndex];
body.style.backgroundAttachment = "fixed";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
