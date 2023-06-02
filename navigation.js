window.addEventListener("scroll", function() {
    var sections = document.querySelectorAll(".section");
    var navItems = document.querySelectorAll(".nav-link");
    var navTitles = this.document.querySelectorAll()
  
    sections.forEach(function(section, index) {
      var rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        navItems.forEach(function(navItem) {
          navItem.classList.remove("active");
        });
        navItems[index].classList.add("active");
      }
    });
  });