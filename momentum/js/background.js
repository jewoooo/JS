const	images = ["Paris.jpeg",	"Tokyo.jpeg", "Seoul.jpeg"];

const	chosenImage = images[Math.floor(Math.random() * images.length)];

const	image = document.createElement("img");

image.src = `img/${chosenImage}`;

document.body.appendChild(image);
