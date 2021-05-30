let cityChosen = $('#CityName');
let searchButton = $('#SerchButton');

const apiKey = "0ee3bf11765f2dbf4429370b2519d0e2";

let queryURL;
let otherURL;

searchButton.on('click', function(){
    console.log("this " + cityChosen.val());
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityChosen.val() + "&appid=" + apiKey;
    

    fetch(queryURL)
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data);
            otherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data["coord"]["lat"] + "&lon=" + data["coord"]["lon"] + "&appid=" +  apiKey;
            fetch(otherURL)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                })
    
        
        
        })

    
})

