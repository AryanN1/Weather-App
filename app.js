window.addEventListener("load", ()=>{
let long;
let lat;
let temperatureDescription;

if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(position => {
	long = position.coords.longitude;
	lat = position.coords.latitude;
const proxy = "https://cors-anywhere.herokuapp.com/"
const api = `${proxy}https://api.darksky.net/forecast/a3e3c44d19276793050fab2ca9674a69/${lat},${long}`;


fetch(api)
	.then(response => {
		return response.json()
	})
	.then(data =>{
		console.log(data);
		const {temperature, summary} = data.currently;

	})



}); 



}






});