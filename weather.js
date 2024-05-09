function  getWeather(){
    const apiKey = '752c2aec620182504d9a1a5015cc9fa4';
    const city = document.getElementById("area").value;
    // check if city has been entered
    if (!city){
        alert("Please enter a city name");
        return;
    }
    // fetch current weather data
    const currentWeatherUrl = `https://home.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl =`https://home.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    //fetching the current weather data
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data =>{
            dislplayWeather(data);
        })
        //what to display in case their is an error in fetching the data
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('error fetching current weather data. Please try again.');
        });
    //fetching  the forecast
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data =>{
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('error fetching current weather data. Please try again.');
        });
}
