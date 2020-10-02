const values = [7,4,3,6,7,9,7,3,7,6,9,1,3,2,2];
let num = 0;
let ok = true;
function findGreaterThan() {
    for (let index = 0; index < values.length; index++) {
        if (num > values[index] ) {
            ok = false;
        }
    }
    alert(ok);
}
findGreaterThan();