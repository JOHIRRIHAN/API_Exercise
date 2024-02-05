// ======================================================================================
// ============ARRAY & FILTER & SHORT===================== 

/*
const product = [
    {id: 1, name: "Laptop", Price: 909090, inStock: true},
    {id: 2, name: "smartPhone", Price: 19090, inStock: true},
    {id: 3, name: "Tablet", Price: 49090, inStock: false},
    {id: 4, name: "HeadPhone", Price: 509090, inStock: true},
    {id: 5, name: "Camera", Price: 79090, inStock: false},
];

const wait = product.filter(item => item.inStock).map(item => ({name: item.name, price: item.Price}));
*/

// sort ==========>>>>>
/*
const price = [
    {id: 1, value: 30},
    {id: 2, value: 60},
    {id: 3, value: 10},
    {id: 4, value: 70},
    {id: 5, value: 6},
]
const data = [...price].sort((a,b) => a.value - b.value).map((item, index) => ({...item , rank: index + 1}))
*/
/*
const user=[
    {id: 1, name: "john", age: 22},
    {id: 2, name: "johnny", age: 23},
    {id: 3, name: "johir", age: 12},
    {id: 4, name: "pappu", age: 29},
]
const cities=[
    {id: 2, city: "Dhaka"},
    {id: 5, city: "Rajsahi"},
    {id: 7, city: "Cumilla"},
    {id: 4, city: "Sylet"},
]

const data = user.map(item1 => ({...item1, ...cities.find(item2 => item1.id === item2.id)}))
*/


//console.log('5' - - '3'); //output is = 8 




//===========================================================================================
 //                   =====================API====================


// web speech API *********************

/*
const textToSpeak = "Hello There! My Name iS iftey Ur Rahaman. I am a front end Developer.";
const utterance = new SpeechSynthesisUtterance(textToSpeak);
window.speechSynthesis.speak(utterance);*/
/*
const voiceToText = "Hello There! My Name iS iftey Ur Rahaman. I am a front end Developer.";
const telMe = new SpeechSynthesisUtterance(voiceToText);
window.speechSynthesis.speak(telMe);




const textToSpeak = "Hello iftey";
const voice = new SpeechSynthesisUtterance(textToSpeak);
window.speechSynthesis.speak(voice);


const textToVoice = "1 2 3 4 5 6 7 8 9 ";
const tellMe = new SpeechSynthesisUtterance(textToVoice);
window.speechSynthesis.speak(tellMe);*/


// web storage API *****************************
/*
localStorage.setItem('key', 'value');
const storageValue = localStorage.getItem('key');
localStorage.removeItem('key');
*/


// fetch API *******************************
/*
fetch('http://example.com/movies.json')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('error:', error));
*/



// geolocation API************************************

/*
navigator.geolocation.getCurrentPosition(
    position => {
        console.log(`Latitude: ${position.coords.latitude},
        Longitude: ${position.coords.longitude}`
        );
    },
    error => {
        console.error("Error getting location:" ,error.message);
    }
);
*/

// canvas API *******************************
/*
const canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 100;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';
ctx.fillRect(10, 20, 180, 80);
*/


// Audio API ************************
/*
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioContext.createOscillator();
oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
oscillator.connect(audioContext.destination);
oscillator.start();
oscillator.stop(audioContext.currentTime + 1);
*/



// Notification API***********************   // this is the display system notifications


/*
Notification.requestPermission().then(permission => {
    new Notification("Hello Notification!!!!");
});
*/
/*
Notification.requestPermission().then(Permission =>{
    new Notification("hi!!!!");
})
*/
/*
Notification.requestPermission().then(permission =>{
    new Notification("Ami")
})*/

// Notification.requestPermission(permission =>{
//     new Notification("hello")
// })


// workers API ****************

// const worker = new Worker('worker.js');
// worker.postMessage('hello from main script');



// pointer lock API ***************

// const element = document.getElementById("yourElementID");
// element.requestPointerLock();


// push api ***************

/*
if('pushManager' in window){
    Notification.requestPermission().then(permission => {
        if(permission === 'granted'){
            // logic goes here 
        }
    })
}
*/




//===========================================================================================