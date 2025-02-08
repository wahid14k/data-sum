const fs = require("fs");

// Function to read the file and calculate sum
function calculateSumFromFile(filename) {
  try {
    // Read file content
    const data = fs.readFileSync(filename, "utf8");

    // Split lines into an array
    const lines = data.split("\n");

    // Process each line and calculate sum
    let sum = lines.reduce((total, line) => {
      // Extract number by removing text
      let number = line.replace(/.*Total:|tk/g, "").trim();
      number = number.replace(/,/g, "");
      console.log(number)
      
      return total + parseInt(number, 10); // Convert to integer and sum
    }, 0);

    console.log("Total sum:", sum);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// Call the function with your filename
calculateSumFromFile("data.txt");

