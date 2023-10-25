var sideBar = document.getElementsByClassName('sideBar')[0];
var ProductHer = document.getElementsByClassName ('ProductHer')[0];
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
if (subtotal) {
    subtotal.textContent = totalValue.textContent;

}
function Add(){
    
    counter++;
    if (orderpage_productCount) {
        orderpage_productCount.textContent = counter;

    }

    totalValue.textContent = result+((counter-1)*parseInt(sideBarPrice[0].textContent));
    totalOrderpage.textContent = totalValue.textContent;
    console.log(counter);
    NumberCount.textContent = counter;
    navCounterSHow.textContent = counter+1;
}
function Minus(){

    counter--;
    if (orderpage_productCount){
        orderpage_productCount.textContent = counter;

    }
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

var addProductButtonClicked = document.getElementsByClassName("addProduct_to_SideBar")[0];
if (addProductButtonClicked) {
    addProductButtonClicked.addEventListener('click',addProduct);

}
var SideBarDetailsmainstuf = document.getElementsByClassName("SideBar-detailsmainstuf")[1];

function addProduct() {

    var productMainDiv = document.createElement("div");
    productMainDiv.className = "productMainDiv";
    var img = document.createElement("img");
    img.src = "KeyboardProduct.png";
    img.className = "ProductNodots_js";
    productMainDiv.appendChild(img);

    var productMidDiv = document.createElement("div");
    productMidDiv.className = "productMidDiv";
    productMidDiv.innerHTML = '<p class="selectaVariant">Product Name</p> <p class="SideBar-Price">Product desc</p> <div class="plus1minus">                            <button class="MinusButton">                                <img src="minus.png" alt="plus sign" width="26px" height="26px">                            </button>                                                        <p class="ProductCount">1</p>                            <button class="PlusButton">                                <img src="plus.png" alt="minus sign" width="26px" height="26px">                            </button>                                                    </div>';

    productMainDiv.appendChild(productMidDiv);
    ProductHer.insertBefore(productMainDiv,SideBarDetailsmainstuf.nextSibling);
    // ProductHer.appendChild(productMainDiv);
}

var filter = document.getElementsByClassName('filter')[0];
var accesoriesGRP = document.getElementsByClassName('accesoriesgrp')[0];
function showaccesories (){
    if (accesoriesGRP.style.display=='none'){
        accesoriesGRP.style.display='flex';
    }
    else {accesoriesGRP.style.display='none';}
    
}
filter?.addEventListener('click',showaccesories);


///filter list

var filterlist = document.getElementsByClassName("FilterList")[0];
var Producttags =  document.getElementsByClassName("Producttags")[0];

function HideProducttags() {
    console.log("hey");
    if (Producttags.style.display=='flex'){
        console.log("heeeeey1");
        Producttags.style.display='none';
    }
    else{
        console.log("heeeeey");
        Producttags.style.display='flex';
    }
}
filterlist?.addEventListener('click',HideProducttags);

//////////contatc with regax
var contact= document.getElementsByClassName('contact-box')[0];
var submit = document.getElementsByClassName("submit")[0];
var fullName = document.getElementsByClassName("FullNamebox")[0];
var email = document.getElementsByClassName("Emailbox")[0];
var message = document.getElementsByClassName("Messagebox")[0];

const ourRegax = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
contact.addEventListener('submit',checker);
function checker(event) {
    event.preventDefault();
    if (ourRegax.test(email.value)) {
        alert("eyyyy");
    } else {
        alert("noooo");
    }
}


//////////contact not regax

// function wachbse7 (e){
//     e.preventDefault();
//     console.log('ssss');
    
//     if (fullName.value === ""|| email.value === ""|| message.value=== "") {
//         alert("Ta la mat7m9nich,D5al m3lomat.");
//         console.log('zzzzzz');
//     }
//     else if (email.value) {

//     }
// }
// submit.addEventListener('click',wachbse7);

