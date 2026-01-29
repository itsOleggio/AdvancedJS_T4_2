export class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    add(code, discription) {
        this.errors.set(code, discription)
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        }
        return 'Unknown error';
    }
}


const error = new ErrorRepository;
error.add(301, 'Unexpected error');
error.add(302, 'Press F');
error.add(401, 'Critical error');

console.log(error.translate(302));
console.log(error.translate(303));

