const searchbtn = document.getElementById("Search-btn");
const cityinput = document.getElementById("city-input");
const output = document.getElementById("root");

async function fetchFormNetwork(city) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0f5daee9b1ce4a4c965185033241605&q=${city}&aqi=yes`
  );
  return await promise.json();
}
function genrateTemplate() {
  output.innerHTML = `    <div>
    <table id="weatherTable">
      <thead>
        <tr>
          <th colspan="2" class="title">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td id="Name"></td>
        </tr>
        <tr>
          <td>Region</td>
          <td id="Region"></td>
        </tr>
        <tr>
          <td>Country</td>
          <td id="Country"></td>
        </tr>
        <tr>
          <td>Latitude</td>
          <td id="Latitude"></td>
        </tr>
        <tr>
          <td>Longitude</td>
          <td id="Longitude"></td>
        </tr>
        <tr>
          <td>Timezone</td>
          <td id="Timezone"></td>
        </tr>
        <tr>
          <td>Local Time</td>
          <td id="Local-Time"></td>
        </tr>
      </tbody>
    </table>
    <table id="currentWeatherTable">
      <thead>
        <tr>
          <th colspan="2" class="title">Current Weather</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Last Updated</td>
          <td id="Last-Updated"></td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td id="Temperature"></td>
        </tr>
        <tr>
          <td>Condition</td>
          <td id="Condition"></td>
        </tr>
        <tr>
          <td>Wind Speed</td>
          <td id="Wind-Speed"></td>
        </tr>
        <tr>
          <td>Wind Direction</td>
          <td id="Wind-Direction"></td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td id="Pressure"></td>
        </tr>
        <tr>
          <td>Precipitation</td>
          <td id="Precipitation"></td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td id="Humidity"></td>
        </tr>
        <tr>
          <td>Cloudiness</td>
          <td id="Cloudiness"></td>
        </tr>
        <tr>
          <td>Feels Like</td>
          <td id="Feels-Like"></td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td id="Visibility"></td>
        </tr>
        <tr>
          <td>UV Index</td>
          <td id="UV-Index"></td>
        </tr>
        <tr>
          <td>Gust Speed</td>
          <td id="Gust-Speed"></td>
        </tr>
        <tr>
          <td class="title">Air Quality</td>
          <td id="Air-Quality">
        
          </td>
        </tr>
      </tbody>
    </table>
  </div>`;
}
function changeBackground(condition) {
  const el = document.getElementsByClassName("title");
  console.log(el);
  console.log(condition);
  if ("Partly cloudy" === condition) {
    el[0].style.backgroundColor = "blue";
    el[1].style.backgroundColor = "blue";
    el[2].style.backgroundColor = "blue";
  }
  if ("Overcast" === condition) {
    el[0].style.backgroundColor = "grey";
    el[1].style.backgroundColor = "grey";
    el[2].style.backgroundColor = "grey";
  }
  if ("Sunny" === condition) {
    el[0].style.backgroundColor = "yellow";
    el[1].style.backgroundColor = "yellow";
    el[2].style.backgroundColor = "yellow";
  }
  if ("Mist" === condition) {
    el[0].style.backgroundColor = "orange";
    el[1].style.backgroundColor = "orange";
    el[2].style.backgroundColor = "orange";
  }
}

searchbtn.addEventListener("click", async () => {
  genrateTemplate();
  //input variable..
  const Name = document.getElementById("Name");
  const Region = document.getElementById("Region");
  const Country = document.getElementById("Country");
  const Latitude = document.getElementById("Latitude");
  const Longitude = document.getElementById("Longitude");
  const Timezone = document.getElementById("Timezone");
  const LocalTime = document.getElementById("Local-Time");
  const LastUpdated = document.getElementById("Last-Updated");
  const Temperature = document.getElementById("Temperature");
  const Condition = document.getElementById("Condition");
  const WindSpeed = document.getElementById("Wind-Speed");
  const WindDirection = document.getElementById("Wind-Direction");
  const Pressure = document.getElementById("Pressure");
  const Precipitation = document.getElementById("Precipitation");
  const Humidity = document.getElementById("Humidity");
  const Cloudiness = document.getElementById("Cloudiness");
  const FeelsLike = document.getElementById("Feels-Like");
  const Visibility = document.getElementById("Visibility");
  const UVIndex = document.getElementById("UV-Index");
  const GustSpeed = document.getElementById("Gust-Speed");
  const AirQuality = document.getElementById("Air-Quality");
  //local variable..
  const city = cityinput.value;
  const result = await fetchFormNetwork(city);
  //DOM
  Name.innerText = `${result.location.name}`;
  Region.innerText = `${result.location.region}`;
  Country.innerText = `${result.location.country}`;
  Latitude.innerText = `${result.location.lat}`;
  Longitude.innerText = `${result.location.lon}`;
  Timezone.innerText = `${result.location.tz_id}`;
  LocalTime.innerText = `${result.location.localtime}`;
  LastUpdated.innerText = `${result.current.last_updated}`;
  Temperature.innerText = `${result.current.temp_c}^C (${result.current.temp_f}^F)`;
  Condition.innerText = `${result.current.condition.text}`;
  WindSpeed.innerText = `${result.current.wind_kph}km/h (${result.current.wind_mph} mph)`;
  WindDirection.innerText = `${result.current.wind_dir} (${result.current.wind_degree}^)`;
  Pressure.innerText = `${result.current.pressure_mb}  mb (${result.current.pressure_in} in)`;
  Precipitation.innerText = `${result.current.precip_mm} mm (${result.current.precip_mm} in)`;
  Humidity.innerText = `${result.current.humidity}%`;
  Cloudiness.innerText = `${result.current.cloud}%`;
  FeelsLike.innerText = `${result.current.feelslike_c}^C (${result.current.feelslike_f}^F)`;
  Visibility.innerText = `${result.current.vis_km} km (${result.current.vis_miles} miles)`;
  UVIndex.innerText = `${result.current.uv}`;
  GustSpeed.innerText = `${result.current.gust_kph} km/h (${result.current.gust_mph} mph)`;
  AirQuality.innerHTML = `
  CO: ${result.current.air_quality.co}<br>
              NO2: ${result.current.air_quality.no2}<br>
              O3: ${result.current.air_quality.o3}<br>
              SO2: ${result.current.air_quality.so2}<br>
              PM2.5: ${result.current.pm2_5}<br>
              PM10: ${result.current.air_quality.pm10}<br>
              US EPA Index: ${result.current.air_quality["us-epa-index"]}<br>
              GB DEFRA Index: ${result.current.air_quality["gb-defra-index"]}
  `;

  changeBackground(`${result.current.condition.text}`);
});
