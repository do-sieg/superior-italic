const iTags = document.querySelectorAll("i");

for (const iTag of iTags) {
    const chars = [...iTag.textContent]
    iTag.textContent = "";
    iTag.style.fontStyle = "unset"; // Remove the inferior default italic

    for (const char of chars) {
        const span = iTag.appendChild(document.createElement("span"));
        span.style.display = "inline-block";
        span.style.width = "fit-content";
        span.style.transform = `rotate(${iTag.dataset.angle ?? 15}deg)`;
        span.textContent = char;
    }
}