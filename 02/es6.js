let name = 'jsy';
let person = {
    name: 'abc',
    run() {
        console.log(`${name} is running`);
    }
};

person.run();

setTimeout(function () {
    console.log('timeout');
}, 1000);

setTimeout(() => {
    console.log('timeout2');
}, 2000);