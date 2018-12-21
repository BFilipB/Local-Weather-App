$(document).ready(function(){
  var lat;
  var long;
  $.getJSON('https://ipapi.co/8.8.8.8/json/',function(data2){
    lat=data2.lat;
    long=data2.lon;
    var api='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=09c18185433ddb8eadf638c5147636ec';
    
  $.getJSON(api,function(data){
    var fTemp;
    var kTemp;
    var cTemp;
    var tempSwap=true;
    
    var weatherType=data.weather[0].description;
      kTemp=data.main.temp;
    var windSpeed=data.wind.speed;
    var city=data.name;
    
    fTemp=(kTemp*(9/5)-459.67).toFixed(1);
    
    cTemp=(kTemp-273).toFixed(1);
    $("#city").html(city);
    $("weatherType").html(weatherType);
    $("#fTemp").html(fTemp+ "&#8457;");
    $("#fTemp").click(function(){
      if(tempSwap===false){
      $("#fTemp").html(fTemp+ "&#8457;");
      tempSwap=true;
       
      }
      else{
        $("#fTemp").html(cTemp+ " &#8451;");
        tempSwap=false;
      }
      });
    
    windSpeed=(2.237*(windSpeed)).toFixed(1);
    $("#windSpeed").html(windSpeed+ "mph");
    
    if(cTemp>20){
    $('body').css('http://cdn26.us1.fansshare.com/photo/hotwallpaper/hd-wallpapers-hot-summer-wallpaper-bewitch-monique-groove-slam-work-back-filter-that-wallpaper-hot-weather-17941761.jpg)');  
    }
    
     if(cTemp>15 & cTemp<20){
    $('body').css('http://bloximages.chicago2.vip.townnews.com/journalstar.com/content/tncms/assets/v3/editorial/c/ff/cff7d076-c81d-561c-b819-b641de78393f/561ecac5f3bb5.image.jpg)')  
    };
    
     if(cTemp>10 & cTemp<15){
      $('body').css('background-image','url(https://images5.alphacoders.com/328/thumb-350-328338.jpg)');
    }
     if(cTemp<0 & cTemp<10){
     $('body').css('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQd9MELKvA7K3tBOFYuvsjvI1_zbjXwUFCElioR3J_V15H2qZQ9Q)');  
      
     }
    
  });
    
  });
});
