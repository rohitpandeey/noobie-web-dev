// //FOREACH
// const codingLanguages = ['JavaScript', 'Python', 'Ruby', 'Java', 'C#'];

// const value= codingLanguages.forEach((item) => {
//   return item;
// });

// console.log(value); //undefined
// //for each method does not return anything, it just iterates over the array and performs the operation on each element.

//FILTER 
// const  myNum=[1,2,3,4,5,6,7,8,9,10];
// const newNum= myNum.filter((num)=>{
//    return num>5
//   })
// console.log(newNum); //[ 6, 7, 8, 9, 10 ]


// // same thing can be done using forEach with some logic
// const no=[1,2,3,4,5,6,7,8,9,10];
// const newNo= []
// no.forEach((num)=>{
//   if(num>5){
//     newNo.push(num)
//   }
// })
// console.log(newNo); //[ 6, 7, 8, 9, 10 ]



const books=[
  {title:'The Alchemist',genre: 'Adventure',publish:1988},
  {title:'The Da Vinci Code',genre: 'Mystery',publish:2003},
  {title:'The Hobbit',genre: 'Fantasy',publish:1937},
  {title:'The Catcher in the Rye',genre: 'Fiction',publish:1951},
  {title:'The Great Gatsby',genre: 'Fiction',publish:1925},
  {title:'To Kill a Mockingbird',genre: 'Fiction',publish:1960},
  {title:'The Lord of the Rings',genre: 'Fantasy',publish:1954},
  {title:'The Shining',genre: 'Horror',publish:1977},
  {title:'The, Stand',genre: 'Horror',publish:197}
];

const userBook=books.filter((bk)=>{ return bk.genre==='Fiction'
  
})
console.log(userBook); 
// output - [ { title: 'The Catcher in the Rye', genre: 'Fiction', publish: 1951 }, { title: 'The Great Gatsby', genre: 'Fiction', publish: 1925 }, { title: 'To Kill a Mockingbird', genre: 'Fiction', publish: 1960 } ]