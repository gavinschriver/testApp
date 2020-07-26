// // let forecast = []

// // export const useForecast = () => {
// //     return forecast.slice()
// // }

// const getForecast = () => {
//     return fetch("http://www.7timer.info/bin/api.pl?lon=36.1627&lat=86.7816&product=civillight&output=json")
//         .then(response => response.json())
//         .then(parsedForecast => {
//             forecast = parsedForecast
//         }) 
//  }  

// fetch("http://www.7timer.info/bin/api.pl?lon=36.1627&lat=86.7816&product=civillight&output=json")
//         .then(response => response.json())
//         .then(data => console.log(data))