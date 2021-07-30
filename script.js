
var data;
var apikey='dc0ed7bf55mshed155846b664346p1b10fdjsn5e57e44babb9'
var desc,country1,lon,lat,speed,temp,humidity,pressure,icon;
var layout=``;
var country;
var inp=document.getElementsByClassName('inp')[0]
console.log(inp.value)
var data=document.getElementsByClassName('data')[0]
var search=document.getElementsByClassName('inp')[0]
var btn=document.getElementsByClassName('bt')[0]
var error=document.getElementsByClassName('error')[0]
async function wheather() {
	try {
		
		if (search.value==="") {
			
			country='mangrol'
		}
		else{
			country=`${search.value}`
			
		}
		var upperCountry=country.charAt(0).toUpperCase()+ country.slice(1);
		
		var url=`https://community-open-weather-map.p.rapidapi.com/find?q=${country}&cnt=1&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric`
		
		var params={
			"method": "GET",
			"headers": {
			"x-rapidapi-key": `${apikey}`,
			"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
		}
		}
		var response= await fetch(url,params)
var weather=await response.json()
if (response){


	desc=weather.list[0].weather[0].description;
	icon=weather.list[0].weather[0].icon;
	temp=weather.list[0].main.temp;
	country1=weather.list[0].sys.country;
	lon=weather.list[0].coord.lon;
	lat=weather.list[0].coord.lat;
	speed=weather.list[0].wind.speed;
	humidity=Math.round(weather.list[0].main.humidity*0.03381);
	pressure=weather.list[0].main.pressure;
	var celsius=Math.round(temp-273.15)



	data.innerHTML=`<div class="firstcard">
	<div id="fline">
	<h1 class="fcardh" id="cardh" > ${celsius} &#176 C</h1>
	<h2 class="fcardh" id="cardcont" > ${upperCountry}(${country1})</h2>
	<img id="icon" src="https://openweathermap.org/img/w/${icon}.png" alt="wheatherimg">
	<h2 class="fcardh" id="cardclimate" > ${desc}</h2>
	</div>
	<div class="sline">
	<h2 class="fcardh" id="speed"> Wind speed - ${speed} km/h</h2>
	<h2 class="fcardh" id="humi"> Pressure - ${pressure}</h2>
		</div>
	<h2 class="fcardh" id="press"> Humidity - ${humidity} oz</h2>
	<div class="tline">
	
	<h2 class="fcardh" id="lon"> Longitude- ${lon}</h2>
	<h2 class="fcardh" id="lat"> Latitude - ${lat}</h2>

	</div>
		`
}
return weather;
} 
	
catch (e) { 
	console.log(e)
	error.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
	<strong>Error!</strong>No country found.
	<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
}
}

var d=wheather()
d.then((data)=> {
	data=data;
})

btn.addEventListener('click',wheather)