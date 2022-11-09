const bgImg = ["bg01.jpg","bg02.png","bg03.jpeg"];

const randomImg = bgImg[Math.floor(Math.random() * bgImg.length)];

const background = document.createElement("img");
background.src = `./img/${randomImg}`;

document.body.appendChild(background);
// append는 가장 뒤에, prepend는 가장 앞에