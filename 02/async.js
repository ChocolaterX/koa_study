// async function getData() {
//     return 'this is data';
// }
//
// console.log(getData());

// async function getData() {
//     return 'this is data';
// }
//
// // var p = getData();
// // p.then(() => {
// //     console.log(data);
// // });
//
// async function test() {
//     var data = await getData();
//     console.log(data);
// }
//
// test();

// async function getData() {
//     console.log(2);
//     return 'this is data';
// }
//
// async function test() {
//     console.log(1);
//     var data = await getData();
//     console.log(data);
//     console.log(3);
// }
//
// test();

function findData() {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve("long_time_value")
            , 1000);

    });
}

async function test() {
    const v = await findData();
    console.log(v);
}

test();
