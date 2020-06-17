

        // const api = {

        //     key: "5103c5257e730371ae6800c0b6c92e20",
        //                 base: "https://api.openweathermap.org/data/2.5/"


        // }


//         const api = {



//             key: "5103c5257e730371ae6800c0b6c92e20",
//             base: "https://api.openweathermap.org/data/2.5/"


//  }




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


