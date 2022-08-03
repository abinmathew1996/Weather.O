function search() {
    city = C_name.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`
    )

      .then((resu) => resu.json())
      .then((data) => displayData(data));
  }

  function displayData(cityData) {
    country = cityData["sys"]["country"];
    console.log(country);
    temp1 = cityData["main"]["temp"];
    console.log(temp1);
    temp2 = cityData["main"]["feels_like"];
    console.log(temp2);
    humidity = cityData["main"]["humidity"];
    console.log(humidity);
    pressure = cityData["main"]["pressure"];
    console.log(pressure);
    windSpd = cityData["wind"]["speed"];
    console.log(windSpd);
    city = cityData["name"];
    console.log(city);
    weather = cityData.weather[0]["main"];
    console.log(weather);
    // icon = cityData.weather[0]["icon"];
    // console.log(icon);


   let today = new Date();
   let yyyy = today.getFullYear();
   let mm = today.getMonth() + 1; // Months start at 0!
   let dd = today.getDate();
   if (dd < 10) dd = '0' + dd;
   if (mm < 10) mm = '0' + mm;
   
   today =  yyyy + '-'+ mm +'-' + dd;
   var currentdate = new Date(); 
   var datetime =  currentdate.getHours() + ":"  
                   + currentdate.getMinutes() 

                   const dayIndex = new Date().getDay();
                   const getDayName = (dayIndex) =>{
                     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                     return days[dayIndex];
                   }
                   const dayName = getDayName(dayIndex)

      let htmlData = `  <body>
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-sm-12 bg bg-image d-flex"
            style="
              background-image: url(clear-air-fly-fantastic-travel\ 1.jpg);
              height: 100vh;
            "
          >
            <div class="content">
              <div>
                <img src="Group 3.svg" style="width: 64px" alt="" />
              </div>
              <div class="dateTime">
                <p id="date">${today}</p>
                <div id="time">${datetime
                }</div>
                <p id="p1">${dayName}</p>
              </div>
              <div class="cityCountry">
                <p style="margin-bottom: 0px" id="city">${city}</p>
                <p style="margin-bottom: 0px" id="country">${country}</p>
              </div>
              <div class="condition">
                <img
                  src="Group 17.svg"
                  style="width: 120px; margin-bottom: 0px"
                  alt=""
                />
                <p style="margin-bottom: 0px" id="weather">${weather}</p>
              </div>
              <div id="text1">Temperature</div>
  
              <div class="tab tab0" style="width: 20%; height: 20%">
                <div id="temp1">${(temp1-273).toFixed(2)
                }</div>
  
                <hr id="htag" />
  
                <div id="temp2">${(temp2-273).toFixed(2)}</div>
              </div>
  
              <div id="text2">Humidity(%)</div>
  
              <div class="tab1 tab0"  style="width: 20%; height: 20%">
                <div id="Humidity">${humidity}%</div>
              </div>
  
              <div id="text3">Wind (KMph)</div>
  
              <div class="tab2 tab0" style="width: 20%; height: 20%">
                <div id="wind">${windSpd}</div>
              </div>
              <div id="text4">Pressure</div>
  
              <div class="tab3 tab0" style="width: 20%; height: 20%">
                <div id="pressure">${pressure}</div>
              </div>
              <a href="http://127.0.0.1:5500/index.html"
                ><img id="backbtn" src="Group 21.svg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </body>
  `
  resultData.innerHTML=htmlData;
              }

  

