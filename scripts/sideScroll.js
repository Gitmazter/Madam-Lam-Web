export default function sideScroll () {
        const marquee = document.getElementById('announcement');
        console.log(marquee);
        let indent = marquee.innerHTML.length/10;

        
        function scrollLoop () {
            marquee.style.textIndent = `${indent}em`;
            console.log("indent added");
            indent -= 0.1;
            console.log(indent);
            console.log(marquee.style.textIndent);
            if (indent < -marquee.innerHTML.length/2) {
                indent = marquee.innerHTML.length/10;
            }
        }



        setInterval(scrollLoop, 1000/60);

}