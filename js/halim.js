const airportPrices = {
    "Aceh - Bandara Sultan Iskandar Muda": {
        "economy": 1400000,
        "business": 2300000,
        "executive": 3200000
    },
    "Bengkulu - Bandara Fatmawati Soekarno": {
        "economy": 1900000,
        "business": 3200000,
        "executive": 4400000
    },
    "Central Java - Bandara Ahmad Yani": {
        "economy": 1700000,
        "business": 3000000,
        "executive": 4200000
    },
    "Central Java - Bandara Adisucipto": {
        "economy": 1600000,
        "business": 2900000,
        "executive": 4100000
    },
    "Central Kalimantan - Bandara Tjilik Riwut": {
        "economy": 1800000,
        "business": 3100000,
        "executive": 4300000
    },
    "East Java - Bandara Juanda": {
        "economy": 1400000,
        "business": 2500000,
        "executive": 3700000
    },
    "East Kalimantan - Bandara Sepinggan": {
        "economy": 2000000,
        "business": 3300000,
        "executive": 4500000
    },
    "East Nusa Tenggara - Bandara El Tari": {
        "economy": 1800000,
        "business": 3100000,
        "executive": 4300000
    },
    "Gorontalo - Bandara Jalaluddin": {
        "economy": 1700000,
        "business": 3000000,
        "executive": 4200000
    },
    "Jakarta - Bandara Soekarno-Hatta": {
        "economy": 1900000,
        "business": 3200000,
        "executive": 4400000
    },
    "Jambi - Bandara Sultan Thaha": {
        "economy": 1600000,
        "business": 2900000,
        "executive": 4100000
    },
    "Lampung - Bandara Raden Inten II": {
        "economy": 1700000,
        "business": 3000000,
        "executive": 4200000
    },
    "Maluku - Bandara Pattimura": {
        "economy": 1800000,
        "business": 3100000,
        "executive": 4300000
    },
    "North Kalimantan - Bandara International Aji Pangeran Tumenggung Pranoto": {
        "economy": 1900000,
        "business": 3200000,
        "executive": 4400000
    },
    "North Maluku - Bandara Sultan Babullah": {
        "economy": 2000000,
        "business": 3300000,
        "executive": 4500000
    },
    "North Sumatra - Bandara Kualanamu": {
        "economy": 2100000,
        "business": 3400000,
        "executive": 4600000
    },
    "North Sulawesi - Bandara Sam Ratulangi": {
        "economy": 2200000,
        "business": 3500000,
        "executive": 4700000
    },
    "North Sulawesi - Bandara Minahasa": {
        "economy": 2100000,
        "business": 3400000,
        "executive": 4600000
    },
    "Papua - Bandara Sentani": {
        "economy": 2300000,
        "business": 3600000,
        "executive": 4800000
    },
    "Papua Barat - Bandara Domine Eduard Osok": {
        "economy": 2200000,
        "business": 3500000,
        "executive": 4700000
    },
    "Riau - Bandara Sultan Syarif Kasim II": {
        "economy": 1900000,
        "business": 3200000,
        "executive": 4400000
    },
    "Riau Islands - Bandara Hang Nadim": {
        "economy": 2000000,
        "business": 3300000,
        "executive": 4500000
    },
    "South Kalimantan - Bandara Syamsudin Noor": {
        "economy": 1800000,
        "business": 3100000,
        "executive": 4300000
    },
    "South Sulawesi - Bandara Sultan Hasanuddin": {
        "economy": 2100000,
        "business": 3400000,
        "executive": 4600000
    },
    "South Sumatra - Bandara Sultan Mahmud Badaruddin II": {
        "economy": 2000000,
        "business": 3300000,
        "executive": 4500000
    },
    "Southeast Sulawesi - Bandara Haluoleo": {
        "economy": 1900000,
        "business": 3200000,
        "executive": 4400000
    },
    "West Java - Bandara Husein Sastranegara": {
        "economy": 1800000,
        "business": 3100000,
        "executive": 4300000
    },
    "West Kalimantan - Bandara Supadio": {
        "economy": 2000000,
        "business": 3300000,
        "executive": 4500000
    },
    "West Nusa Tenggara - Bandara Lombok International": {
        "economy": 2100000,
        "business": 3400000,
        "executive": 4600000
    },
    "West Papua - Bandara Mopah": {
        "economy": 2200000,
        "business": 3500000,
        "executive": 4700000
    },
    "West Sulawesi - Bandara Andi Depu": {
        "economy": 2100000,
        "business": 3400000,
        "executive": 4600000
    },
    "West Sumatra - Bandara Minangkabau": {
        "economy": 2000000,
        "business": 3300000,
        "executive": 4500000
    },
    "Yogyakarta - Bandara Adisucipto": {
        "economy": 1700000,
        "business": 3000000,
        "executive": 4200000
    }
};

// Get references to the dropdowns and result div
const airportDropdown = document.getElementById("airport-dropdown");
const classDropdown = document.getElementById("class-dropdown");
const priceResult = document.getElementById("price-result");

// Function to update price based on selection
function updatePrice() {
    const selectedAirport = airportDropdown.value;
    const selectedClass = classDropdown.value;
    const name = urlParams.get('data-name');
    if (selectedAirport && selectedClass) {
        const price = airportPrices[selectedAirport][selectedClass];
        if (price !== undefined) {
            const price = airportPrices[selectedAirport][selectedClass];
            priceResult.innerHTML = `Price from ${selectedAirport} to ${name}: <br><strong>IDR ${price.toLocaleString()}</strong>`;
        } else {
            priceResult.textContent = "Price not available for the selected airport and class.";
        }
    } else {
        priceResult.textContent = "Please select both airport and class.";
    }
}

// Add event listeners to update price when selections change
airportDropdown.addEventListener("change", updatePrice);
classDropdown.addEventListener("change", updatePrice);
