
// 1,2
const product="pen";
// const keyFee="fee";
// const keyCount="count"
const valueFee=1000;
const valueCount=30;
const obj={ shop: {book: {fee:2000 , count:20 }, 
                  [product] :{ fee : valueFee , count : valueCount }}};
console.log(obj)

//3,4
let shoppingCart;
const {shop:{pen}}=obj
console.log(pen)
if(pen.fee < 1 || pen.count < 1 )
{
    console.log("The product is not available.");
}
else{
    shoppingCart={pen};
    console.log(shoppingCart)
}

//4

if("pen" in shoppingCart === true)
{
    console.log("The pen is in your shopping cart.")
}
else{
    console.log("The pen is not in your shopping cart.")
}
if("book" in shoppingCart === true)
{
    console.log("The book is in your shopping cart.")
}
else{
    console.log("The book is not in your shopping cart.")
}

