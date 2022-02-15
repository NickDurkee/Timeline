
// Guide //
// let adLabel = " AD"
// let output = document.getElementById("year");
// let slider = document.getElementById("myRange").oninput = function () {
//   let thisYear = (this.value + adLabel);
//   output.innerHTML = thisYear;
//   document.getElementsByName('search')[0].value = thisYear;
// }

// Const
const btnForm = document.getElementById('btnForm')
const year = document.getElementById("year");
const myRange = document.getElementById('myRange');
const search = document.getElementsByName('search')[0];
const reset = document.getElementById('reset');
const myIframe = document.getElementById('myIframe');
const adLabel = " AD"
const bcLabel = " BC";
const ancLabel = "Ancient BC"
const phLabel = "Prehistory"


// Initial
let slider = myRange.oninput = function () {
  myRange.step = "1"
  myRange.min = "1"
  myRange.max = "2022"
  let thisYear = (this.value + adLabel)
  year.innerHTML = thisYear;
  search.value = thisYear;
}

// AD
let adButton = document.getElementById("ad").onclick =
  function () {
    btnForm.action = "https://upload.wikimedia.org/wikipedia/commons/9/94/Starry_Night_Over_the_Rhone.jpg"
    myRange.step = "1"
    myRange.min = "1"
    myRange.max = "2022"
    myRange.value = 1;
    year.innerHTML = ("#" + adLabel);
    let slider = myRange.oninput = function () {
      let thisYear = (this.value + adLabel);
      year.innerHTML = thisYear;
      search.value = thisYear;
    }
  }


// BC
let bcButton = document.getElementById("bc").onclick =
  function () {
    btnForm.action = "https://upload.wikimedia.org/wikipedia/commons/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg"
    myRange.step = "1"
    myRange.min = "1"
    myRange.max = "2200"
    myRange.value = 1;
    year.innerHTML = ("#" + bcLabel);
    let slider = myRange.oninput = function () {
      let thisYear = (this.value + bcLabel);
      year.innerHTML = thisYear;
      search.value = thisYear;
    }
  }

// Ancient BC
let ancButton = document.getElementById("anc").onclick = function () {
  btnForm.action = "https://digitalmapsoftheancientworld.files.wordpress.com/2021/01/triumph_of_achilles_in_corfu_achilleion.jpg?w=768"
  year.innerHTML = ("#" + ancLabel);
  let slider = myRange.oninput = function () {
    myRange.step = "1000"
    myRange.min = "1000";
    myRange.max = "10000";
    let thisYear = (this.value + bcLabel);
    year.innerHTML = thisYear;
    search.value = thisYear;
  }

}

// Prehistory
let phButton = document.getElementById("prehistory").onclick = function () {
  year.innerHTML = (phLabel);
  myRange.value = 1;
  btnForm.action = "https://en.wikipedia.org/wiki/Timeline_of_prehistory"
}

// Reset
reset.onclick = function () {
  myRange.value = 1;
  year.innerHTML = ("Cleared");
  btnForm.action = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1920px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg";
}