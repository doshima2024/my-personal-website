const h2 = document.createElement("h2")
h2.textContent = "Welcome to Daniel Oshima's first Website";

document.querySelector("body").appendChild(h2);

const input = document.getElementById('image');
input.addEventListener('mouseover', function() {
  alert('This is an image of me!');
});

const header = document.getElementById('header');
header.addEventListener('mouseover', function() {
  header.style.color = "pink";
});

header.addEventListener('mouseout', function () {
  header.style.color = "yellow";
});






