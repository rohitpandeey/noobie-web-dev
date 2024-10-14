const basket1Count=document.querySelector('.basket-1 span');
const basket2Count=document.querySelector('.basket-2 span');
const leftArrow=document.querySelector('.left-arrow');
const rightArrow=document.querySelector('.right-arrow');

const totalApples = 10;
let secondBasketApples = 0;
let firstBasketApples = totalApples-secondBasketApples;


basket1Count.innerText = firstBasketApples;
basket2Count.innerText = secondBasketApples;

rightArrow.addEventListener('click',()=>{

    if (firstBasketApples >0){
     
        secondBasketApples++;
        firstBasketApples--;

        basket1Count.innerText=firstBasketApples;
        basket2Count.innerText=secondBasketApples;


}})


leftArrow.addEventListener('click',()=>{
    if(secondBasketApples>0){
        secondBasketApples--;
        firstBasketApples++;

        basket1Count.innerText=firstBasketApples;
        basket2Count.innerText=secondBasketApples;

    }
})