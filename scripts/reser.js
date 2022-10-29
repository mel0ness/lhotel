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
const adultNumber = document.getElementById('nombreA');

const priceA = 68;
const priceB = 77;
const priceC = 85;
const priceD = 92;

const priceAPlus = 73;
const priceBPlus = 82;
const priceCPlus = 89;
const priceDPlus = 97;


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

let diffNightsPlus = (Date.parse(dateTwo) - Date.parse('2023-01-02'))/(1000 * 3600 * 24);
let diffNightsMoins = (Date.parse('2022-12-19') - Date.parse(dateOne))/(1000 * 3600 * 24);
let diffNightsInter = (Date.parse('2023-01-02') - Date.parse('2022-12-19'))/(1000 * 3600 * 24);
let diffNightsMid = (Date.parse('2023-01-02') - Date.parse(dateOne))/(1000 * 3600 * 24);
let diffNightsInterMoins = (Date.parse(dateTwo) - Date.parse('2022-12-19'))/(1000 * 3600 * 24);

//____________

dateArrival.addEventListener("change", () => {
     dateDeparture.setAttribute('value', dateArrival.value);
     dateDeparture.setAttribute('min', dateArrival.value);

     dateOne = new Date(document.getElementById('date').value).toISOString().split('T')[0];
     dateTwo = new Date(document.getElementById('date2').value).toISOString().split('T')[0];

     diffNights = (Date.parse(dateTwo) - Date.parse(dateOne))/(1000 * 3600 * 24);
     diffNightsPlus = (Date.parse(dateTwo) - Date.parse('2023-01-02'))/(1000 * 3600 * 24);
     diffNightsMoins = (Date.parse('2022-12-19') - Date.parse(dateOne))/(1000 * 3600 * 24);
diffNightsInter = (Date.parse('2023-01-02') - Date.parse('2022-12-19'))/(1000 * 3600 * 24);
diffNightsMid = (Date.parse('2023-01-02') - Date.parse(dateOne))/(1000 * 3600 * 24);
diffNightsInterMoins = (Date.parse(dateTwo) - Date.parse('2022-12-19'))/(1000 * 3600 * 24);

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
     diffNightsPlus = (Date.parse(dateTwo) - Date.parse('2023-01-02'))/(1000 * 3600 * 24);
     diffNightsMoins = (Date.parse('2022-12-19') - Date.parse(dateOne))/(1000 * 3600 * 24);
diffNightsInter = (Date.parse('2023-01-02') - Date.parse('2022-12-19'))/(1000 * 3600 * 24);
diffNightsMid = (Date.parse('2023-01-02') - Date.parse(dateOne))/(1000 * 3600 * 24);
diffNightsInterMoins = (Date.parse(dateTwo) - Date.parse('2022-12-19'))/(1000 * 3600 * 24);
if(diffNights > 0) {
     numberNights.textContent = diffNights;
     tarifS();}
     else if(diffNights <= 0) {
         numberNights.textContent = 0;
         price = 0;
         totalPrice.textContent = price;

     }

     

})

adultNumber.addEventListener("change", () => {
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
     if( Date.parse(dateTwo) > 1672617600000 && Date.parse(dateOne) < 1672617600000 && Date.parse(dateOne) > 1671408000000) {
          if(roomOne.checked) {
               price = ((diffNightsPlus * priceA) + (diffNightsMid * priceAPlus) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomTwo.checked) {
               price = ((diffNightsPlus * priceB) + (diffNightsMid * priceBPlus) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomThree.checked) {
               price = ((diffNightsPlus * priceC) + (diffNightsMid * priceCPlus) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomFour.checked) {
               price = ((diffNightsPlus * priceD) + (diffNightsMid * priceDPlus) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          
          totalPrice.textContent = price;}
     else if( Date.parse(dateTwo) < 1672617600000 && Date.parse(dateTwo) > 1671408000000 && Date.parse(dateOne) < 1671408000000) {
          if(roomOne.checked) {
               price = ((diffNightsInterMoins * priceAPlus) + (diffNightsMoins * priceA) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomTwo.checked) {
               price = ((diffNightsInterMoins * priceBPlus) + (diffNightsMoins * priceB) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomThree.checked) {
               price = ((diffNightsInterMoins * priceCPlus) + (diffNightsMoins * priceC) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomFour.checked) {
               price = ((diffNightsInterMoins * priceDPlus) + (diffNightsMoins * priceD) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          
          totalPrice.textContent = price;
     }     
     else if( Date.parse(dateTwo) > 1672617600000 && Date.parse(dateOne) < 1671408000000 ){
          if(roomOne.checked) {
               price = ((diffNightsPlus * priceA) + (diffNightsInter * priceAPlus) + (diffNightsMoins * priceA) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomTwo.checked) {
               price = ((diffNightsPlus * priceB) + (diffNightsInter * priceBPlus) +  (diffNightsMoins * priceB) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomThree.checked) {
               price = ((diffNightsPlus * priceC) + (diffNightsInter * priceCPlus) +  (diffNightsMoins * priceC) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomFour.checked) {
               price = ((diffNightsPlus * priceD) + (diffNightsInter * priceDPlus) +  (diffNightsMoins * priceD) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          totalPrice.textContent = price;
     }
     else if ( Date.parse(dateTwo) < 1672617600000 && Date.parse(dateTwo) > 1671408000000 && Date.parse(dateOne) < 1672617600000 && Date.parse(dateOne) > 1671408000000) {
          if(roomOne.checked) {
               price = ((diffNights * priceAPlus) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomTwo.checked) {
               price = ((diffNights * priceBPlus) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomThree.checked) {
               price = ((diffNights * priceCPlus) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomFour.checked) {
               price = ((diffNights * priceDPlus) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          
          totalPrice.textContent = price;
     }
     else {
          if(roomOne.checked) {
               price = ((diffNights * priceA) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomTwo.checked) {
               price = ((diffNights * priceB) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomThree.checked) {
               price = ((diffNights * priceC) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          else if(roomFour.checked) {
               price = ((diffNights * priceD) + (adultNumber.value * 0.8 * diffNights)).toFixed(2);
          }
          
          totalPrice.textContent = price;   
     }
}     