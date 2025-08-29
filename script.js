

// traverse techniques
// 1. Query Selector
// 2. Closest
// 3. Previous Element Sibling
// 4. Next Element Sibling
// 5. Parent Element
// 6. Next Element Sibling
// 7. Previous Element Sibling
// 8. First Child
// 9. Last Child
// 10. Child Nodes


//heart click count
const hearts = document.getElementsByClassName("heart-btn");
const counterElement = document.getElementById("likes-count");
let countClicks = Number(counterElement?.textContent) || 0;

for (let heart of hearts) {
    heart.addEventListener("click", function(e) {
        e.preventDefault();

        countClicks += 1;
        counterElement.textContent = countClicks;


        // to image
        const icon = heart.querySelector(".heart-icon");
        if (icon) icon.innerHTML = '<img src="assets/heart.png" alt="liked" class="h-10 w-10">';
        // make it look active
        heart.classList.remove("text-gray-600");
        heart.classList.add("bg-rose-50");
        // pop
        heart.animate(
            [{ transform: "scale(1)" }, { transform: "scale(1.3)" }, { transform: "scale(1)" }],
            { easing: "ease-out", duration: 170 }
        );
    });
}


//copy button click
const copyBtns = document.getElementsByClassName("copy-btn");
const copyCountEl = document.getElementById("copy-count");
let copyCount = Number(copyCountEl?.textContent) || 0;

// helper: copy to clipboard (with fallback for non-HTTPS)
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}

for (let copyButton of copyBtns) {
    copyButton.addEventListener("click", function (e) {
        e.preventDefault();

        copyCount += 1;
        copyCountEl.textContent = copyCount;

        // Get service name and number
        const serviceNameByCopy = copyButton.parentNode.parentNode.children[1].innerText;
        const serviceNumberByCopy = copyButton.parentNode.parentNode.children[3].innerText;
        console.log(serviceNameByCopy);
        console.log(serviceNumberByCopy);

        // alert / proceed with copying
        alert(`📞 Copying ${serviceNameByCopy} (${serviceNumberByCopy})`);

        // do the copy
        copyToClipboard(serviceNumberByCopy);

        
    });
}

       

//call buttons click
const callBtns = document.getElementsByClassName("call-btn");
// console.log(callBtns);

for (let callButton of callBtns) {
    callButton.addEventListener("click", function (e) {
        e.preventDefault(); // stop <a href="#"> jump / tel: navigate until after we log

        // Get service name and number
        const serviceName = callButton.parentNode.parentNode.childNodes[3].innerText;
        const serviceNumber = callButton.parentNode.parentNode.children[3].innerText;
        console.log(serviceName);
        console.log(serviceNumber);

        // alert / proceed with call
        alert(`📞 Calling ${serviceName} at ${serviceNumber}`);

        // helpers for coins (expects <span id="coins-count">100</span> in navbar)
        const coinsEl = document.getElementById("coins-count");
        function getCoins() {
            return parseInt(coinsEl?.textContent || "0", 10);
        }
        function setCoins(n) {
            if (coinsEl) coinsEl.textContent = String(n);
        }

        // check & deduct coins FIRST
        const coins = getCoins();
        if (coins < 20) {
            alert("You don't have enough coins. You need 20 coins per call.");
            return;
        }
        setCoins(coins - 20);

        

        // Add to call history
        const callHistory = document.getElementById("call-history-list");
        const newEntry = document.createElement("li");
        newEntry.className = "flex items-center justify-between shadow-sm ring-1 ring-gray-200 rounded-lg bg-gray-50 p-3 font-['Inter']";
        newEntry.innerHTML = `
            <div>
                <div 
                    class="font-semibold text-[18px]" 
                    style="font-family: 'Inter', sans-serif; font-weight: 600; font-size: 18px; color: rgba(17, 17, 17, 1); line-height: normal;">
                    ${serviceName}
                </div>
                <div 
                    class="mt-1 font-normal" 
                    style="font-family: 'Hind Madurai', sans-serif; font-size: 18px; color: rgba(92, 92, 92, 1); line-height: normal;">
                    ${serviceNumber}
                </div>
            </div>
            <div 
                class="text-[rgba(17, 17, 17, 1)]" 
                style="font-family: 'hind madurai', sans-serif; font-size: 18px; color: rgba(17, 17, 17, 1); line-height: normal;">
                ${new Date().toLocaleTimeString()}
            </div>
        `;
        callHistory.append(newEntry);
    });
}

const clearBtn = document.getElementById("clear-history");
const historyList = document.getElementById("call-history-list");

clearBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
    alert("Call history cleared.");
});















