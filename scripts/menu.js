export default function menuView () {
    const homeUrl = "../index.html";
    const menuUrl = "./menu.html";
    const findUsUrl = "./findUs.html";
    const contactUrl = "./contact.html";
    const gameUrl = "./game.html";
    const aboutUsUrl = "./aboutUs.html";

    // item order in topnav can be changed here
    const urlArray = [homeUrl, menuUrl, findUsUrl, contactUrl, gameUrl, aboutUsUrl];

    // everything happens only if header is ID'd as topnav
    if (document.getElementById("topnav")) {
        const header = document.getElementById("topnav");

        for (let i = 0; i < urlArray.length; i++) {
            let topnavDiv = document.createElement("div");
            topnavDiv.id = urlArray[i];
            topnavDiv.className = "topnavDiv";

            switch (urlArray[i]) {
                case urlArray[0]:
                    topnavDiv.innerHTML = "Home" ;
                    break;
                case urlArray[1]:
                    topnavDiv.innerHTML = "Menu" ;
                    break;
                case urlArray[2]:
                    topnavDiv.innerHTML = "Find Us" ;
                    break;
                case urlArray[3]:
                    topnavDiv.innerHTML = "Contact" ;
                    break;
                case urlArray[4]:
                    topnavDiv.innerHTML = "Catch The Fish" ;
                    break;
                case urlArray[5]:
                    topnavDiv.innerHTML = "About Us" ;
            }

            topnavDiv.addEventListener('click', () => {
                window.location.href = `${urlArray[i]}`;
            })

            header.appendChild(topnavDiv);
        }
        
    }
    
}