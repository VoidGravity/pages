var sideBar = document.getElementsByClassName('sideBar')[0];
var CartbuttonPressed = document.getElementById('button-pressed');
var body = document.getElementsByTagName('body')[0];

var navlogo = document.getElementsByClassName('navlogo')[0];


var totalValue = document.getElementsByClassName('value')[0];
var sideBarPrice = document.getElementsByClassName('SideBar-Price');
var SideBarPriceOrigin = sideBarPrice[0].textContent;
var result=0;



function show() {

    for (var n = 0 ; n<sideBarPrice.length;n++) {
        result += parseInt(sideBarPrice[n].textContent);
    }
var computedSyles = window.getComputedStyle(sideBar);
var rightValue = computedSyles.getPropertyValue('right');
    if (rightValue==='-300px') {
        totalValue.textContent = result;
        navlogo.style.width = '25%';
        console.log('Toggle to open');
        sideBar.style.right = '0px';
        sideBar.style.backgroundColor = '#94A3B8';
        body.style['margin-right'] = '300px';

    } else if (sideBar.style.right === '0px') {
        result=0;
        navlogo.style.width = '45%';
        console.log('Toggle to close')  ;
        sideBar.style.right = '-300px';
        sideBar.style.backgroundColor = '#E2E8F0';
        body.style['margin-right'] = '0px';
    }
}
CartbuttonPressed.addEventListener('click', show);

var PlusButtonPressed = document.getElementsByClassName('PlusButton')[0];
var MinusButtonPressed = document.getElementsByClassName('MinusButton')[0];
var NumberCount = document.getElementsByClassName('ProductCount')[0];
var counter = 1;
var navCounterSHow = document.getElementsByClassName('Nav-numberCount')[0];


var AddtoCart= document.getElementsByClassName("AddToCardButtonEvent")[0];

function Added () {
counter++;
navCounterSHow.textContent = counter+1;
// totalOrderpage.textContent = (totalValue.textContent*counter)+parseInt(shippingFees.textContent);

}
if (AddtoCart) {
    AddtoCart.addEventListener('click',Added);
}
var subtotal = document.getElementsByClassName('subtotal_price') [0];
var orderpage_productCount = document.getElementsByClassName ('medtextsize')[0];
var totalOrderpage = document.getElementsByClassName('shiftedtex')[4];
var shippingFees = document.getElementsByClassName('FhipingFees')[0];
// totalOrderpage.textContent = (totalValue.textContent * orderpage_productCount.textContent)+parseInt(shippingFees.textContent);

subtotal.textContent = totalValue.textContent;
function Add(){
    
    counter++;
    orderpage_productCount.textContent = counter;

    totalValue.textContent = result+((counter-1)*parseInt(sideBarPrice[0].textContent));
    totalOrderpage.textContent = totalValue.textContent;
    console.log(counter);
    NumberCount.textContent = counter;
    navCounterSHow.textContent = counter+1;
}
function Minus(){

    counter--;
    orderpage_productCount.textContent = counter;
    console.log (orderpage_productCount.textContent);
    totalValue.textContent = result+((counter-1)*parseInt(sideBarPrice[0].textContent));

    if (counter<=0) {
        counter = 0;
    }
    totalOrderpage.textContent = totalValue.textContent;

    console.log(counter);
    NumberCount.textContent = counter;
    navCounterSHow.textContent = counter+1;

}

PlusButtonPressed.addEventListener('click',Add);
MinusButtonPressed.addEventListener('click',Minus);


var register_ref = document.getElementsByClassName('register')[0];
var img_burger = document.getElementsByClassName('burger_image')[0];
var burgger_clicked = document.getElementsByClassName('collaps-button')[0];

function colapse () {
    console.log("condition 0 met");

    if (register_ref.style.display=='flex') {
       console.log("condition 1 met");
       register_ref.style.display = 'none';
       img_burger.src = 'burger.png';
       

    }
    else {
        console.log("condition 2 met");
        register_ref.style.display = 'flex';
        img_burger.src = 'Opend_burger.png';
        
    }


}
if (burgger_clicked){
    burgger_clicked.addEventListener('click',colapse);
}



