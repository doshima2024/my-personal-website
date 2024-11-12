const h2 = document.createElement("h2")
h2.textContent = "Welcome to Daniel Oshima's first Website";

document.querySelector("body").appendChild(h2);

const input = document.getElementById('image');
input.addEventListener('click', function() {
  alert('I was clicked!');
});

