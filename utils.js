// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

function prettyPrint(data) {
    return JSON.stringify(data, null, 2)
}

// const groupBy = (items, key) => items.reduce(
//     (result, item) => ({
//       ...result,
//       [item[key]]: [
//         ...(result[item[key]] || []),
//         item,
//       ],
//     }), 
//     {},
//   );


module.exports = {
    // sleep,
    // groupBy,
    prettyPrint
}