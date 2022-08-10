orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

const total = Object.values(orderData);
let sum = 0;
for (let i = 0; i < total.length; i++) {
    sum = sum + total[i];
}
console.log("Total is " + sum);
