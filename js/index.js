// document.getElementById("phoneIncrease").addEventListener("click", () => {
//     handlePtoductChange(ture)
// })
    
function handlePtoductChange(product,isIncrease){
    let productCount = getInputData(product)
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
        
    } if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
   document.getElementById(product + 'Count').value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;

    } if (product == 'case') {
        productTotal = productNewCount * 59;
       
    }
    document.getElementById(product + 'Total').innerText = productTotal;
    calculateTotal()
}
function calculateTotal() {
    const phoneCount = getInputData('phone')
    const caseCount = getInputData('case')

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subTotal').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grandTotal').innerText = grandTotal;
}



function getInputData(product) {
    const productInput = document.getElementById(product + 'Count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

// function handlePtoductChange(product,isIncrease){
//     const productInput = document.getElementById(product + "Count");
//     const productCount = parseInt(productInput.value);
//     let productNewCount = productCount;
//     if(isIncrease == true){
//         productNewCount = productCount + 1;
        
//     } if (isIncrease == false && productCount > 0) {
//         productNewCount = productCount - 1;
//     }
//    productInput.value = productNewCount;
//     let productTotal = 0;
//     if (product == 'phone') {
//         productTotal = productNewCount * 1219;
//     } if (product == 'case') {
//         productTotal = productNewCount * 59;
        
//     }
//     document.getElementById(product + 'Total').innerText = productTotal;
// }
