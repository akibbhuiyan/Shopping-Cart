// const minusBtn = document.getElementById('minusBtn');
// const mynumber = 1;
// let iphoneRate = document.getElementById('iphoneRate').innerText;
// let subTotal = document.getElementById('subTotal').innerText;
// let total = document.getElementById('total').innerText;
// minusBtn.addEventListener("click", () => {
//     updateInput('iphoneCount', -1 * mynumber)
//     iphoneCurrent()
//     subTotalAdd('iphoneRate')

//     totalAdd('iphoneRate')
    

// })

// const plusBtn = document.getElementById('plusBtn');

// plusBtn.addEventListener("click", () => {
//     updateInput('iphoneCount', mynumber);
//     iphoneCurrent()
//     subTotalAdd('iphoneRate');
//     totalAdd('iphoneRate')
// })
// const coverminusBtn = document.getElementById('coverminusBtn');
// const coverplusBtn = document.getElementById('coverplusBtn');

// coverminusBtn.addEventListener("click", () => {
//     updateInput('coverCount', -1 * mynumber)
//     CoverCurrent()

//     subTotalAdd('iphoneRate')

//     totalAdd('iphoneRate')
    

// }) 

// coverplusBtn.addEventListener("click", () => {
//     updateInput('coverCount', mynumber);
//     CoverCurrent()
//     subTotalAdd('iphoneRate');
//     totalAdd('iphoneRate')
// })
// function iphoneCurrent() {
//     const iphoneSelected = iphoneCount.value;
//     document.getElementById('iphoneRate').innerText = 1219 * iphoneSelected;
// }
// function CoverCurrent() {
//     const iphoneSelected = coverCount.value;
//     document.getElementById('coverRate').innerText = 59 * iphoneSelected;
// }
// function updateInput(id,mynumber) {
//     const iphoneCount = document.getElementById(id).value;
//     const countNum = parseFloat(iphoneCount);
//     document.getElementById(id).value = countNum + mynumber;
    
// }
// function subTotalAdd(id) {
//     const iphonePriceNumber = getAmmount(id);

//     document.getElementById('subTotal').innerText = iphonePriceNumber + getAmmount('coverRate');
    
// }
// function totalAdd(id) {
//     const iphonePriceNumber = getAmmount(id);
//     document.getElementById('total').innerText = iphonePriceNumber + getAmmount('coverRate');

// }
// function getAmmount(id) {
//     const rate = document.getElementById(id).innerText;
//     const rateNumber = parseFloat(rate);
//     return rateNumber;
// }
