// Function mengonversi celsius ke fahrenheit
function celciusToFahrenheit(celsius) {
  const inFahrenheit = (9 / 5) * celsius + 32;
  // Print
  console.log("Hasil konversi:", inFahrenheit);
}

// Memanggil function
celciusToFahrenheit(90);

// Hoisting (Fitur yang memungkinkan menulis kode pemanggilan sebelum pendeklarasian fungsi)

// Memanggil funtion
greetWorld()

// Mendeklarasikan function
function greetWorld() {
  console.log('Hello, world!');
}