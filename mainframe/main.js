

        // const api = {

        //     key: "5103c5257e730371ae6800c0b6c92e20",
        //                 base: "https://api.openweathermap.org/data/2.5/"


        // }


//         const api = {



//             key: "5103c5257e730371ae6800c0b6c92e20",
//             base: "https://api.openweathermap.org/data/2.5/"


//  }


 const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";


// const searchbox = document.querySelector('.form-control');
// searchbox.addEventListener('keypress', setQuery);


// function setQuery(evt){


//             if(evt.keyCode == 13 ){
//                 getResults(searchbox.value);
                
//             }
//             if(evt.keyCode === '.btn'){
//                 getResults(searchbox.value);
//             }


// }


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                            // SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









// function getResults (query){

//     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//                 .then(weather =>{
//                     return weather.json();
//                 }).then(displayResults);
            



//                 }


//                         function displayResults (weather){


                            
                       
//                                 let city = document.querySelector('.location .city');
//                                 city.innerText = `${weather.name}, ${weather.sys.country}`;

//                                 let now = new Date();
//                                 let date = document.querySelector('.location .date');
//                                 date.innerText = currentDate(now);

//                                         let temp = document.querySelector('.current .temp');
//                                         temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span> `;

//                                         let weather_el = document.querySelector('.current .weather');
//                                         weather_el.innerText= weather.weather[0].main;

//                                         let hilow = document.querySelector(".hi-low");
//                                         hilow.innerText= `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;
                       
//                         }

//                             function currentDate (d){

//                                 let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//                                 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                           
                           
//                                         let day = days[d.getDay()];
//                                         let date = d.getDate();
//                                         let month = months [d.getMonth()];
//                                         let year = d.getFullYear();

//                                         return `${day} ${date} ${month} ${year} `;
//                             }






                    //////////////////// // ////////////////////////////////////////////////////////





                            // function randomQuote() {
                            //     $.ajax({
                            //         url: "https://api.forismatic.com/api/1.0/?",
                            //         dataType: "jsonp",
                            //         data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
                            //         success: function (quoteData) {
                            
                            //             if (quoteData.quoteAuthor === '') {
                            //                 quoteData.quoteAuthor = 'Unknown';
                            //             };
                            
                            //             $("#randomQuote").html("<p id='randomQuote'><i class=\"fa fa-quote-left\"></i> &nbsp; &nbsp;" + quoteData.quoteText + "<br/> <div class=\"text-right\"> &dash;" + quoteData.quoteAuthor + "</div></p>");
                                        
                            //         }
                            //     });
                            // }
                            
                            
                            
                            // $(function () {
                            //     randomQuote();
                                
                            // });
                            
                            // $("#newQuote").click(function () {
                                
                            //     randomQuote();
                            // });













                            if('geolocation' in navigator){
                                navigator.geolocation.getCurrentPosition(setPosition, showError);
                            }else{
                                notificationElement.style.display = "block";
                                notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
                            }
                            
                            // SET USER'S POSITION
                            function setPosition(position){
                                let latitude = position.coords.latitude;
                                let longitude = position.coords.longitude;
                                
                                getWeather(latitude, longitude);
                            }
                            
                            // SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
                            function showError(error){
                                notificationElement.style.display = "block";
                                notificationElement.innerHTML = `<p> ${error.message} </p>`;
                            }






                        

                        // GET WEATHER FROM API PROVIDER
                        function getWeather(latitude, longitude){
                            let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
                            
                            
                        fetch(api)
                                .then(function(response){
                                    let data = response.json();
                                    return data;
                                })
                                .then(function(data){
                                    weather.temperature.value = Math.floor(data.main.temp - KELVIN);
                                    weather.description = data.weather[0].description;
                                    weather.iconId = data.weather[0].icon;
                                    weather.city = data.name;
                                    weather.country = data.sys.country;
                                })
                                .then(function(){
                                    displayWeather();
                                });
                        }
                        
                        // DISPLAY WEATHER TO UI
                        function displayWeather(){
                            iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
                            tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
                            descElement.innerHTML = weather.description;
                            locationElement.innerHTML = `${weather.city}, ${weather.country}`;
                        }
                        
                        // C to F conversion
                        function celsiusToFahrenheit(temperature){
                            return (temperature * 9/5) + 32;
                        }
                        
                        // WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
                        tempElement.addEventListener("click", function(){
                            if(weather.temperature.value === undefined) return;
                            
                            if(weather.temperature.unit == "celsius"){
                                let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
                                fahrenheit = Math.floor(fahrenheit);
                                
                                tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
                                weather.temperature.unit = "fahrenheit";
                            }else{
                                tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
                                weather.temperature.unit = "celsius"
                            }
                        });