const airportPrices = { 
    "Aceh - Bandara Sultan Iskandar Muda": {
      "economy": 1600000,
      "business": 2600000,
      "executive": 3600000
    },
    "Bengkulu - Bandara Fatmawati Soekarno": {
      "economy": 2500000,
      "business": 4000000,
      "executive": 5500000
    },
    "Central Java - Bandara Ahmad Yani": {
      "economy": 2300000,
      "business": 3800000,
      "executive": 5300000
    },
    "Central Java - Bandara Adisucipto": {
      "economy": 2200000,
      "business": 3700000,
      "executive": 5200000
    },
    "Central Kalimantan - Bandara Tjilik Riwut": {
      "economy": 2400000,
      "business": 3900000,
      "executive": 5400000
    },
    "East Java - Bandara Juanda": {
      "economy": 1800000,
      "business": 3100000,
      "executive": 4600000
    },
    "East Kalimantan - Bandara Sepinggan": {
      "economy": 2600000,
      "business": 4100000,
      "executive": 5600000
    },
    "East Nusa Tenggara - Bandara El Tari": {
      "economy": 2400000,
      "business": 3900000,
      "executive": 5400000
    },
    "Gorontalo - Bandara Jalaluddin": {
      "economy": 2300000,
      "business": 3800000,
      "executive": 5300000
    },
    "Jakarta - Bandara Soekarno-Hatta": {
      "economy": 2500000,
      "business": 4000000,
      "executive": 5500000
    },
    "Jakarta - Bandara Halim Perdanakusuma": {
      "economy": 2400000,
      "business": 3900000,
      "executive": 5400000
    },
    "Jambi - Bandara Sultan Thaha": {
      "economy": 2200000,
      "business": 3700000,
      "executive": 5200000
    },
    "Lampung - Bandara Raden Inten II": {
      "economy": 2300000,
      "business": 3800000,
      "executive": 5300000
    },
    "Maluku - Bandara Pattimura": {
      "economy": 2400000,
      "business": 3900000,
      "executive": 5400000
    },
    "North Kalimantan - Bandara International Aji Pangeran Tumenggung Pranoto": {
      "economy": 2500000,
      "business": 4000000,
      "executive": 5500000
    },
    "North Maluku - Bandara Sultan Babullah": {
      "economy": 2600000,
      "business": 4100000,
      "executive": 5600000
    },
    "North Sumatra - Bandara Kualanamu": {
      "economy": 2700000,
      "business": 4200000,
      "executive": 5700000
    },
    "North Sulawesi - Bandara Sam Ratulangi": {
      "economy": 2800000,
      "business": 4300000,
      "executive": 5800000
    },
    "North Sulawesi - Bandara Minahasa": {
      "economy": 2700000,
      "business": 4200000,
      "executive": 5700000
    },
    "Papua - Bandara Sentani": {
      "economy": 2900000,
      "business": 4400000,
      "executive": 5900000
    },
    "Papua Barat - Bandara Domine Eduard Osok": {
      "economy": 2800000,
      "business": 4300000,
      "executive": 5800000
    },
    "Riau - Bandara Sultan Syarif Kasim II": {
      "economy": 2500000,
      "business": 4000000,
      "executive": 5500000
    },
    "Riau Islands - Bandara Hang Nadim": {
      "economy": 2600000,
      "business": 4100000,
      "executive": 5600000
    },
    "South Kalimantan - Bandara Syamsudin Noor": {
      "economy": 2400000,
      "business": 3900000,
      "executive": 5400000
    },
    "South Sulawesi - Bandara Sultan Hasanuddin": {
      "economy": 2700000,
      "business": 4200000,
      "executive": 5700000
    },
    "South Sumatra - Bandara Sultan Mahmud Badaruddin II": {
      "economy": 2600000,
      "business": 4100000,
      "executive": 5600000
    },
    "Southeast Sulawesi - Bandara Haluoleo": {
      "economy": 2500000,
      "business": 4000000,
      "executive": 5500000
    },
    "West Java - Bandara Husein Sastranegara": {
      "economy": 2400000,
      "business": 3900000,
      "executive": 5400000
    },
    "West Kalimantan - Bandara Supadio": {
      "economy": 2600000,
      "business": 4100000,
      "executive": 5600000
    },
    "West Nusa Tenggara - Bandara Lombok International": {
      "economy": 2700000,
      "business": 4200000,
      "executive": 5700000
    },
    "West Papua - Bandara Mopah": {
      "economy": 2800000,
      "business": 4300000,
      "executive": 5800000
    },
    "West Sulawesi - Bandara Andi Depu": {
      "economy": 2700000,
      "business": 4200000,
      "executive": 5700000
    },
    "West Sumatra - Bandara Minangkabau": {
      "economy": 2600000,
      "business": 4100000,
      "executive": 5600000
    },
    "Yogyakarta - Bandara Adisucipto": {
      "economy": 2300000,
      "business": 3800000,
      "executive": 5300000
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
