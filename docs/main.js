// Search Icon Responsive
const searchIcon = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");

// Mobile Menu Responsive
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const menuCloseIcon = document.querySelector(".menu-close-icon");

// Search Icon Responsive
searchIcon.addEventListener("click", function(){
    searchContainer.classList.toggle("active");
})

// Mobile Menu Responsive
mobileMenuIcon.addEventListener("click", function(){
    mobileMenuContainer.classList.add("active");
});
menuCloseIcon.addEventListener("click", function(){
    mobileMenuContainer.classList.remove("active");
});