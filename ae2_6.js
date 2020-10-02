const users = ["Omar", "Paco", "Jose", "Juan", "Cristian", "Nacho", "Alejandro", "Álvaro"];
const blackListed = [ "Omar", "Jose", "Alejandro"];
let listed = users;

function whiteListed () {
	for (let index = 0; index < users.length ; index++) {
		for (let j = 0; j < blackListed.length; j++) {
			if (blackListed[index]==users[j]) {
				listed.splice(index, 1);
			} 
			
		}
	}
	console.log(listed);
}
whiteListed()
