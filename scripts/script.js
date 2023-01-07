import addHovers from "./addMainHovers.js";
import sideScroll from "./sideScroll.js";
import menuView from "./menu.js";


console.log(window.location.href);
if (window.location.href === "http://127.0.0.1:5500/index.html") {
    addHovers();
    sideScroll();
}
else {
    menuView();
}
