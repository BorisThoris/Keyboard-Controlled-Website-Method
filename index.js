let x = 0;
let y = -1;
let yMax = 0;

try {
  containers[0].children[0].focus();
} catch (e) {
  console.log("error");
}

function keyPressed(e) {
  let containers = document.getElementsByClassName("container");
  let prevKey = document.getElementById("KeyBeingPressed").innerHTML.split(" ");

  if (prevKey[2] !== e.key)
    document.getElementById(
      "KeyBeingPressed"
    ).innerHTML = `Key Pressed: ${e.key} 1`;
  else {
    let string = document.getElementById("KeyBeingPressed").innerHTML;
    let newNumb = Number(prevKey[3]) + 1;
    let newNumb2 = newNumb.toString();

    let test = prevKey[3];
    let newString = string.replace(test, newNumb2);

    document.getElementById("KeyBeingPressed").innerHTML = newString;
  }

  if (yMax === 0) {
    yMax = containers.length;
  }

  switch (e.key) {
    case "ArrowDown":
      if (y === -1) y = 0;
      else if (y < yMax - 1) y++;
      else {
        y = yMax - 1;
      }
      break;
    case "ArrowUp":
      if (y === -1) y = 0;
      else if (y > 0) y--;
      break;

    case "ArrowRight":
      x++;
      break;
    case "ArrowLeft":
      if (x != 0) x--;
      break;
  }

  try {
    containers[y].children[x].focus();
  } catch (e) {
    try {
      containers[y].children[containers[y].children.length - 1].focus();
      x = containers[y].children.length - 1;
    } catch (e) {
      console.log(e);
      console.log(y);
    }
  }
}

document.addEventListener("keyup", e => {
  keyPressed(e);
});
