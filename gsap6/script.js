function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splitText = h1Text.split("");
  var halfvalue = splitText.length / 2;

  var clutter = "";

  splitText.forEach(function (elem, idx) {
    if (idx < halfvalue) {
      
      clutter += `<span class="a">${elem}</span>`
    } else {
      clutter += `<span class="b">${elem}</span>`
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 50,
  opacity: 0,
  stagger: 0.15,
  duration: 0.6
});

gsap.from("h1 .b", {
  y: 80,
  opacity: 0,
  stagger: -0.15,
  duration: 1
});


// gsap.from("h1 span", {
//   y: 50,
//   opacity: 0,
//   stagger: 0.15,
//   duration: 0.8,
//   delay: 0.5
// });
