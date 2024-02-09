"use strict";
const btnYes = document.querySelector(".btn.yes");
const btnNo = document.querySelector(".btn.no");
const noyes = document.querySelector(".noyes");
const card = document.querySelector(".card");
const btnContainer = document.querySelector(".button-container");
const para = document.querySelector(".para");
const p1 = document.querySelector(".card .front .p1");
const p = document.querySelector(".card .text-container .p");
const front = document.querySelector(".front");
const newbtn = document.querySelector(".newbuttons");
const body = document.body;
const modal = document.querySelector(".modal");
const text = document.querySelector(".text");
const close = document.querySelector(".close");
const firstImage = document.querySelector(".firstImage");
const funnyq = document.querySelector(".funnyq");
const funny_quotes = [
  "Well, at least I saved money on chocolates and flowers!",
  "Roses are red, violets are blue, Valentine's Day is overrated, and so is getting a 'no' from you.",
  "Every rejection is just a redirection to someone better... or a solo Netflix marathon.",
  "No worries, I'll just spend the day loving myself... and eating lots of discounted chocolates.",
  "Looks like Cupid's arrow missed its mark – or maybe it's just stuck in traffic.",
  "One less person to share the chocolate with. More for me!",
  "Well, looks like my Valentine's Day plans just went from 'Netflix and Chill' to 'Netflix and try not to spill tears into my popcorn.",
  "I'll have to change my relationship status to 'In a committed relationship with my pillow.",
  "Who needs candlelit dinners when you have a microwave and a frozen dinner for one?",
  "No worries, I'll just spend the evening swiping left on dating apps and pretending I'm in control of my destiny.",
  "No problem, Anyway I hate You.",
  "Hey, how dare you??",
  "I will murder you.",
  "Andi Mandi Falamko Dandi.",
  "Mukh herya cha aafno.",
];

let funnybtn = [
  "Are you Sure ?",
  "Really Sure",
  "Are you positive",
  "Pookie Please",
  "If you say no, i will be very sad",
  "I will be very very sad",
  "I will be very very very sad",
  "Okay fine, I'll stop asking..",
  "Just kidding, PLEASE SAY YES",
  "Dont do this to me ",
  " Please",
  "You are breaking my heart",
  "Im gonna Cry",
];
let x = 0;

const yesfn = function () {
  btnYes.addEventListener("click", () => {
    // card.style.pointerEvents = "auto";
    autoOpenBack();
    para.style.display = "none";
    front.style.backgroundImage = "none";
    // audio.autoplay = true;
    // audio.loop = true;
    // audio.currentTime = startTime;
    p.style.display = "block";
    p1.style.display = "none";
    firstImage.style.display = "none";
  });
};
const autoOpenBack = function () {
  card.classList.add("auto-open-back");
};
const calculatenewposition = function (el) {
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  var buttonWidth = el.offsetWidth;
  var buttonHeight = el.offsetHeight;

  var newTop = Math.random() * (viewportHeight - buttonHeight);
  var newLeft = Math.random() * (viewportWidth - buttonWidth);

  return {
    top: newTop,
    left: newLeft,
  };
};

const createNewButton = () => {
  // Create a new button element
  const newButton = document.createElement("button");

  newButton.textContent = `Whatt?`; // You can customize the button text here
  newButton.classList.add("btn", "no"); // Add the necessary classes to style the button
  btnNo.style.display = "none"; // Clear the existing buttons
  newbtn.appendChild(newButton);

  //Positioning the buttons
  const movebutton = function () {
    const newpostion = calculatenewposition(newButton);
    newButton.style.position = "absolute";
    newButton.style.top = newpostion.top + "px";
    newButton.style.left = newpostion.left + "px";
  };

  let count = 0;
  // Append the new button to the container
  newButton.addEventListener("click", () => {
    ++x;
    newButton.textContent = `${funnybtn[x]}`;
    movebutton();
    count += 20;
    btnYes.style.fontSize = count + "px";
    btnContainer.style.height = count + "px";
  });
};
const modalfunction = function () {
  const newtext = document.createElement("p");
  const randomindex = `${Math.trunc(Math.random() * funny_quotes.length)}`;
  newtext.classList.add("funnyq");
  newtext.textContent = funny_quotes[randomindex];
  text.appendChild(newtext);

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
  closefn();
};
const closefn = function () {
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
const nofn = function () {
  btnNo.addEventListener("click", () => {
    // Create a new button element
    front.style.backgroundImage = "none";
    p1.style.display = "block";
    ///New Button is Created
    createNewButton();
    modalfunction();
    modal.style.display = "block";

    // btnNo.style.display = "none";
    // if (btnYes.style.display === "none") {
    //   btnYes.style.display = "block";
    // } else {
    //   btnYes.style.display = "none";
    // }
    // p1.style.display = "block";
    // p.style.display = "none";
  });
};

yesfn();
nofn();
//button javascript
