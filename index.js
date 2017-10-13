let logo = document.querySelector("#logo-to-name-toggle");

logo.addEventListener("click", () => {
    if (logo.innerText === "Facebook") {
        logo.innerText = "Beatrix";
    } else if (logo.innerText === "Beatrix") {
        logo.innerText = "Facebook";
    }
})