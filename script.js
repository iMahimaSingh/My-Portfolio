document.addEventListener("DOMContentLoaded", function() {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
  
    function opentab(event, tabname) {
      for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }
  
    // Optionally, attach the function to the buttons programmatically
    for (let tablink of tablinks) {
      tablink.addEventListener("click", function(event) {
        const tabname = this.getAttribute("data-tab"); // Assuming you have data-tab attributes
        opentab(event, tabname);
      });
    }
  });
  