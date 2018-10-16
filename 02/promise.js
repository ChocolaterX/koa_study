async function getData() {
    return 'this is data';
}

console.log(getData());




// var p1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 800, 'P1');
// });
// var p2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 600, 'P2');
// });
// // 同时执行p1和p2，并在它们都完成后执行then:
// Promise.all([p1, p2]).then(function (results) {
//     console.log(results); // 获得一个Array: ['P1', 'P2']
//     console.log('abc');
//     console.log('abc');
//     console.log('abc');
//     console.log('abc');
//
// });


// function test(resolve, reject) {
//     var timeOut = Math.random() * 2;
//     /*setTimeout(function () {
//         if (timeOut < 1) {
//             resolve('200 OK');
//         }
//         else {
//             reject('timeout in ' + timeOut + ' seconds.');
//         }
//     }, timeOut * 1000);*/
//     if (timeOut < 1) {
//         resolve('200 OK');
//     }
//     else {
//         reject('timeout in ' + timeOut + ' seconds.');
//     }
// }
//
// new Promise(test)
//     .then(function (result) {
//         console.log('成功：' + result);
//     }).catch(function (reason) {
//     console.log('失败：' + reason);
// });