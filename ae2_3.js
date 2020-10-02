const dataArray = [7,4,3,6,7,9,7,3,7,6,9,1,3,2,2];
function findMinimum() {
    let sol = dataArray.reduce((a, b) => Math.min(a, b));
    alert("El número mínimo es: " + sol);
}
findMinimum(); 