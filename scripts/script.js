import addHovers from "./addMainHovers.js";
import sideScroll from "./sideScroll.js";
import topNavView from "./topNav.js";
import menuView from "./menuView.js"


console.log(window.location.href);
if (window.location.href === "http://127.0.0.1:5500/index.html") {
    addHovers();
    sideScroll();
} else if (window.location.href === "http://127.0.0.1:5500/pages/menu.html") {
    console.log("displaying menu");
    menuView();
    topNavView();
} else {
    topNavView();
}
