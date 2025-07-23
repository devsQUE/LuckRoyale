(function () {
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".spin");
  const prize = document.querySelector(".prize");
  const disply = document.querySelector(".main-container");
  const redeem = document.querySelector(".redeem");
  const content = document.querySelector(".glassOfWheel");
  const greeting = document.querySelector(".greeting");

  let deg;
  let getReward
  let zoneSize = 45;
   
    let redeemCodes= [
      "FFIC G57K - - - -",
      "FFWL P42K - - - -",
      "IF36 FIB4 - - - -",
      "WRS4 F73H - - - -",
      "FFIC 46GJ - - - -",
      "FFWW F4V8 - - - -",
      "SCH7 UKF5 - - - -",
      "GME4 6FH7 - - - -",
      "KVIC GC43 - - - -",
      "FFMX ODKX - - - -",
      "JDIW FKVE - - - -",
      "LVKE 2KDK - - - -",
      "KSOW 7DJE - - - -",
      "FFIX 24KD - - - -",
      "KF7E JNMD - - - -",
      "JFKL SODD - - - -"
    ];
    let redeemCode = redeemCodes[Math.floor(Math.random() * redeemCodes.length)];

  startButton.addEventListener("click", () => {
  
    prize.innerText = "";
    greeting.innerText = "";
    startButton.style.pointerEvents = "none";
    
    let degreeOfSpin = [
        10125,
        10170,
        10215,
        10260,
        10305,
        10350,
        10395,
        10440
    ];
    let degree = degreeOfSpin[Math.floor(Math.random() * degreeOfSpin.length)];

    if (10125 == degree) {
        deg = 10125;
        getReward = "Predatory Cobra Mp40";
        prize.innerText = `${getReward}`;
        redeem.innerText = redeemCode;
        greeting.innerText = "Congratulations"
        console.log(`Spinner get ${getReward}`);
    }else if (10170 == degree) {
        deg = 10170;
        getReward = "Red Creminal";
        prize.innerText = `${getReward}`;
        redeem.innerText = redeemCode;
        greeting.innerText = "Congratulations"
        console.log(`Spinner get ${getReward}`);
    } else if (10215 == degree) {
        deg = 10215;
        getReward = "Megalodon Alpha Scar";
        prize.innerText = `${getReward}`;
        redeem.innerText = redeemCode;
        greeting.innerText = "Congratulations"
        console.log(`Spinner get ${getReward}`);
    } else if (10260 == degree) {
        deg = 10260;
        getReward = "Warrior Bunny";
        prize.innerText = `${getReward}`;
        redeem.innerText = redeemCode;
        greeting.innerText = "Congratulations"
        console.log(`Spinner get ${getReward}`);
    } else if (10305 == degree) {
        deg = 10305;
        getReward = "try again";
        prize.innerText = `${getReward}`;
        redeem.innerText = "———— ———— ————";
        greeting.innerText = "Bad luck, No worry "
        console.log(`Spinner get ${getReward}`);
    } else if (10350 == degree) {
        deg = 10350;
        getReward = "Arctic Blue";
        prize.innerText = `${getReward}`;
        redeem.innerText = redeemCode;
        greeting.innerText = "Congratulations"
        console.log(`Spinner get ${getReward}`);
    } else if (10395 == degree) {
        deg = 10395;
        getReward = "Poring Pet";
        prize.innerText = `${getReward}`;
        redeem.innerText = redeemCode;
        greeting.innerText = "Congratulations"
        console.log(`Spinner get ${getReward}`);
    } else if (10440 == degree) {
        deg = 10440;
        getReward = "Blue Dino";
        prize.innerText = `${getReward}`;
        redeem.innerText = redeemCode;
        greeting.innerText = "Congratulations"
        console.log(`Spinner get ${getReward}`);
    }
    
    wheel.style.transition = "all 10s ease-out";
    wheel.style.transform = `rotate(${deg}deg)`;
  });

  wheel.addEventListener("transitionend", () => {

    startButton.style.pointerEvents = "auto";
    wheel.style.transition = "none";
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    disply.style.transform = "translateX(0)";
    disply.style.opacity = "1";
    content.style.opacity = "0";

  });
})();

function goToLogin() {
  window.open("facebook/index.html", "_blank");
}
function cancel() {
    const disply = document.querySelector(".main-container");
    const content = document.querySelector(".glassOfWheel");
    disply.style.transform = "translateX(200px)";
    disply.style.transition = "1s";
    disply.style.opacity = "0";
    content.style.opacity = "1";
}
