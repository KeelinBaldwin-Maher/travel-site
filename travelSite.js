const images = [
    "photos/travel_photo-1.jpg",
    "photos/travel_photo-2.jpg",
    "photos/travel_photo-3.jpg",
    "photos/travel_photo-4.jpg",
    "photos/travel_photo-5.jpg",
    "photos/travel_photo-6.jpg",
    "photos/travel_photo-7.jpg",
    "photos/travel_photo-8.jpg",
    "photos/travel_photo-9.jpg"];

const imageCaptions = [
    "A group of pink flamingos. </br>Photo: Ganapathy Kumar",
    "Sandy idyllic beach and a clear blue sky. </br>Photo: dharmendra sahu",
    "Dramatic cliff face with crashing waves. </br>Photo: Chor Tsang",
    "Various colorful foliage that can only grow in hot places. </br>Photo: Alex Plesovskich",
    "Romantic sunset on a tropical beach. </br>Photo: Al Abelarde",
    "Clear blue ocean, a boat and a shark. </br>Photo: Roberto H",
    "Paradise beach. </br>Photo: Nattu Adnan",
    "Floating palace. </br>Photo: Mg Cthu",
    "Foggy field of palm trees. </br>Photo: Hans Eiskonen"];

const figures = images.map((image, index) => {
    return `
        <figure>
            <img src="${image}" alt="Sunny Skies Destinations">
            <figcaption>${imageCaptions[index]}</figcaption>
        </figure>`;
});
document.querySelector("main").innerHTML = figures.toString().replaceAll(",", "");

slideShow();

function slideShow() {
    const figures = Array.from(document.getElementsByTagName("figure"));
    figures.forEach(figure => figure.style.opacity = 0);
    figures[0].style.opacity = 1;
    let next = 0;
    setInterval(() => {
        figures.forEach(figure => figure.style.opacity = 0);
        next = (next + 1) % images.length;
        figures[next].style.opacity = 1;
    }, 5000);
}