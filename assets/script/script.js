var savedCity = []
var findCitySearched = localStorage.getItem('recentCities')


function buildListLoad() {
        console.log(savedCity)
        // var savedCityCount = 0
        // var prevCityli = document.createElement('li')
        // $('#searchBtns').append(prevCityli)
        // var preCityBtn = document.createElement('button')
        // $(prevCityli).append(preCityBtn)
        // $(preCityBtn).text(findCitySearched[savedCityCount])
        // savedCityCount++
}

buildListLoad()


$('#searchBtn').on('click', function() {
    var citySearched = $('#cityInput').val()
    var requestCity = 'http://api.openweathermap.org/data/2.5/weather?q=' +citySearched + '&units=imperial&appid=4c0e740bd6d538f33945371d3b5dfc94'
    

    savedCity.push(citySearched)
    // JSON.parse(savedCity)

    console.log(savedCity)
    savedCity.join()
    localStorage.setItem('recentCities', savedCity)

    function newcityButton() {

        var newCtiyLi = document.createElement('li')
        $('#searchBtns').append(newCtiyLi)
        var newCityBtn = document.createElement('button')
        // $(newCityBtn).attr('id', searchNumber)
        $(newCtiyLi).append(newCityBtn)
        $(newCityBtn).text(citySearched)
        // searchNumber++
    
    }

    newcityButton()

    // $('#cityName').text=citySearched
    // $('#currentTemp').text=requestCity.main.temp

    fetch(requestCity)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            $('#cityName').text(citySearched + ' | Current Weather')
            var iconURL = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'
            $('#weatherIcon').attr('src', iconURL)
            $('#currentTemp').text('Temp: ' + data.main.temp + ' degrees')
            $('#wind').text('Wind: ' + data.wind.speed)
            $('#humidity').text('Humidity: ' + data.main.humidity)
            $('#uvIndex').text('UV Index: ' + data.main.humidity)
            $('#currentCity').removeClass('d-none')
            $('#fiveDayText').removeClass('d-none')
            $('#fiveDayArea').removeClass('d-none')
            var lat = data.coord.lat
            var lon = data.coord.lon
            var requestLatLon = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=4c0e740bd6d538f33945371d3b5dfc94'

            fetch(requestLatLon)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data)
                    
                    var dateSplit = data.list[0].dt_txt
                    var splitSplat = dateSplit.split(' ')
                    var fiveDayIcon = 'http://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '.png'


                    // $('#dateOne').text(splitSplat[0])
                    // $('#iconOne').attr('src', fiveDayIcon)
                    // $('#tempOne').text('Temp: ' + data.list[0].main.temp)
                    // $('#windOne').text('Wind Speed: ' + data.list[0].wind.speed)
                    // $('#humidityOne').text('Humidity: ' + data.list[0].main.humidity)

                    dateSplit = data.list[8].dt_txt
                    splitSplat = dateSplit.split(' ')
                    fiveDayIcon = 'http://openweathermap.org/img/wn/' + data.list[8].weather[0].icon + '.png'


                    $('#dateTwo').text(splitSplat[0])
                    $('#iconTwo').attr('src', fiveDayIcon)
                    $('#tempTwo').text('Temp: ' + data.list[8].main.temp)
                    $('#windTwo').text('Wind Speed: ' + data.list[8].wind.speed)
                    $('#humidityTwo').text('Humidity: ' + data.list[8].main.humidity)


                    dateSplit = data.list[16].dt_txt
                    splitSplat = dateSplit.split(' ')
                    fiveDayIcon = 'http://openweathermap.org/img/wn/' + data.list[16].weather[0].icon + '.png'


                    $('#dateThree').text(splitSplat[0])
                    $('#iconThree').attr('src', fiveDayIcon)
                    $('#tempThree').text('Temp: ' + data.list[16].main.temp)
                    $('#windThree').text('Wind Speed: ' + data.list[16].wind.speed)
                    $('#humidityThree').text('Humidity: ' + data.list[16].main.humidity)


                    dateSplit = data.list[24].dt_txt
                    splitSplat = dateSplit.split(' ')
                    fiveDayIcon = 'http://openweathermap.org/img/wn/' + data.list[24].weather[0].icon + '.png'


                    $('#dateFour').text(splitSplat[0])
                    $('#iconFour').attr('src', fiveDayIcon)
                    $('#tempFour').text('Temp: ' + data.list[24].main.temp)
                    $('#windFour').text('Wind Speed: ' + data.list[24].wind.speed)
                    $('#humidityFour').text('Humidity: ' + data.list[24].main.humidity)


                    dateSplit = data.list[32].dt_txt
                    splitSplat = dateSplit.split(' ')
                    fiveDayIcon = 'http://openweathermap.org/img/wn/' + data.list[32].weather[0].icon + '.png'


                    $('#dateFive').text(splitSplat[0])
                    $('#iconFive').attr('src', fiveDayIcon)
                    $('#tempFive').text('Temp: ' + data.list[32].main.temp)
                    $('#windFive').text('Wind Speed: ' + data.list[32].wind.speed)
                    $('#humidityFive').text('Humidity: ' + data.list[32].main.humidity)


                    dateSplit = data.list[32].dt_txt
                    splitSplat = dateSplit.split(' ')
                    fiveDayIcon = 'http://openweathermap.org/img/wn/' + data.list[32].weather[0].icon + '.png'


                    $('#dateFive').text(splitSplat[0])
                    $('#iconFive').attr('src', fiveDayIcon)
                    $('#tempFive').text('Temp: ' + data.list[32].main.temp)
                    $('#windFive').text('Wind Speed: ' + data.list[32].wind.speed)
                    $('#humidityFive').text('Humidity: ' + data.list[32].main.humidity)
                })
        })

        
})




