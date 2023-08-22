var images = [
    "photos/travel_photo-1.jpg",
    "photos/travel_photo-2.jpg",
    "photos/travel_photo-3.jpg",
    "photos/travel_photo-4.jpg",
    "photos/travel_photo-5.jpg",
    "photos/travel_photo-6.jpg",
    "photos/travel_photo-7.jpg",
    "photos/travel_photo-8.jpg",
    "photos/travel_photo-9.jpg"];

var imageCaptions = [
    "A group of pink flamingos. Photo: Ganapathy Kumar",
    "Sandy idyllic beach and a clear blue sky. Photo: dharmendra sahu",
    "Dramatic cliff face with crashing waves. Photo: Chor Tsang",
    "Various colorful foliage that can only grow in hot places. Photo: Alex Plesovskich",
    "Romantic sunset on a tropical beach. Photo: Al Abelarde",
    "Clear blue ocean, a boat and a shark. Photo: Roberto H",
    "Paradise beach. Photo: Nattu Adnan",
    "Floating palace. Photo: Mg Cthu",
    "Foggy field of palm trees. Photo: Hans Eiskonen"];

var image1ChangeTimer = null;
var image2ChangeTimer = null;

var interval1 = 20 * 160;
var interval2 = 30 * 120;
var interval3 = 2 * 40;


function setTimers() {
    image1ChangeTimer = setTimeout(image1Change, interval1);
    image2ChangeTimer = setTimeout(image2Change, interval2);
}

function clearTimers() {
    clearTimeout(image1ChangeTimer);
    clearTimeout(image2ChangeTimer);
}

function fadeOut() {
    var opacity = 1;
    var opacityCalc = 100;
    var image1 = document.getElementById("image1");
    
    var fadeAnimation = setInterval(frame, interval3);
    function frame() {
        if(opacityCalc == 0) {
            clearInterval(fadeAnimation);
        } else {
            opacityCalc = opacityCalc - 10;
            opacity = opacityCalc/100
            image1.style.opacity = opacity;
        }
    }
}

function image1Change() {
    var indexPosition = 0;
    var image1 = document.getElementById("image1");
    
    var slides1 = setInterval(slides, interval2);
    function slides() {
        if(indexPosition == images.length) {
            clearInterval(slides1);
            clearTimers();
            setTimers();
        } else {
            fadeOut();
            image1.src = images[indexPosition];
            indexPosition++;
        }
    }
}
    
function image2Change() {
    var indexPosition = 0;
    var image2 = document.getElementById("image2");
    var caption = document.getElementById("figCaption");

    var slides2 = setInterval(slides, interval2);
    function slides() {
        if(indexPosition == images.length) {
            clearInterval(slides2);
        } else {
            image2.src = images[indexPosition + 1];
            indexPosition++;
            
            if (indexPosition >= images.length) {
                caption.innerHTML = imageCaptions[0];
            } else {
                caption.innerHTML = imageCaptions[indexPosition];
            }
        }
    }
}

