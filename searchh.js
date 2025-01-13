document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-form input");
    const searchButton = document.querySelector(".search-button");
    const hotelItems = document.querySelectorAll(".hotel-item");

    // Event handler untuk tombol search
    searchButton.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        const searchQuery = searchInput.value.toLowerCase().trim(); // Ambil input pengguna

        hotelItems.forEach(item => {
            const hotelName = item.getAttribute("data-name").toLowerCase(); // Nama hotel
            const hotelDescription = item.querySelector(".hotel-details p").textContent.toLowerCase(); // Deskripsi hotel

            // Periksa apakah query ditemukan dalam nama hotel atau deskripsi
            if (
                hotelName.includes(searchQuery) || 
                hotelDescription.includes(searchQuery)
            ) {
                item.style.display = "flex"; // Tampilkan jika cocok
            } else {
                item.style.display = "none"; // Sembunyikan jika tidak cocok
            }
        });
    });

    // Reset hotel saat input kosong
    searchInput.addEventListener("input", function () {
        const searchQuery = searchInput.value.trim();
        if (searchQuery === "") {
            hotelItems.forEach(item => {
                item.style.display = "flex"; // Tampilkan semua hotel jika input kosong
            });
        } else {
            // Jika input ada isinya, lakukan pencarian
            const searchQueryLower = searchQuery.toLowerCase();
            hotelItems.forEach(item => {
                const hotelName = item.getAttribute("data-name").toLowerCase();
                const hotelDescription = item.querySelector(".hotel-details p").textContent.toLowerCase();

                if (
                    hotelName.includes(searchQueryLower) || 
                    hotelDescription.includes(searchQueryLower)
                ) {
                    item.style.display = "flex"; // Tampilkan jika cocok
                } else {
                    item.style.display = "none"; // Sembunyikan jika tidak cocok
                }
            });
        }
    });
});
