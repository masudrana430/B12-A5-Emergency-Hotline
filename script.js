
document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("likes-count");
    let countClicks = Number(counterElement?.textContent) || 0;

    // container that holds all cards
    const cardsContainer = document.querySelector(".service_item_left");
    if (!cardsContainer) return;

    cardsContainer.addEventListener("click", (e) => {
        const heart = e.target.closest(".heart-btn");
        if (!heart) return;

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

});






document.addEventListener("DOMContentLoaded", () => {
    const coinsElement = document.getElementById("coins-count");
    const grid = document.querySelector(".service_item_left");
    const historyList = document.getElementById("call-history-list");

    // read current coins like number
    const getCoins = () => parseInt(coinsElement.textContent.trim() || "0", 10);
    const setCoins = (n) => (coinsElement.textContent = String(n));

    // add to history
    function addToHistory(name, number) {
        if (!historyList) return;
        const li = document.createElement("li");
        li.className = "flex items-center justify-between rounded-lg bg-gray-50 p-3 font-['Inter']";
        li.innerHTML = `
      <div>
        <div 
        class="font-semibold text-[18px]" 
        style="font-family: 'Inter', sans-serif; font-weight: 600; font-size: 18px; color: rgba(17, 17, 17, 1); line-height: normal;">
        ${name}
        </div>

        <div 
        class=" mt-1 font-normal" 
        style="font-family: 'Hind Madurai', sans-serif; font-size: 18px; color: rgba(92, 92, 92, 1); line-height: normal;">
        ${number}
        </div>
      </div>
      
      <div 
      class=" text-[rgba(17, 17, 17, 1)]" 
      style="font-family: 'hind madurai', sans-serif; font-size: 18px; color: rgba(17, 17, 17, 1); line-height: normal;">
      ${new Date().toLocaleTimeString()}
      </div>
    `;
        historyList.insertBefore(li, historyList.firstChild);
    }

    // call buttons
    grid.addEventListener("click", (e) => {
        e.preventDefault();

        const callBtn = e.target.closest(".call-btn");
        if (!callBtn) return;
        // card, name, and number
        const card = callBtn.closest("article.card");
        const name = card.querySelector("h3")?.textContent.trim() || "Unknown Service";
        const number = card.querySelector(".service-number")?.textContent.trim() || "";

        // check coins
        const coins = getCoins();
        if (coins < 20) {
            alert("you have not enough coins to place a call. You need minimum 20 coins each call.");
            return;
        }
        // show alert with service name + number
        alert(`📞 Calling ${name} (${number})`);
        // deduct 20 coins and update UI
        setCoins(coins - 20);
        // add to call history
        addToHistory(name, number);
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const clearBtn = document.getElementById("clear-history");
    const historyList = document.getElementById("call-history-list");

    clearBtn.addEventListener("click", () => {
        historyList.innerHTML = "";
        alert("Call history cleared.");
    });
});







document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.querySelector(".service_item_left"); // all cards live here
    const copyCountEl = document.getElementById("copy-count");
    if (!cardsContainer) return;

    // copy text to clipboard 
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


    // one click handler for all cards 
    cardsContainer.addEventListener("click", async (e) => {
        const card = e.target.closest("article.card");
        const number = card.querySelector(".service-number")?.textContent.trim() || "";
        await copyToClipboard(number);                 
        // current copy count
        let copyCount = Number(copyCountEl?.textContent || 0);
        // COPY button
        if (e.target.closest(".copy-btn")) {
            e.preventDefault();

            copyCount += 1;
            if (copyCountEl) copyCountEl.textContent = String(copyCount);

            alert(`the number is Copied: (${number})`);
            return;
        }


    });
});



