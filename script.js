// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createRandomDelayPromise() {
  const randomTime = Math.floor(Math.random() * 3000) + 1000; // Random time between 1000ms and 3000ms
  return new Promise((resolve) => {
    setTimeout(() => resolve(randomTime / 1000), randomTime);
  });
}

// Function to update the table with the resolved values
function updateTableWithResults(results) {
  const table = document.getElementById("result-table");
  table.innerHTML = ""; // Clear the existing loading row

  // Populate the table with the results
  results.forEach((result, index) => {
    const row = table.insertRow(index);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = `Promise ${index + 1}`;
    cell2.innerHTML = `${result.toFixed(3)}`;
  });

  // Calculate and add the total time taken
  const totalTime = results.reduce((acc, time) => acc + time, 0);
  const totalRow = table.insertRow();
  const totalCell1 = totalRow.insertCell(0);
  const totalCell2 = totalRow.insertCell(1);
  totalCell1.innerHTML = "Total";
  totalCell2.innerHTML = `${totalTime.toFixed(3)}`;
}

// Create an array of 3 promises with random delays
const promises = Array.from({ length: 3 }, createRandomDelayPromise);

// Wait for all the promises to resolve using Promise.all
Promise.all(promises)
  .then((results) => {
    updateTableWithResults(results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
