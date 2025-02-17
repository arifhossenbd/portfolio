const date = new Date();
const year = date.getFullYear();
document.getElementById('year').innerText = year;
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("a");
    function setActiveLink(link) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        localStorage.setItem("activeLink", link.getAttribute("href"));
    }
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            setActiveLink(this);
        });
    });
    const savedActiveLink = localStorage.getItem("activeLink");
    if (savedActiveLink) {
        const activeLink = document.querySelector(`.nav a[href="${savedActiveLink}"]`);
        if (activeLink) {
            setActiveLink(activeLink);
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownBtnClose = document.getElementById("dropdown-btn-close");
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownBtn.addEventListener("click", function () {
        dropdownContent.classList.toggle("block");
        dropdownBtn.style.display = "none";
        dropdownBtnClose.style.display = "block";
    });
    dropdownBtnClose.addEventListener("click", function () {
        dropdownContent.classList.remove("block");
        dropdownBtn.style.display = "block";
        dropdownBtnClose.style.display = "none";
    });
});


