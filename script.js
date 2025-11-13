const nameInput = document.getElementById('nameInput');
const saveNameBtn = document.getElementById('saveName');
const greeting = document.getElementById('greeting');

saveNameBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if(name){
        localStorage.setItem('userName', name);
        greeting.textContent = `Merhaba, ${name}!`;
        nameInput.value = '';
    }
});
window.addEventListener('load', () => {
    const savedName = localStorage.getItem('userName');
    if(savedName){
        greeting.textContent = `Merhaba, ${savedName}!`;
    }
});
const getLocationBtn = document.getElementById('getLocation');
const locationDisplay = document.getElementById('location');

getLocationBtn.addEventListener('click', () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            locationDisplay.textContent = `Enlem: ${latitude.toFixed(4)}, Boylam: ${longitude.toFixed(4)}`;
        }, (error) => {
            locationDisplay.textContent = 'Konum alýnamadý: ' + error.message;
        });
    } else {
        locationDisplay.textContent = 'Tarayýcýnýz konum desteði vermiyor.';
    }
});
