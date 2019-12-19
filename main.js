$(document).ready(function(){

    $('#submitWeather').click(function(){

        var city = $("#city").val();

        if(city != ''){


            $.ajax ({

                url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric" + "&APPID=b33b33929c6217f3b037d0a8d8ebe51c",
                type: "GET",
                dataType:"jsonp",
                success: function (data){

                    var widget =show(data);

                    $("#show").html(widget);
                
                    $("#city").val('');
                var daysFor = days(data);
                    $("#days").html(daysFor).slideDown();


                    var current = currentWeather(data)

                    $("#current").html(current)
                  

                    var veekly = week(data);
                    $("#week").html(veekly)
                }




            })



        }else{
            $("#error").html('Field cannot be empty')
        }

    })



})




function show(data){
    return "<h3>Temperature for<span> <br>  " + data.city.name + " , " + data.city.country  + "</span></h3>" + "<br>" +
            "<h3>Max Temperature Today  <br>  <span> " + data.list[0].main.temp_max + " °C " + "</span><h3>" + 
            "<h3>Min Temperature Today <br>  <span> " + data.list[0].main.temp_min + " °C " + "</span><h3>" 
            
     
}



  function days(data){
    return "<h3>Temperature for  <span>" + " <h4> "+ data.list[0].dt_txt+ "</h4>"  + " <br> " + data.list[1].main.temp_max  +   " °C " +  "</span></h3" + "<br>" +
     "<h3>Temperature for   <span>" +  "<h4>" + data.list[8].dt_txt  + "</h4>" + " <br> " + data.list[2].main.temp_max  +   " °C " +  "</span></h3" +"<br>" +
     "<h3>Temperature for  <span>" +"<h4>" +  data.list[16].dt_txt + "</h4>" + " <br> " + data.list[3].main.temp_max   + " °C " + "</span></h3" +"<br>" +
    "<h3>Temperature for  <span>" + "<h4>" +  data.list[24].dt_txt + "</h4>"+ " <br> " + data.list[4].main.temp_max   + " °C " + "</span></h3" +"<br>" +
     "<h3>Temperature for  <span>" + "<h4>" +  data.list[32].dt_txt + "</h4>" + " <br> " + data.list[5].main.temp_max   + " °C " +  "</span></h3" 
  }


  function currentWeather (data){
      return "<h1>Current Weather</h1>"
  }

  function week(data){
      return "<h2>Forecast for next five days</h2>"
  }



