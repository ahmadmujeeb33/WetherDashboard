let cityChosen = $('#CityName');
let searchButton = $('#SerchButton');

let curentWetherSection = $(".CurrentWether")

let cityTitle = $('<h1>');

let temp = $('<p>');
let wind = $('<p>');

const apiKey = "0ee3bf11765f2dbf4429370b2519d0e2";

let queryURL;
let otherURL;

function something(data){
    console.log(data);
    var today = moment();
    let currentDate = today.format("MMM Do, YYYY");
    cityTitle.text(cityChosen.val() + " (" + currentDate + ")");
    curentWetherSection.append(cityTitle);

    console.log(data["main"]["temp"]);

    temp.text("Wind: " + data["wind"]["speed"]);
    curentWetherSection.append(temp);

    wind.text("Temp: " + data["main"]["temp"] + " deg");
    curentWetherSection.append(wind);

    
}

searchButton.on('click', function(){
    console.log("this " + cityChosen.val());
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityChosen.val() + "&units=metric&appid=" + apiKey;
    

    fetch(queryURL)
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data);
            something(data)
            otherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data["coord"]["lat"] + "&units=metric&lon=" + data["coord"]["lon"] + "&appid=" +  apiKey;
            fetch(otherURL)
                .then(function(response){
                    return response.json();
                })
                .then(function(data1){
                    console.log(data1);
                })
    
        
        
        })

        

    
})

