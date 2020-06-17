  function randomQuote() {
                                $.ajax({
                                    url: "https://api.forismatic.com/api/1.0/?",
                                    dataType: "jsonp",
                                    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
                                    success: function (quoteData) {
                            
                                        if (quoteData.quoteAuthor === '') {
                                            quoteData.quoteAuthor = 'Unknown';
                                        };
                            
                                        $("#randomQuote").html("<p id='randomQuote'><i class=\"fa fa-quote-left\"></i> &nbsp; &nbsp;" + quoteData.quoteText + "<br/> <div class=\"text-right\"> &dash;" + quoteData.quoteAuthor + "</div></p>");
                                        
                                    }
                                });
                            }
                            
                            
                            
                            $(function () {
                                randomQuote();
                                
                            });
                            
                            $("#newQuote").click(function () {
                                
                                randomQuote();
                            });