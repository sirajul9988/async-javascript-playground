function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

async function main() {
  console.log("Fetching data...");
  const result = await fetchData();
  console.log(result);
}

main();
