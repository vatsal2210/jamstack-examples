const vibes = [
  " and you are welcome!",
  " have a wonderful day",
  " and you've got this!",
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);
