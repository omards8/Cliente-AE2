const dataArray = [7,4,3,6,7,9,7,3,7,6,9,0,3,2,2];
function average(dataArray) {
    dataArray.sort((a, b) => a - b);
    let izquierda = Math.floor((dataArray.length - 1) / 2);
    let derecha = Math.ceil((dataArray.length - 1) / 2);
    let media = (dataArray[izquierda] + dataArray[derecha]) / 2;
    alert("La media es: " + media);
}
average(dataArray);