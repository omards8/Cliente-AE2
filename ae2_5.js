const values = [7,4,3,6,7,9,7,3,7,6,9,1,3,2,2];
let factorial = values.map(multipleFactorial)

function multipleFactorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

console.log(factorial);