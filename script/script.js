console.log(document);

function getElementById(id) {
  const element = document.getElementById(id);
  return element;
}
//event add korar system

//যেখানে ক্লিক হবে সেটাকে ধরে নিয়ে আসতে হবে।
//ইভেন্ট অ্যাড করতে হবে।
//ফাংশন লেখতে হবে।

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
    };
    // console.log(time);

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
});
