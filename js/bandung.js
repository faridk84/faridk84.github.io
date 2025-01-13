const busPrices = {
    "Jakarta - Terminal Pulo Gebang": {
        "economy": 150000,
        "business": 250000,
        "executive": 350000
    },
    "Jakarta - Terminal Kampung Rambutan": {
        "economy": 140000,
        "business": 240000,
        "executive": 340000
    },
    "Bandung - Terminal Leuwi Panjang": {
        "economy": 13000,
        "business": 23000,
        "executive": 33000
    },
    "Bandung - Terminal Cicaheum": {
        "economy": 0,
        "business": 0,
        "executive": 0
    },
    "Semarang - Terminal Mangkang": {
        "economy": 160000,
        "business": 260000,
        "executive": 360000
    },
    "Yogyakarta - Terminal Giwangan": {
        "economy": 170000,
        "business": 270000,
        "executive": 370000
    },
    "Surabaya - Terminal Bungurasih": {
        "economy": 180000,
        "business": 280000,
        "executive": 380000
    },
    "Malang - Terminal Arjosari": {
        "economy": 190000,
        "business": 290000,
        "executive": 390000
    },
    "Solo - Terminal Tirtonadi": {
        "economy": 175000,
        "business": 275000,
        "executive": 375000
    },
    "Cirebon - Terminal Harjamukti": {
        "economy": 145000,
        "business": 245000,
        "executive": 345000
    },
    "Medan - Terminal Amplas": {
        "economy": 300000,
        "business": 400000,
        "executive": 500000
    },
    "Medan - Terminal Pinang Baris": {
        "economy": 290000,
        "business": 390000,
        "executive": 490000
    },
    "Padang - Terminal Anak Air": {
        "economy": 270000,
        "business": 370000,
        "executive": 470000
    },
    "Palembang - Terminal Karya Jaya": {
        "economy": 250000,
        "business": 350000,
        "executive": 450000
    },
    "Lampung - Terminal Rajabasa": {
        "economy": 240000,
        "business": 340000,
        "executive": 440000
    },
    "Pekanbaru - Terminal Bandar Raya Payung Sekaki": {
        "economy": 260000,
        "business": 360000,
        "executive": 460000
    },
    "Banjarmasin - Terminal Induk KM 6": {
        "economy": 350000,
        "business": 450000,
        "executive": 550000
    },
    "Pontianak - Terminal Batu Layang": {
        "economy": 320000,
        "business": 420000,
        "executive": 520000
    },
    "Balikpapan - Terminal Batu Ampar": {
        "economy": 370000,
        "business": 470000,
        "executive": 570000
    },
    "Samarinda - Terminal Sungai Kunjang": {
        "economy": 360000,
        "business": 460000,
        "executive": 560000
    },
    "Makassar - Terminal Daya": {
        "economy": 400000,
        "business": 500000,
        "executive": 600000
    },
    "Manado - Terminal Malalayang": {
        "economy": 420000,
        "business": 520000,
        "executive": 620000
    },
    "Kendari - Terminal Baruga": {
        "economy": 410000,
        "business": 510000,
        "executive": 610000
    },
    "Badung - Terminal Mengwi": {
        "economy": 450000,
        "business": 550000,
        "executive": 650000
    },
    "Denpasar - Terminal Ubung": {
        "economy": 440000,
        "business": 540000,
        "executive": 640000
    },
    "Mataram - Terminal Mandalika": {
        "economy": 470000,
        "business": 570000,
        "executive": 670000
    },
    "Kupang - Terminal Oebobo": {
        "economy": 480000,
        "business": 580000,
        "executive": 680000
    },
    "Jayapura - Terminal Entrop": {
        "economy": 550000,
        "business": 650000,
        "executive": 750000
    },
    "Sorong - Terminal Remu": {
        "economy": 540000,
        "business": 640000,
        "executive": 740000
    }
};

// Referensi elemen dropdown dan hasil
const terminalDropdown = document.getElementById("bus-terminal-dropdown");
const classDropdown = document.getElementById("class-dropdown");
const priceResult = document.getElementById("price-result");

// Fungsi untuk memperbarui harga berdasarkan pilihan
function updatePrice() {
    const selectedTerminal = terminalDropdown.value;
    const selectedClass = classDropdown.value;
    if (selectedTerminal && selectedClass) {
        const price = busPrices[selectedTerminal][selectedClass];
        if (price !== undefined) {
            priceResult.innerHTML = `Price from ${selectedTerminal} to Bandung - Terminal Cicaheum: <br><strong>IDR ${price.toLocaleString()}</strong>`;
        } else {
            priceResult.textContent = "Price not available for the selected terminal and class.";
        }
    } else {
        priceResult.textContent = "Please select both terminal and class.";
    }
}

// Tambahkan event listener untuk memantau perubahan
terminalDropdown.addEventListener("change", updatePrice);
classDropdown.addEventListener("change", updatePrice);

