// const switchOnButton = document.getElementById("switchOn");
// const switchOffButton = document.getElementById("switchOff");

// switchOnButton.addEventListener("click", () => {
//   sendOn();
// });
// switchOffButton.addEventListener("click", () => {
//   sendOff();
// });

// async function sendOn() {
//   const url = "http://localhost:5000/changeCommand";
//   try {
//     await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json", // Adding Content-Type header
//       },
//       body: JSON.stringify({ command: "On" }),
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// async function sendOff() {
//   const url = "http://localhost:5000/changeCommand";
//   try {
//     await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json", // Adding Content-Type header
//       },
//       body: JSON.stringify({ command: "Off" }),
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// }

const switchButton = document.getElementById("switchButton");

switchButton.addEventListener("change", () => {
  if (switchButton.checked) {
    sendOff();
  } else {
    sendOn();
  }
});

async function sendOn() {
  const url = "http://localhost:5000/changeCommand";
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ command: "On" }),
    });
  } catch (error) {
    console.error(error.message);
  }
}

async function sendOff() {
  const url = "http://localhost:5000/changeCommand";
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ command: "Off" }),
    });
  } catch (error) {
    console.error(error.message);
  }
}
