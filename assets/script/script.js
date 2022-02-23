


$('#searchBtn').on('click', function() {
    var citySearched = $('#cityInput').val()
    var requestCity = 'http://api.openweathermap.org/data/2.5/weather?q=' +citySearched + '&units=imperial&appid=4c0e740bd6d538f33945371d3b5dfc94'

    // $('#cityName').text=citySearched
    // $('#currentTemp').text=requestCity.main.temp

    fetch(requestCity)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            $('#cityName').text(citySearched + ' ' + data.weather[0].icon)
            $('#currentTemp').text('Temp: ' + data.main.temp + ' degrees')
            $('#wind').text('Wind: ' + data.wind.speed)

        })

        
})




