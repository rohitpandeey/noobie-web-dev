// //reduce method

// const myNumbers = [1, 2, 3, 4, 5];

// const mynum=myNumbers.reduce((acc,num)=>{
//     console.log(`acc:${acc} num:${num}`);
//     return acc+num},0)
//     // acc:0 num:1
//     // acc:1 num:2
//     // acc:3 num:3
//     // acc:6 num:4
//     // acc:10 num:5
//     // 15

// console.log(mynum);
// //output- 15/

const shoppingCart=[
    {
        itemname:"Js cource",
        price:100
    },
    {
        itemname:"Python cource",
        price:150
    },
    {
        itemname:"Java cource",
        price:200
    },
    {
        itemname:"C# cource",
        price:300
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>{
    return acc+ item.price
},0)

console.log(priceToPay);