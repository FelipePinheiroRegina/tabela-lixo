const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    
    if (hr < 10) hr = '0' + hr;
    
    if (min < 10) min = '0' + min;
    
    if (seg < 10) seg = '0' + seg;
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    
})

let data = window.document.getElementById('data')
let dataatual = new Date();
function formatardata(dataatual){
    let newDate = new Date(dataatual);
    return ` ${newDate.getDate()}/0${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
}
data.innerHTML = formatardata(dataatual)




