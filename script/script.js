console.log(document);

function getElementById(id) {
  const element = document.getElementById(id);
  return element;
}

function getElementsByClassName(className) {
  const element = document.getElementsByClassName(className);
  return element;
}

//Event delegation
getElementById("service-box").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-call")) {
    // alert('card-clicked')
    const serviceButton = e.target;

    const serviceTitle =
      serviceButton.parentNode.parentNode.children[1].children[0].innerText;
    const serviceCall =
      serviceButton.parentNode.parentNode.children[2].children[0].innerText;
    const time = {
      date: new Date().toLocaleTimeString(),
      // console.log(time);
    };

    //Coin Count
    let coinCount = getElementById("coin-count");
    let coinCountNum = coinCount.innerText;

    let newCoinCountNum = coinCountNum - 20;

    if (newCoinCountNum < 0) {
      alert("you don't have enough coin to make call ,you need 20 coin");
      return;
    } else {
      alert("Calling" + " " + serviceTitle + " " + serviceCall + "....");
    }
    coinCount.innerText = newCoinCountNum;

    const newHistoryContainer = getElementById("service-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
                    <div class="bg-white shadow-lg rounded-xl p-2 flex gap-4">
                        <div>
                            <h1 class="font-semibold text-[14px]">${serviceTitle}</h1>
                            <h1 class="font-semibold text-gray-500 text-[14px] mt-1">${serviceCall}</h1>
                        </div>
                       <div class="timeOFCall">
               <p class="time text-[#111111] text-[14px] hind-madurai-font">${time.date}</p>
             </div>
                    </div>
             
    `;
    newHistoryContainer.append(newHistory);
  }
});

document.getElementById("btn-clear").addEventListener("click", function () {
  const cardContainer = getElementById("service-container");
  cardContainer.innerHTML = "";

  //heart & copy count
  // getElementById('heart-count').innerText = 0;
  // getElementById('copyCount').innerText = 0;
});

//heart count
let hearts = getElementsByClassName("heartClass");

for (let heart of hearts) {
  heart.addEventListener("click", function (e) {
    e.preventDefault();

    let heartCount = Number(getElementById("heart-count").innerText);
    getElementById("heart-count").innerText = heartCount + 1;
  });
}

//Copy count
let copyCount = getElementsByClassName("copy-btn");

for (let copy of copyCount) {
  copy.addEventListener("click", function (e) {
    e.preventDefault();

    let copyCountNum = parseInt(getElementById("copyCount").innerText);
    getElementById("copyCount").innerText = copyCountNum + 1 + " " + "Copy";
  });
}
