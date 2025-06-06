for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("meloso"); // o console.log("🧸");
  } else if (i % 3 === 0) {
    console.log("miel"); // o console.log("🍯");
  } else if (i % 5 === 0) {
    console.log("oso"); // o console.log("🐻");
  } else {
    console.log(i);
  }
}
