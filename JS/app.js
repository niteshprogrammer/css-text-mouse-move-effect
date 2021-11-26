

// 1. Get the Elements from our Doctype;

const elContainer = document.querySelector(".container");
const textElement = document.querySelector(".text-effect");


// How many pixels your text shadow should go?

const walk = 100;

// 2. Build the Functions;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height} = elContainer;
  let { offsetX: x, offsetY: y } = e;

  // console.log(x, y); 

  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // console.log(x, y);
  // console.log(this, e.target);

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  textElement.style.textShadow = `
  ${xWalk}px ${yWalk}px rgba(0, 0, 0, 1),
  ${xWalk * -1}px ${yWalk}px rgba(0, 0, 0, 0.1),
  ${xWalk}px ${yWalk * -1}px rgba(0, 255, 0, 0.4)
  `;
  elContainer.style.cursor = "pointer";
  console.log(xWalk, yWalk);
}

elContainer.addEventListener("mousemove", shadow);