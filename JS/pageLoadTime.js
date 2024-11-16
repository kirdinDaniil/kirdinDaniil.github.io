(function() {
    window.addEventListener("load", function() {
        const loadTime = performance.now();

        const loadTimeElement = document.createElement("div");
        loadTimeElement.innerText = `Время загрузки страницы: ${loadTime.toFixed(2)} мс`;
        loadTimeElement.classList.add("load_time");

        const footer = document.querySelector("footer");
        if (footer) {
            footer.appendChild(loadTimeElement);
        } else {
            console.warn("add footer");
        }
    });
})();
