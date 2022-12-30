export default function addHovers () {
    const topRight = document.getElementById("topRight");
    const btmRight = document.getElementById("btmRight");
    const topLeft = document.getElementById("topLeft");
    const btmLeft = document.getElementById("btmLeft");

    function mouseout () {
        topLeft.style.height = "50vh"; 
        topLeft.style.width = "50vw"; 
        topLeft.style.transition = "ease-in-out 0.3s";

        btmLeft.style.height = "50vh"; 
        btmLeft.style.width = "50vw"; 
        btmLeft.style.transition = "ease-in-out 0.3s";

        topRight.style.height = "50vh"; 
        topRight.style.width = "50vw"; 
        topRight.style.transition = "ease-in-out 0.3s";

        btmRight.style.height = "50vh"; 
        btmRight.style.width = "50vw"; 
        btmRight.style.transition = "ease-in-out 0.3s";
    }

    topLeft.addEventListener('mouseover', () => {
        topLeft.style.height = "60vh"; 
        topLeft.style.width = "60vw"; 
        topLeft.style.transition = "ease-in-out 0.3s";

        btmLeft.style.height = "40vh"; 
        btmLeft.style.width = "60vw"; 
        btmLeft.style.transition = "ease-in-out 0.3s";

        topRight.style.height = "60vh"; 
        topRight.style.width = "40vw"; 
        topRight.style.transition = "ease-in-out 0.3s";

        btmRight.style.height = "40vh"; 
        btmRight.style.width = "40vw"; 
        btmRight.style.transition = "ease-in-out 0.3s";
    });

    topLeft.addEventListener('mouseout', () => {
        mouseout();
    });

    btmLeft.addEventListener('mouseover', () => {
        btmLeft.style.height = "60vh"; 
        btmLeft.style.width = "60vw"; 
        btmLeft.style.transition = "ease-in-out 0.3s";

        topLeft.style.height = "40vh"; 
        topLeft.style.width = "60vw"; 
        topLeft.style.transition = "ease-in-out 0.3s";

        btmRight.style.height = "60vh"; 
        btmRight.style.width = "40vw"; 
        btmRight.style.transition = "ease-in-out 0.3s";

        topRight.style.height = "40vh"; 
        topRight.style.width = "40vw"; 
        topRight.style.transition = "ease-in-out 0.3s";
    });

    btmLeft.addEventListener('mouseout', () => {
        mouseout();
    });

    topRight.addEventListener('mouseover', () => {
        topRight.style.height = "60vh"; 
        topRight.style.width = "60vw"; 
        topRight.style.transition = "ease-in-out 0.3s";

        btmRight.style.height = "40vh"; 
        btmRight.style.width = "60vw"; 
        btmRight.style.transition = "ease-in-out 0.3s";

        topLeft.style.height = "60vh"; 
        topLeft.style.width = "40vw"; 
        topLeft.style.transition = "ease-in-out 0.3s";

        btmLeft.style.height = "40vh"; 
        btmLeft.style.width = "40vw"; 
        btmLeft.style.transition = "ease-in-out 0.3s";
    });

    topRight.addEventListener('mouseout', () => {
        mouseout();
    });

    btmRight.addEventListener('mouseover', () => {
        btmRight.style.height = "60vh"; 
        btmRight.style.width = "60vw"; 
        btmRight.style.transition = "ease-in-out 0.3s";

        topRight.style.height = "40vh"; 
        topRight.style.width = "60vw"; 
        topRight.style.transition = "ease-in-out 0.3s";

        btmLeft.style.height = "60vh"; 
        btmLeft.style.width = "40vw"; 
        btmLeft.style.transition = "ease-in-out 0.3s";

        topLeft.style.height = "40vh"; 
        topLeft.style.width = "40vw"; 
        topLeft.style.transition = "ease-in-out 0.3s";
    });

    btmRight.addEventListener('mouseout', () => {
        mouseout();
    });
}