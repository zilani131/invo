document.getElementById('detail-submit-btn').addEventListener('click',function(){
    const textAreaInput=document.getElementById('text-area-input')
    const textAreaValue=textAreaInput.value;
    const buyerInfo=document.getElementById('buyer-info')
    buyerInfo.innerText=textAreaValue;
})
// real time date


// add details button
let count=0
document.getElementById('add-details-btn').addEventListener('click',function(){
    
    const itemPrice=document.getElementById('item-price-input')
    const itemQuantity=document.getElementById('item-quantity-input')
    const total=parseFloat(itemPrice.value)*parseFloat(itemQuantity.value)
    
   if(parseFloat(itemPrice.value)>0 && parseFloat(itemQuantity.value)>0){

count=count+1
const tableInfo=document.getElementById('info-table')
const tr=document.createElement('tr')
// it can be done two way first one is commented from 29 to 41
// const th=document.createElement('th')
// th.innerText=count
// tr.appendChild(th)

// const td2=document.createElement('td')
// td2.innerText=itemPrice.value
// tr.appendChild(td2)
// const td3=document.createElement('td')
// td3.innerText=itemQuantity.value
// tr.appendChild(td3)
// const td4=document.createElement('td')
// td4.innerText=total
// tr.appendChild(td4)
tr.innerHTML=`<th >${count}</th>

<td>${itemPrice.value}</td>
<td>${itemQuantity.value}</td>
<td class="total-element" id="total-price">${total}</td>`
tableInfo.appendChild(tr)
totalCalculation();}
else{
    alert('give the valid input')
}

})
// total calcaulation
function totalCalculation(){
    const subTotal=document.getElementById('sub-total')
    subTotal.innerText=calcSubtotal()
    const tax=document.getElementById('tax')
    taxAmount=parseFloat(subTotal.innerText)*.2;
    tax.innerText=taxAmount.toFixed(2)
    document.getElementById('grand-total').innerText=parseFloat(tax.innerText)+parseFloat(subTotal.innerText)
    document.getElementById('grand-total-2').innerText=parseFloat(tax.innerText)+parseFloat(subTotal.innerText)

}
// subtotal calculation
function calcSubtotal(){
    
    let subtotalValue=0
    const element=document.getElementsByClassName('total-element')
   for(let i=0;i<element.length;i++)
   {
       subtotalValue=subtotalValue+parseFloat(element[i].innerText)

   }
  return subtotalValue
}
