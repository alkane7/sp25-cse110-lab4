function discountprices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    // console.log(i);
    // console.log(length)

    return discounted;
}

console.log(discountprices([100, 200, 300], 0.5));

// function discountprices(prices, discount) {
//     let discounted = [];
//     let finalPrice = 0;

//     for (let i = 0; i < prices.length; i++) {
//         let discountedPrice = prices[i] * (1 - discount);
//         finalPrice = Math.round(discountedPrice * 100) / 100;
//         discounted.push(finalPrice);
//     }

//     // console.log(i);
//     // console.log(discountedPrice);
//     // console.log(finalPrice);

//     return discounted;
// }

// console.log(discountprices([100, 200, 300], 0.5));