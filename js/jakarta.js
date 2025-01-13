// Data harga tiket bus berdasarkan terminal dan kelas
const busPrices = {
    "Jakarta - Terminal Pulo Gebang": { economy: 0, business: 0, executive: 0 },
    "Jakarta - Terminal Kampung Rambutan": { economy: 18000, business: 23000, executive: 38000 },
    "Bandung - Terminal Leuwi Panjang": { economy: 25000, business: 40000, executive: 55000 },
    "Bandung - Terminal Cicaheum": { economy: 240000, business: 390000, executive: 540000 },
    "Semarang - Terminal Mangkang": { economy: 220000, business: 370000, executive: 520000 },
    "Yogyakarta - Terminal Giwangan": { economy: 220000, business: 370000, executive: 520000 },
    "Surabaya - Terminal Bungurasih": { economy: 200000, business: 350000, executive: 500000 },
    "Malang - Terminal Arjosari": { economy: 240000, business: 390000, executive: 540000 },
    "Solo - Terminal Tirtonadi": { economy: 230000, business: 380000, executive: 530000 },
    "Cirebon - Terminal Harjamukti": { economy: 210000, business: 360000, executive: 510000 },
    "Medan - Terminal Amplas": { economy: 500000, business: 750000, executive: 1000000 },
    "Medan - Terminal Pinang Baris": { economy: 480000, business: 730000, executive: 980000 },
    "Padang - Terminal Anak Air": { economy: 400000, business: 650000, executive: 900000 },
    "Palembang - Terminal Karya Jaya": { economy: 320000, business: 470000, executive: 620000 },
    "Lampung - Terminal Rajabasa": { economy: 280000, business: 430000, executive: 580000 },
    "Pekanbaru - Terminal Bandar Raya Payung Sekaki": { economy: 380000, business: 530000, executive: 680000 },
    "Banjarmasin - Terminal Induk KM 6": { economy: 340000, business: 490000, executive: 640000 },
    "Pontianak - Terminal Batu Layang": { economy: 350000, business: 500000, executive: 650000 },
    "Balikpapan - Terminal Batu Ampar": { economy: 360000, business: 510000, executive: 660000 },
    "Samarinda - Terminal Sungai Kunjang": { economy: 370000, business: 520000, executive: 670000 },
    "Makassar - Terminal Daya": { economy: 450000, business: 600000, executive: 750000 },
    "Manado - Terminal Malalayang": { economy: 460000, business: 610000, executive: 760000 },
    "Kendari - Terminal Baruga": { economy: 440000, business: 590000, executive: 740000 },
    "Badung - Terminal Mengwi": { economy: 300000, business: 450000, executive: 600000 },
    "Denpasar - Terminal Ubung": { economy: 310000, business: 460000, executive: 610000 },
    "Mataram - Terminal Mandalika": { economy: 320000, business: 470000, executive: 620000 },
    "Kupang - Terminal Oebobo": { economy: 500000, business: 650000, executive: 800000 },
    "Jayapura - Terminal Entrop": { economy: 700000, business: 850000, executive: 1000000 },
    "Sorong - Terminal Remu": { economy: 720000, business: 870000, executive: 1020000 }
};

// Referensi elemen dropdown dan hasil
const terminalDropdown = document.getElementById("bus-terminal-dropdown");
const classDropdown = document.getElementById("class-dropdown");
const priceResult = document.getElementById("price-result");

// Fungsi untuk memperbarui harga berdasarkan pilihan
function updatePrice() {
    const selectedTerminal = terminalDropdown.value;
    const selectedClass = classDropdown.value;
    const name = urlParams.get('data-name');
    if (selectedTerminal && selectedClass) {
        const price = busPrices[selectedTerminal][selectedClass];
        if (price !== undefined) {
            priceResult.innerHTML = `Price from ${selectedTerminal} to Jakarta - Terminal: <br><strong>IDR ${price.toLocaleString()}</strong>`;
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

