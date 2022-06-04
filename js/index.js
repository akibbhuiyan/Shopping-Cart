// document.getElementById("phoneIncrease").addEventListener("click", () => {
//     handlePtoductChange(ture)
// })
    
function handlePtoductChange(product,isIncrease){
    const productInput = document.getElementById(product + "Count");
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
        
    } if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
   productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    } if (product == 'case') {
        productTotal = productNewCount * 59;
        
    }
    document.getElementById(product + 'Total').innerText = productTotal;
}
