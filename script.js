const photoData = [
    { url: "assets/animalOne.png", cat: "animals", title: "Wildlife One" },
    { url: "assets/animalTwo.png", cat: "animals", title: "Wildlife Two" },
    { url: "assets/animalThree.png", cat: "animals", title: "Wildlife Three" },
    { url: "assets/animalFour.png", cat: "animals", title: "Wildlife Four" },
    { url: "assets/architectureOne.png", cat: "arch", title: "Modern Build" },
    { url: "assets/architectureTwo.png", cat: "arch", title: "Steel Structure" },
    { url: "assets/architectureThree.png", cat: "arch", title: "City Skyline" },
    { url: "assets/techOne.png", cat: "tech", title: "Digital Workflow" },
    { url: "assets/techTwo.png", cat: "tech", title: "Remote Hiring" },
    { url: "assets/techThree.png", cat: "tech", title: "Data Network" },
    { url: "assets/techFour.png", cat: "tech", title: "Innovation Core" },
    { url: "assets/seasonOne.png", cat: "seasons", title: "Spring Bloom" },
    { url: "assets/seasonTwo.png", cat: "seasons", title: "Summer Sun" },
    { url: "assets/seasonThree.png", cat: "seasons", title: "Autumn Leaves" },
    { url: "assets/seasonFour.png", cat: "seasons", title: "Winter Frost" },
    { url: "assets/seasonFive.png", cat: "seasons", title: "Seasonal Cycle" },
    { url: "assets/travelOne.png", cat: "travel", title: "Global Trek" },
    { url: "assets/travelTwo.png", cat: "travel", title: "Mountain Peak" },
    { url: "assets/travelThree.png", cat: "travel", title: "Coastal View" },
    { url: "assets/travelFour.png", cat: "travel", title: "Urban Explorer" },
    { url: "assets/travelFive.png", cat: "travel", title: "Island Getaway" },
    { url: "assets/travelSix.png", cat: "travel", title: "Road Trip" }
];

const gallery = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('themeToggle');

let currentFilter = 'all';

function renderGallery() {
    gallery.innerHTML = '';

    const filteredData = photoData.filter(item =>
        currentFilter === 'all' || item.cat === currentFilter
    );


    filteredData.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'image-card';

        card.innerHTML = `
            <div class="img-wrapper">
                <img src="${item.url}" 
                     alt="${item.title}" 
                     onload="this.classList.add('loaded')">
            </div>
            <div class="card-content">
                <h3>${item.title}</h3>
                <p>${item.cat.toUpperCase()}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}


filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        currentFilter = btn.dataset.category;
        renderGallery();
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.innerHTML = document.body.classList.contains('light') ?
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});


renderGallery();