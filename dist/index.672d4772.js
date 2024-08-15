document.addEventListener("DOMContentLoaded", function() {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname, event) {
        for (let tablink of tablinks)tablink.classList.remove("active-link");
        for (let tabcontent of tabcontents)tabcontent.classList.remove("active-tab");
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
    for (let tablink of tablinks)tablink.addEventListener("click", function(event) {
        const tabname = this.getAttribute("data-tab");
        opentab(tabname, event);
    });
});
var sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}
const scriptURL = "https://script.google.com/macros/s/AKfycbyTxEw57TUs4uGt0q3dShiZnjOxjH26FhWZ3SqclKhI-iSxZvoVyso-XQEJ-MtnLe6w/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    }).then((response)=>{
        msg.innerHTML = "Message sent successfully!";
        setTimeout(function() {
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    }).catch((error)=>console.error("Error!", error.message));
});

//# sourceMappingURL=index.672d4772.js.map
