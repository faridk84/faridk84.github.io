document.addEventListener("DOMContentLoaded", function() {
    // Ambil query string dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = urlParams.get('tab'); // Ambil nilai dari 'tab'
    console.log(activeTab)
    if (activeTab) {
        // Temukan semua elemen tab
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.content');
        tabs.forEach(tab => {
            // Tambahkan kelas 'active' pada tab yang sesuai
            if (tab.dataset.target === activeTab) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
                console.log(2);
            }
            
        });

        contents.forEach(content => {
            // Tampilkan konten yang sesuai dengan tab yang aktif
            if (content.id === activeTab) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }
});



document.addEventListener("DOMContentLoaded", () => {
    // Elemen-elemen yang dibutuhkan
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");
    const filterDropdown = document.getElementById("destination-filter");
    const destinationList = document.getElementById("destination-list");

    // Data destinasi
// Data destinasi beserta gambar, deskripsi, dan lokasi (untuk Google Maps)
const destinations = {
    mountain: [
        {
            name: "Mount Agung",
            image: "photos/mountain/agung.jpg",
            description: "A majestic volcano with spiritual significance, offering breathtaking views and challenging trekking opportunities.",
            location: "Mount Agung, Bali, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Mount+Agung",
            exploreUrl: "destination.html?data-name=Mount+Agung&img=photos/mountain/agung.jpg&location=Bali&description=Ascend+to+the+majestic+Mount+Agung%2C+Bali%E2%80%99s+sacred+peak+and+the+island%27s+highest+point%2C+offering+breathtaking+views+and+spiritual+serenity.+Located+in+the+heart+of+Bali%2C+this+towering+volcano+is+revered+as+the+spiritual+center+of+the+island%2C+home+to+the+iconic+Besakih+Temple+nestled+on+its+slopes.+Embark+on+an+unforgettable+trek+to+catch+the+sunrise%2C+as+golden+rays+illuminate+the+island%27s+lush+landscapes+and+coastline.+Whether+you%27re+seeking+adventure+or+a+spiritual+connection%2C+Mount+Agung+delivers+an+unparalleled+experience.+Embrace+the+mystical+energy+of+this+volcanic+marvel+and+discover+Bali%E2%80%99s+soul+at+Mount+Agung."
        },
        {
            name: "Mount Salak",
            image: "photos/mountain/salak.jpg",
            description: "A popular hiking spot in West Java.",
            location: "Mount Salak, West Java, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Mount+Salak+West+Java+Indonesia",
            exploreUrl: "destination.html?data-name=Mount+Salak&img=photos/mountain/salak.jpg&location=Sukabumi&description=Discover+the+mystical+allure+of+Mount+Salak%2C+Sukabumi%E2%80%99s+captivating+volcanic+peak%2C+where+nature+and+spirituality+converge.+Nestled+within+lush+tropical+forests%2C+this+iconic+mountain+is+a+haven+for+adventurers+and+seekers+of+tranquility.+Embark+on+scenic+hiking+trails+that+lead+you+through+dense+greenery%2C+past+cascading+waterfalls%2C+and+to+breathtaking+viewpoints.+Known+for+its+spiritual+significance%2C+Mount+Salak+is+home+to+sacred+sites+like+the+historic+Cidahu+Temple%2C+offering+a+glimpse+into+local+traditions.+Whether+you%E2%80%99re+exploring+its+rugged+beauty+or+seeking+a+peaceful+retreat%2C+Mount+Salak+promises+an+unforgettable+escape.+Experience+the+magic+of+Sukabumi%E2%80%99s+natural+treasure+at+Mount+Salak."
        },
        {
            name: "Mount Gede Pangrango",
            image: "photos/mountain/gede.jpg",
            description: "Known for its scenic views and biodiversity.",
            location: "Mount Gede Pangrango, West Java, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Mount+Gede+Pangrango+West+Java+Indonesia",
            exploreUrl: "destination.html?data-name=Mount+Gede+Pangrango&img=photos/mountain/gede.jpg&location=Bogor&description=Embark+on+an+unforgettable+adventure+at+Mount+Gede+Pangrango%2C+a+twin-peaked+wonder+nestled+in+Bogor%E2%80%99s+lush+highlands.+This+iconic+duo%2C+part+of+Indonesia%E2%80%99s+oldest+national+park%2C+offers+breathtaking+trails%2C+vibrant+wildlife%2C+and+serene+vistas.+Begin+your+journey+through+dense+tropical+forests%2C+encounter+rare+flora+and+fauna%2C+and+marvel+at+the+beauty+of+cascading+waterfalls+like+Cibeureum.+For+the+adventurous%2C+a+trek+to+the+summit+rewards+you+with+panoramic+views+of+the+sunrise+over+Bogor%E2%80%99s+verdant+landscape.+With+its+cool+mountain+air+and+rich+biodiversity%2C+Mount+Gede+Pangrango+is+perfect+for+nature+lovers+and+outdoor+enthusiasts.+Experience+the+charm+of+Bogor%E2%80%99s+natural+gem+at+Mount+Gede+Pangrango."
        },
        {
            name: "Mount Papandayan",
            image: "photos/mountain/papandayan.jpg",
            description: "A beautiful mountain located in Garut, West Java.",
            location: "Mount Papandayan, Garut, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Mount+Papandayan+Garut+Indonesia",
            exploreUrl: "destination.html?data-name=Mount+Papandayan&img=photos/mountain/papandayan.jpg&location=Garut&description=Uncover+the+natural+beauty+of+Mount+Papandayan%2C+Garut%E2%80%99s+volcanic+masterpiece%2C+where+adventure+meets+tranquility.+Known+for+its+dramatic+craters%2C+bubbling+mud+pools%2C+and+steaming+fumaroles%2C+this+active+volcano+offers+an+unforgettable+escape.+Wander+through+the+mystical+Dead+Forest%2C+a+striking+landscape+of+charred+trees%2C+and+soak+in+the+serenity+of+the+Edelweiss+fields%2C+blooming+with+delicate+flowers.+For+hikers%2C+the+scenic+trails+reward+you+with+breathtaking+views+of+Garut%E2%80%99s+lush+valleys.+Perfect+for+nature+lovers+and+adventure+seekers%2C+Mount+Papandayan+combines+raw+volcanic+energy+with+peaceful%2C+picturesque+landscapes.+Discover+the+wonders+of+Garut+at+Mount+Papandayan%E2%80%94an+experience+like+no+other."
        }
    ],
    beach: [
        {
            name: "Pandawa Beach",
            image: "photos/beach/pandawa.jpg",
            description: "A serene beach offering crystal-clear waters, soft white sand, and a backdrop of towering limestone cliffs.",
            location: "Pandawa Beach, Bali, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Pandawa+Beach",
            exploreUrl: "destination.html?data-name=Pandawa+Beach&img=photos/beach/pandawa.jpg&location=Bali&description=Escape to Pandawa Beach, Bali’s hidden gem, where tranquility meets natural beauty. Nestled on the southern coast, this serene paradise blends history, stunning landscapes, and peaceful vibes. Drive through towering limestone cliffs, past statues of the Pandawa brothers from the Mahabharata, and arrive at this secluded haven. Feel the soft sands beneath you as you relax by the crystal-clear waters, or take a peaceful kayak ride. Unlike Bali’s crowded beaches, Pandawa offers a quiet retreat, framed by dramatic cliffs. Enjoy local delicacies at beachside warungs, with the soothing sound of waves in the background. Discover Pandawa Beach—your peaceful escape in Bali."
        },
        {
            name: "Ancol Beach",
            image: "photos/beach/ancol.jpg",
            description: "A famous beach in North Jakarta for relaxation.",
            location: "Ancol Beach, Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Ancol+Beach+Jakarta+Indonesia",
            exploreUrl: "destination.html?data-name=Ancol+Beach&img=photos/beach/ancol.jpg&location=Jakarta&description=Escape+to+Ancol+Beach%2C+Jakarta%E2%80%99s+vibrant+seaside+getaway%2C+where+relaxation+meets+urban+charm.+Located+in+the+heart+of+the+city%2C+this+coastal+retreat+offers+a+mix+of+leisure+and+adventure+for+visitors+of+all+ages.+Stroll+along+the+sandy+shores%2C+enjoy+a+refreshing+dip%2C+or+savor+the+breathtaking+sunset+views.+Explore+the+lively+Ancol+Dreamland+complex+with+its+water+parks%2C+theme+parks%2C+and+cultural+attractions.+Indulge+in+fresh+seafood+at+beachside+restaurants+or+shop+for+unique+souvenirs+at+local+markets.+Whether+you%27re+seeking+family+fun+or+a+peaceful+seaside+escape%2C+Ancol+Beach+is+the+perfect+destination+to+unwind+and+recharge.+Discover+the+coastal+allure+of+Jakarta+at+Ancol+Beach."
        },
        {
            name: "Kepulauan Seribu",
            image: "photos/beach/seribu.jpg",
            description: "An archipelago known for its beautiful islands and coral reefs.",
            location: "Kepulauan Seribu, Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Kepulauan+Seribu+Jakarta+Indonesia",
            exploreUrl: "destination.html?data-name=Kepulauan+Seribu&img=photos/beach/seribu.jpg&location=Jakarta&description=Discover+Kepulauan+Seribu%2C+Jakarta%E2%80%99s+stunning+archipelago+paradise%2C+where+crystal-clear+waters+meet+unspoiled+natural+beauty.+Just+a+short+boat+ride+from+the+bustling+city%2C+this+cluster+of+islands+offers+a+perfect+escape+for+nature+lovers+and+adventure+seekers+alike.+Explore+vibrant+coral+reefs+through+snorkeling+or+diving%2C+or+unwind+on+pristine+white-sand+beaches+surrounded+by+lush+greenery.+Visit+the+charming+islands+of+Pulau+Macan%2C+Pulau+Pramuka%2C+or+Pulau+Tidung%2C+each+with+its+unique+allure.+Savor+freshly+caught+seafood+at+local+eateries+while+enjoying+serene+ocean+views.+Whether+you%27re+looking+for+relaxation+or+aquatic+adventures%2C+Kepulauan+Seribu+is+a+hidden+gem+waiting+to+be+explored.+Experience+Jakarta%E2%80%99s+tropical+oasis+at+Kepulauan+Seribu."
        },
        {
            name: "Marunda Beach",
            image: "photos/beach/marunda.jpg",
            description: "A serene beach near Jakarta for weekend getaways.",
            location: "Marunda Beach, Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Marunda+Beach+Jakarta+Indonesia",
            exploreUrl: "destination.html?data-name=Marunda+Beach&img=photos/beach/marunda.jpg&location=Jakarta&description=Experience+the+charm+of+Marunda+Beach%2C+a+peaceful+coastal+retreat+located+in+the+heart+of+Jakarta.+Tucked+away+from+the+city%E2%80%99s+hustle+and+bustle%2C+this+serene+beach+offers+stunning+views+of+the+Java+Sea%2C+making+it+a+hidden+gem+for+those+seeking+tranquility.+Take+a+leisurely+stroll+along+the+soft+sandy+shores%2C+enjoy+the+cooling+sea+breeze%2C+or+indulge+in+fresh+seafood+from+local+vendors.+Marunda+Beach+is+perfect+for+a+relaxing+escape%2C+where+you+can+unwind+while+watching+traditional+fishing+boats+glide+by.+With+its+quiet+ambiance+and+beautiful+surroundings%2C+Marunda+Beach+offers+a+perfect+blend+of+nature+and+relaxation.+Discover+a+peaceful+side+of+Jakarta+at+Marunda+Beach."
        }
    ],
    tourism: [
        {
            name: "Tanah Lot Bali",
            image: "photos/tourism/lot.jpg",
            description: "A stunning coastal temple renowned for its dramatic oceanfront setting and mesmerizing sunsets.",
            location: "Tanah Lot Bali, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Tanah+Lot",
            exploreUrl: "destination.html?data-name=Tanah+Lot&img=photos/tourism/lot.jpg&location=Bali&description=Discover+the+captivating+beauty+of+Tanah+Lot%2C+one+of+Bali%E2%80%99s+most+iconic+landmarks.+Perched+on+a+rocky+outcrop+off+the+island%27s+west+coast%2C+this+majestic+sea+temple+offers+mesmerizing+views%2C+especially+during+sunset+when+the+temple+is+silhouetted+against+the+vibrant+sky.+The+temple+is+a+significant+spiritual+site%2C+attracting+both+visitors+and+worshippers.+As+you+walk+along+the+coastal+path%2C+you%E2%80%99ll+find+traditional+Balinese+architecture+and+natural+beauty+blending+seamlessly+with+the+crashing+waves.+Explore+the+surrounding+rocky+cliffs%2C+enjoy+the+local+craft+market%2C+and+experience+the+tranquil+atmosphere+that+makes+Tanah+Lot+a+must-visit+destination.+Come+and+immerse+yourself+in+the+breathtaking+scenery+of+Tanah+Lot%E2%80%94a+true+jewel+of+Bali."
        },
        {
            name: "National Monument (Monas)",
            image: "photos/tourism/monas.jpg",
            description: "A symbol of Indonesian independence located in Jakarta.",
            location: "National Monument, Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=National+Monument+Jakarta+Indonesia",
            exploreUrl: "destination.html?data-name=Monas&img=photos/tourism/monas.jpg&location=Jakarta&description=Visit+Monas%2C+the+National+Monument+of+Indonesia%2C+a+symbol+of+the+country%27s+independence+and+a+must-see+landmark+in+Jakarta.+Standing+tall+at+132+meters%2C+Monas+offers+breathtaking+panoramic+views+of+the+bustling+capital+from+its+observation+deck.+The+monument+is+surrounded+by+lush+gardens+and+fountains%2C+providing+a+peaceful+retreat+amidst+the+city%27s+vibrancy.+Learn+about+Indonesia%27s+history+and+struggle+for+independence+at+the+museum+located+beneath+the+monument.+As+the+sun+sets%2C+watch+as+the+golden+flame+atop+Monas+gleams+brightly+against+the+Jakarta+skyline.+Explore+Monas+and+immerse+yourself+in+the+pride+and+heritage+of+Jakarta."
        },
        {
            name: "Taman Mini Indonesia Indah",
            image: "photos/tourism/taman-mini.jpg",
            description: "A cultural park showcasing Indonesia’s diverse culture.",
            location: "Taman Mini Indonesia Indah, Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Taman+Mini+Indonesia+Indah+Jakarta+Indonesia",
            exploreUrl: "destination.html?data-name=TMII&img=photos/tourism/taman-mini.jpg&location=Jakarta&description=Explore+Taman+Mini+Indonesia+Indah+%28TMII%29%2C+a+cultural+park+in+Jakarta+that+showcases+the+rich+diversity+and+beauty+of+Indonesia%27s+34+provinces.+This+vast+park+features+replicas+of+traditional+houses%2C+museums%2C+and+cultural+performances%2C+offering+a+unique+opportunity+to+experience+the+country%27s+heritage+in+one+place.+Stroll+through+the+beautiful+gardens%2C+admire+the+intricate+architecture%2C+and+discover+the+nation%27s+history+and+art+in+various+exhibitions.+The+park+also+features+a+cable+car+ride+with+stunning+views+of+Jakarta%27s+skyline.+Visit+TMII+to+embark+on+a+cultural+journey+that+celebrates+the+wonders+of+Indonesia."
        },
        {
            name: "Kota Tua Jakarta",
            image: "photos/tourism/kota-tua.jpg",
            description: "Historical area in Jakarta with colonial-era buildings.",
            location: "Kota Tua Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Kota+Tua+Jakarta+Indonesia",
            exploreUrl: "destination.html?data-name=Kota+Tua&img=photos/tourism/kota-tua.jpg&location=Jakarta&description=Step+back+in+time+and+explore+the+historic+beauty+of+Kota+Tua+%28Old+Town%29+in+Jakarta.+This+charming+district%2C+rich+in+Dutch+colonial+heritage%2C+transports+you+to+a+bygone+era+with+its+preserved+buildings+and+cobblestone+streets.+Visit+iconic+landmarks+like+Fatahillah+Square%2C+the+Jakarta+History+Museum%2C+and+the+old+City+Hall%2C+where+history+unfolds+at+every+turn.+Wander+through+the+museums%2C+cafes%2C+and+street+markets%2C+and+take+a+relaxing+boat+ride+along+the+canal.+Kota+Tua+offers+a+unique+glimpse+into+Jakarta%27s+past%2C+blending+cultural+experiences+with+the+vibrant+energy+of+modern-day+Jakarta."
        }
    ]
};

// Fungsi untuk mengganti daftar destinasi
function updateDestinationList(type) {
    destinationList.innerHTML = ""; // Hapus konten lama

    let allDestinations = type === "all" 
        ? [...destinations.mountain, ...destinations.beach, ...destinations.tourism]
        : destinations[type];

    // Tambahkan destinasi ke dalam HTML
    allDestinations.forEach(destination => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");

        resultItem.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}" />
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <small class="location">${destination.location}</small>
            <button class="maps-button" onclick="window.open('${destination.mapsUrl}', '_blank')">Maps</button>
            <a class="explore-button" href="${destination.exploreUrl}">Explore</a>
        `;

        destinationList.appendChild(resultItem);
    });
}

    // Event listener untuk dropdown filter
    filterDropdown.addEventListener("change", (e) => {
        const selectedFilter = e.target.value;
        updateDestinationList(selectedFilter);
    });

    // Tab navigasi
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Hapus class active dari semua tab
            tabs.forEach(t => t.classList.remove("active"));
            // Tambah class active pada tab yang diklik
            tab.classList.add("active");

            // Tampilkan konten tab yang sesuai
            const target = tab.getAttribute("data-target");
            contents.forEach(content => {
                if (content.id === target) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        });
    });

    // Set filter default ke "all"
    updateDestinationList("all");
});
