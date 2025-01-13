    // Gambar yang akan digunakan
        const images = [
            "photos/logon/1.jpeg", // Ganti dengan gambar pertama
            "photos/logon/2.jpeg", // Ganti dengan gambar kedua
            "photos/logon/3.jpeg"  // Ganti dengan gambar ketiga
        ];

        let currentImageIndex = 0;

        // Fungsi untuk mengganti gambar setiap 5 detik
        function changeImage() {
            const imageSection = document.querySelector('.image-section');
            imageSection.style.backgroundImage = `url(${images[currentImageIndex]})`;

            // Mengupdate indeks gambar untuk mengganti gambar selanjutnya
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        // Panggil fungsi changeImage setiap 5 detik
        setInterval(changeImage, 5000);

        // Panggil pertama kali untuk menampilkan gambar pertama
        changeImage();

        // Fungsi untuk Forgot Password
        function forgotPassword() {
            window.location.href = 'forgot.html';
        }

        // Fungsi untuk Create New Account
        function createAccount() {
            window.location.href = 'create.html';
        }

        // Menangani pengiriman form
        document.getElementById("login-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            
            // Validasi sederhana
            if(username === "admin" && password === "admin") {
                alert("Login Successful");
                window.location.href = "home.html"; 
            } else {
                alert("Invalid Username or Password");
            }
        });