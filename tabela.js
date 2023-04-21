let data = window.document.getElementById('data')
let dataatual = new Date();
function formatardata(dataatual){
    let newDate = new Date(dataatual);
    return ` ${newDate.getDate()}/0${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
}
data.innerHTML = formatardata(dataatual)
data.style.marginLeft = '160px'



