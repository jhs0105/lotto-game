const result = document.querySelector("#result");
const radios = document.querySelectorAll(".radio");

function makeLotto() {
  const ul = document.createElement("ul");
  result.appendChild(ul);
  result.classList.remove("on");
  setTimeout(function () {
    result.classList.add("on");
  }, 30);
  const nums = Array(45)
    .fill()
    .map(function (arr, idx) {
      return idx + 1;
    });
  //console.log(nums);

  const selectedNum = [];
  for (let i = 0; i < 6; i++) {
    const selected = Math.floor(Math.random() * nums.length);
    selectedNum.push(nums.splice(selected, 1)[0]);
  }

  //console.log(selectedNum);
  selectedNum.sort(compare);

  selectedNum.forEach(function (item, idx) {
    const li = document.createElement("li");
    li.textContent = item;

    if (item >= 1 && item <= 10) {
      li.classList.add("yellow");
    } else if (item >= 11 && item <= 20) {
      li.classList.add("blue");
    } else if (item >= 21 && item <= 30) {
      li.classList.add("red");
    } else if (item >= 31 && item <= 40) {
      li.classList.add("grey");
    } else {
      li.classList.add("green");
    }

    ul.appendChild(li);
  });
}

function compare(a, b) {
  return a - b;
}

radios.forEach(function (item, idx) {
  item.addEventListener("change", function () {
    result.innerHTML = "";
    for (let i = 0; i < idx + 1; i++) {
      makeLotto();
    }
  });
});
