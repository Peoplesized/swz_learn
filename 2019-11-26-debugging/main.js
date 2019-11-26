function add(a, b) {
	const result = a + b;
	const wrong = result + 1;
	return wrong;
}

class debug_test {
    constructor(id, description){
        this.id= id
        this.description = description
    }
    print(){
        console.log(`${this.id} -> ${this.description}`)
    }
}

const first = 1;
const second = 2;
console.log('result:', first, '+', second, '=', add(1, 2));
let d1 = new debug_test(1, "Testing live server...")
let d2 = new debug_test(2, "Testing production server...")
d1.print()
d2.print()