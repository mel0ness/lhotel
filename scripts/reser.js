let dateArrival = document.getElementById('date');
let dateDeparture = document.getElementById('date2');
let numberNights = document.getElementById('numberNightsTotal');

//_________
let price = "0"
const roomOne = document.getElementById('type_1');
const roomTwo = document.getElementById('type_2');
const roomThree = document.getElementById('type_3');
const roomFour = document.getElementById('type_4');
let totalPrice = document.getElementById('price');
const changes = document.querySelectorAll('.changes');
const changesC = document.getElementById('chambreCover');

const priceA = 68;
const priceB = 77;
const priceC = 85;
const priceD = 92;

const priceAPlus = 73;
const priceBPlus = 82;
const priceCPlus = 89;
const priceDPlus = 97;
const datePOne = Date.parse('2022-12-19');
const datePTwo = Date.parse('2023-01-02');


//_________
let today = new Date().toISOString().split('T')[0];

dateArrival.setAttribute('min', today);
dateArrival.setAttribute('value', today);
dateDeparture.setAttribute('min', dateArrival.value);
dateDeparture.setAttribute('value', dateArrival.value);



let dateOne = new Date(document.getElementById('date').value).toISOString().split('T')[0];
let dateTwo = new Date(document.getElementById('date2').value).toISOString().split('T')[0];
let diffNights = (Date.parse(dateTwo) - Date.parse(dateOne))/(1000 * 3600 * 24);

//____________ Périodes plus chères

let diffNightsPlus = (Date.parse(dateTwo) - datePTwo)/(1000 * 3600 * 24);
let diffNightsMoins = (datePOne - Date.parse(dateOne))/(1000 * 3600 * 24);
let diffNightsInter = (datePTwo - datePOne)/(1000 * 3600 * 24);
let diffNightsMid = (datePTwo - Date.parse(dateOne))/(1000 * 3600 * 24);
let diffNightsInterMoins = (Date.parse(dateTwo) - datePOne)/(1000 * 3600 * 24);



//____________

dateArrival.addEventListener("change", () => {
     dateDeparture.setAttribute('value', dateArrival.value);
     dateDeparture.setAttribute('min', dateArrival.value);

     dateOne = new Date(document.getElementById('date').value).toISOString().split('T')[0];
     dateTwo = new Date(document.getElementById('date2').value).toISOString().split('T')[0];

     diffNights = (Date.parse(dateTwo) - Date.parse(dateOne))/(1000 * 3600 * 24);
     diffNightsPlus = (Date.parse(dateTwo) - datePTwo)/(1000 * 3600 * 24);
 diffNightsMoins = (datePOne - Date.parse(dateOne))/(1000 * 3600 * 24);
     diffNightsInter = (datePTwo - datePOne)/(1000 * 3600 * 24);
     diffNightsMid = (datePTwo - Date.parse(dateOne))/(1000 * 3600 * 24);
     diffNightsInterMoins = (Date.parse(dateTwo) - datePOne)/(1000 * 3600 * 24);
     if(diffNights > 0) {
 numberNights.textContent = diffNights;
 tarifS();}
 else if(diffNights <= 0) {
     numberNights.textContent = 0;
     price = 0;
     totalPrice.textContent = price;
 }

     

})

dateDeparture.addEventListener("change", () => {
     dateTwo = new Date(document.getElementById('date2').value).toISOString().split('T')[0];
     diffNights = (Date.parse(dateTwo) - Date.parse(dateOne))/(1000 * 3600 * 24);
     diffNightsPlus = (Date.parse(dateTwo) - datePTwo)/(1000 * 3600 * 24);
 diffNightsMoins = (datePOne - Date.parse(dateOne))/(1000 * 3600 * 24);
     diffNightsInter = (datePTwo - datePOne)/(1000 * 3600 * 24);
     diffNightsMid = (datePTwo - Date.parse(dateOne))/(1000 * 3600 * 24);
     diffNightsInterMoins = (Date.parse(dateTwo) - datePOne)/(1000 * 3600 * 24);
if(diffNights > 0) {
     numberNights.textContent = diffNights;
     tarifS();}
     else if(diffNights <= 0) {
         numberNights.textContent = 0;
         price = 0;
         totalPrice.textContent = price;

     }

     

})

