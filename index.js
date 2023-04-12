const main = document.getElementById("main");
const factBox = document.getElementById("fact-box");
const factBoxText = document.getElementById("fact-box-text");
const btn = document.getElementById("btn");
const speachBtn = document.getElementById("speach-btn");
const replayBtn = document.getElementById("replay-btn");
console.clear();

let mushieArr = [
  {
    fact:
      "Fungi Are Genetically Closer to Humans Than Plants. In the past, scientists considered fungi to be plants, but now we know better. Discoveries show that fungi are more closely related to animals, including humans, than to plants.",
    image:
      "https://images.unsplash.com/photo-1519305124423-5ccccff55da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    color: "#B6A28B"
  },
  {
    fact:
      "The largest living organism on the planet is a single honey mushroom (Armillaria ostoyae) in the Malheur National Forest, Oregon, USA. It’s around 3.5 miles (5.6 km ) wide, occupies an area of 965 hectares (2,385 acres), and is at least 2,400 years old. But could be much older.",
    image:
      "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    color: "#B27549"
  }
];

let storageArr = [];

btn.addEventListener("click", function () {
  newFact();
});

function newFact() {
  if (mushieArr.length === 0) {
    replayFact(storageArr, mushieArr);
    return;
  }
  btn.style.display = "block";
  replayBtn.style.display = "none";
  let rand = Math.floor(Math.random() * mushieArr.length);
  factBoxText.innerText = mushieArr[rand].fact;
  // change colour
  factBox.style.backgroundColor = mushieArr[rand].color;
  // change background
  let image = mushieArr[rand].image;
  main.style.backgroundImage = `url(${image})`;

  storageArr = storageArr.concat(mushieArr[rand]);

  storageArr.push(mushieArr[rand]);
  mushieArr.splice(rand, 1);

  synth.cancel();
}

function replayFact() {
  factBoxText.innerText = "So sorry, We're out of facts!";
  btn.style.display = "none";
  replayBtn.style.display = "block";
  replayBtn.addEventListener("click", function () {
    mushieArr = [...storageArr];
    storageArr = [];

    newFact(mushieArr);
  });
}

speachBtn.addEventListener("click", (e) => {
  let fact = factBoxText.innerText;
  const synth = window.speechSynthesis;
  let utterThis = new SpeechSynthesisUtterance(fact);
  synth.speak(utterThis);
});
