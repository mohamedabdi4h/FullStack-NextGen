// sync
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
};

fetchData().then(data => {
    console.log(data);
});


// async and await
const fetchDataAsync = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Call the async function
fetchDataAsync();