//BINARY SEARCH START
export const iterativeFunction = async (array, x) => {
  let start = 0,
    end = array.length - 1;
  let bol = 0;

  console.log(array);
  console.log(typeof x);
  while (start <= end) {
    document.getElementById(`${start}`).style.backgroundImage =
      "linear-gradient(-180deg,orange,black)";
    document.getElementById(`${end}`).style.backgroundImage =
      "linear-gradient(-180deg,orange,black)";
    let midd = Math.floor((start + end) / 2);
    document.getElementById(`${midd}`).style.backgroundImage =
      "linear-gradient(-180deg,blue,cyan)";
    await sleep(1000);

    if (array[midd] == x) {
      bol = 1;
      document.getElementById(`${midd}`).style.backgroundImage =
        "linear-gradient(-180deg,rgb(0,175,0),black)";
      document.getElementById(
        "found"
      ).innerHTML = `Element found at index : ${midd}`;
      break;
    } else if (array[midd] < x) {
      start = midd + 1;
      if (start <= array.length - 1) {
        document.getElementById(`${start}`).style.backgroundImage =
          "linear-gradient(-180deg,orange,black)";
        leftgrey(midd - 1);
      }
    } else {
      end = midd - 1;
      if (end >= 0) {
        document.getElementById(`${end}`).style.backgroundImage =
          "linear-gradient(-180deg,orange,black)";
        rightgrey(array, midd);
      }
    }

    await sleep(1000);
  }
  if (bol === 0)
    document.getElementById("found").innerHTML = "Uh oh! Element not found";
  const elements = document.getElementsByClassName("toggle");
  await sleep(3000);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "white";
  }
  document.getElementById("startAlgoButton").disabled = false;
  document.getElementById("addButton").disabled = false;
  document.getElementById("deleteButton").disabled = false;

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.pointerEvents = "auto";
  }
};
//END BINARY SEARCH
//
//
//
//
//
//
//
//
//
//
//

export const leftgrey = (limit) => {
  for (var i = 0; i <= limit + 1; i++) {
    document.getElementById(`${i}`).style.backgroundImage =
      "linear-gradient(-180deg,grey,grey)";
  }
};
export const rightgrey = (array, limit) => {
  const len = array.length;
  for (var i = limit; i <= len - 1; i++) {
    document.getElementById(`${i}`).style.backgroundImage =
      "linear-gradient(-180deg,grey,grey)";
  }
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
