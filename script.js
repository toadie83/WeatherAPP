document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const locationInput = document.getElementById("locationInput");
    const weatherInfo = document.getElementById("weatherInfo");

    searchButton.addEventListener("click", () => {
        const location = locationInput.value.trim();
        if (location !== "") {
            getWeather(location);
        } else {
            alert("Please enter a location.");
        }
    });

    async function getWeather(location) {
        const apiKey = "d06c35d838b0bf99cca7b4c2a85edda2";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("An error occurred. Please try again later.");
        }
    }

    function displayWeather(data) {
        const { name, main, weather, wind } = data;
        const temperature = main.temp;
        const windspeed = wind.speed;     
        const description = weather[0].description;

        weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Wind Speed: ${windspeed}m/s</p>
            <p>Description: ${description}</p>            
        `;
    }
});
