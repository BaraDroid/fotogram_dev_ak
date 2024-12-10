let allImages = [
  "./img/photos/animal-468228_1280.jpg",
  "./img/photos/animal-8748794_1280.jpg",
  "./img/photos/bear-8845470_1280.jpg",
  "./img/photos/bird-7073243_1280.jpg",
  "./img/photos/bird-8578905_1280.jpg",
  "./img/photos/cat-8361048_1280.jpg",
  "./img/photos/chicken-8402334_1280.jpg",
  "./img/photos/costa-rica-8606850_1280.jpg",
  "./img/photos/dog-8448345_1280.jpg",
  "./img/photos/duckling-6568845_1280.jpg",
  "./img/photos/fallow-deer-5749428_1280.jpg",
  "./img/photos/fox-8016957_1280.jpg",
  "./img/photos/meerkat-4821484_1280.jpg",
  "./img/photos/parrot-3601194_1280.jpg",
  "./img/photos/pufferfish-8464398_1280.jpg",
  "./img/photos/sheep-7934078_1280.jpg",
  "./img/photos/snail-7536861_1280.jpg",
  "./img/photos/squirrel-7678830_1280.jpg",
  "./img/photos/swan-2107052_1280.jpg",
  "./img/photos/wolf-8089783_1280.jpg",
];

let imagesNames = [
  "animal-468228_1280.jpg",
  "animal-8748794_1280.jpg",
  "bear-8845470_1280.jpg",
  "bird-7073243_1280.jpg",
  "bird-8578905_1280.jpg",
  "cat-8361048_1280.jpg",
  "chicken-8402334_1280.jpg",
  "costa-rica-8606850_1280.jpg",
  "dog-8448345_1280.jpg",
  "duckling-6568845_1280.jpg",
  "fallow-deer-5749428_1280.jpg",
  "fox-8016957_1280.jpg",
  "meerkat-4821484_1280.jpg",
  "parrot-3601194_1280.jpg",
  "pufferfish-8464398_1280.jpg",
  "sheep-7934078_1280.jpg",
  "snail-7536861_1280.jpg",
  "squirrel-7678830_1280.jpg",
  "swan-2107052_1280.jpg",
  "wolf-8089783_1280.jpg",
];

let globalImgIndex = 0;
let globalNameIndex = 0;

function render() {
  let contentRef = document.getElementById("picture_gallery");
  contentRef.innerHTML = "";
  for (let index = 0; index < allImages.length; index++) {
    contentRef.innerHTML += getNoteTemplate(index);
  }
}

function getNoteTemplate(index) {
  return `<img onclick="addOverlay(event), showActualPicture(${index}), showActualName (${index})" src="${allImages[index]}" alt="${imagesNames[index]}">`;
}

function addOverlay(event) {
  document.getElementById("overlay").classList.remove("d_none");
  event.stopPropagation();
}

function removeOverlay(event) {
  document.getElementById("overlay").classList.add("d_none");
  event.stopPropagation();
}

function clickOnDialog() {
  event.stopPropagation();
}

function showActualPicture(index) {
  globalImgIndex = index;
  let pictureShow = document.getElementById("actual_picture");
  pictureShow.innerHTML = "";
  pictureShow.innerHTML = `<img class="img_on_dialog" src="${allImages[index]}">`; //da hatte ich +=, das fügt hinzu, deswegen hat das alle Bilder auf einmal gezeigt
} //wenn ich das zu = geändert habe, zeigt das nur das letzte Bild
//ich habe index als parametr angegeben und dann dort, wo die Funktion aufgerufen ist - mit dollar Zeichen! (sonst aktualisiert er sich nicht)

function showActualName(index) {
  globalNameIndex = index;
  let nameShow = document.getElementById("pictureName");
  nameShow.innerText = "";
  nameShow.innerText = `${imagesNames[index]}`;

  let numberShow = document.getElementById("index_compute");
  numberShow.innerHTML = "";
  let serialNumber = globalNameIndex + 1;
  numberShow.innerHTML = `${serialNumber}/${allImages.length}`;
}

function moveRight() {
  let pictureShow = document.getElementById("actual_picture");
  pictureShow.innerHTML = "";
  globalImgIndex = globalImgIndex + 1;
  if (globalImgIndex >= allImages.length) {   //wenn hier nur "=" steht, bleibt er beim zweiten Bild stehen
    globalImgIndex = 0;
  }
  pictureShow.innerHTML = `<img class="img_on_dialog" src="${allImages[globalImgIndex]}">`;

  let nameShow = document.getElementById("pictureName");
  nameShow.innerHTML = "";
  globalNameIndex = globalNameIndex + 1;
  if (globalNameIndex >= imagesNames.length) {
    globalNameIndex = 0;
  }
  nameShow.innerHTML = `${imagesNames[globalNameIndex]}`;

  let numberShow = document.getElementById("index_compute");
  numberShow.innerHTML = "";
  let serialNumber = globalNameIndex + 1;
  numberShow.innerHTML = `${serialNumber}/${allImages.length}`;
}

function moveLeft() {
  let pictureShow = document.getElementById("actual_picture");
  pictureShow.innerHTML = "";
  globalImgIndex = globalImgIndex - 1;
  if (globalImgIndex < 0) {
    globalImgIndex = allImages.length - 1;
  }
  pictureShow.innerHTML = `<img class="img_on_dialog" src="${allImages[globalImgIndex]}">`;

  let nameShow = document.getElementById("pictureName");
  nameShow.innerHTML = "";
  globalNameIndex = globalNameIndex - 1;
  if (globalNameIndex < 0) {
    globalNameIndex = imagesNames.length - 1;
  }
  nameShow.innerHTML = `${imagesNames[globalNameIndex]}`;

  let numberShow = document.getElementById("index_compute");
  numberShow.innerHTML = "";
  let serialNumber = globalNameIndex + 1;
  numberShow.innerHTML = `${serialNumber}/${allImages.length}`;
}