changesC.addEventListener("click", () => {
     if(diffNights > 0) {
          numberNights.textContent = diffNights;
          tarifS();}
          else if(diffNights <= 0) {
              numberNights.textContent = 0;
              price = 0;
              totalPrice.textContent = price;
          }
     })

const tarifS = () => {
     if( Date.parse(dateTwo) > datePTwo && Date.parse(dateOne) <= datePTwo && Date.parse(dateOne) >= datePOne) {
          if(roomOne.checked) {
               price = ((diffNightsPlus * priceA) + (diffNightsMid * priceAPlus)).toFixed(2);
          }
          else if(roomTwo.checked) {
               price = ((diffNightsPlus * priceB) + (diffNightsMid * priceBPlus)).toFixed(2);
          }
          else if(roomThree.checked) {
               price = ((diffNightsPlus * priceC) + (diffNightsMid * priceCPlus)).toFixed(2);
          }
          else if(roomFour.checked) {
               price = ((diffNightsPlus * priceD) + (diffNightsMid * priceDPlus)).toFixed(2);
          }
          
          totalPrice.textContent = price;}
     else if( Date.parse(dateTwo) <= datePTwo && Date.parse(dateTwo) >= datePOne && Date.parse(dateOne) < datePOne) {
          if(roomOne.checked) {
               price = ((diffNightsInterMoins * priceAPlus) + (diffNightsMoins * priceA)).toFixed(2);
          }
          else if(roomTwo.checked) {
               price = ((diffNightsInterMoins * priceBPlus) + (diffNightsMoins * priceB)).toFixed(2);
          }
          else if(roomThree.checked) {
               price = ((diffNightsInterMoins * priceCPlus) + (diffNightsMoins * priceC)).toFixed(2);
          }
          else if(roomFour.checked) {
               price = ((diffNightsInterMoins * priceDPlus) + (diffNightsMoins * priceD)).toFixed(2);
          }
          
          totalPrice.textContent = price;
     }     
     else if( Date.parse(dateTwo) > datePTwo && Date.parse(dateOne) < datePOne ){
          if(roomOne.checked) {
               price = ((diffNightsPlus * priceA) + (diffNightsInter * priceAPlus) + (diffNightsMoins * priceA)).toFixed(2);
          }
          else if(roomTwo.checked) {
               price = ((diffNightsPlus * priceB) + (diffNightsInter * priceBPlus) +  (diffNightsMoins * priceB)).toFixed(2);
          }
          else if(roomThree.checked) {
               price = ((diffNightsPlus * priceC) + (diffNightsInter * priceCPlus) +  (diffNightsMoins * priceC)).toFixed(2);
          }
          else if(roomFour.checked) {
               price = ((diffNightsPlus * priceD) + (diffNightsInter * priceDPlus) +  (diffNightsMoins * priceD)).toFixed(2);
          }
          totalPrice.textContent = price;
     }
     else if ( Date.parse(dateTwo) <= datePTwo && Date.parse(dateTwo) >= datePOne && Date.parse(dateOne) <= datePTwo && Date.parse(dateOne) >= datePOne) {
          if(roomOne.checked) {
               price = ((diffNights * priceAPlus)).toFixed(2);
          }
          else if(roomTwo.checked) {
               price = ((diffNights * priceBPlus)).toFixed(2);
          }
          else if(roomThree.checked) {
               price = ((diffNights * priceCPlus)).toFixed(2);
          }
          else if(roomFour.checked) {
               price = ((diffNights * priceDPlus)).toFixed(2);
          }
          
          totalPrice.textContent = price;
     }
     else {
          if(roomOne.checked) {
               price = ((diffNights * priceA)).toFixed(2);
          }
          else if(roomTwo.checked) {
               price = ((diffNights * priceB)).toFixed(2);
          }
          else if(roomThree.checked) {
               price = ((diffNights * priceC)).toFixed(2);
          }
          else if(roomFour.checked) {
               price = ((diffNights * priceD)).toFixed(2);
          }
          
          totalPrice.textContent = price;   
     }
}     