$(document).ready(function () {
    $(".toggle-menu").click(function () {
        $(".mobile-menu").toggleClass("show-menu");
    });
});

function panelToggle() {
    var element = document.getElementById("panel");
    element.classList.toggle("show-panel");
}

function gamingToggle() {
    var element = document.getElementById("panel-gaming");
    element.classList.toggle("show-panel-gaming");
}

function boardToggle() {
    var element = document.getElementById("panel-board");
    element.classList.toggle("show-panel-board");
}

// search result

window.addEventListener("load", () => {
    // (A) GET HTML ELEMENTS
    var filter = document.getElementById("the-filter"), // search box
        list = document.querySelectorAll("#the-list .col-md-3"); // all list items
    var element = document.getElementById("view-all");
    document.querySelectorAll("#the-list .button--search-all");

    // (B) ATTACH KEY UP LISTENER TO SEARCH BOX
    filter.onkeyup = () => {
        // (B1) GET CURRENT SEARCH TERM
        let search = filter.value.toLowerCase();
        let count = 0;
        // (B2) LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
        for (let i of list) {
            let item = i.innerHTML.toLowerCase();
            if (item.indexOf(search) == -1) {
                i.classList.remove("show");
            }
            else {
                count++
                if (count > 4) {
                    console.log(count);
                    i.classList.remove("show");
                    element.classList.remove("button--search-all");
                }
                else {
                    i.classList.add("show");
                    element.classList.add("button--search-all");
                }

            }
            if (!search.length) {
                i.classList.add("show");
                element.classList.add("button--search-all");
            }
        }

    };
});


// menu fixed on scroll 

window.onscroll = function () { myFunction() };

var header = document.getElementById("menu");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// change image refersh

document.addEventListener("DOMContentLoaded", () => {
    const log = console.log,
        array = ["src/images/Bathroom-Banner-1.jpg", "src/images/card-2.jpg"],
        random = Math.floor(Math.random() * array.length),
        target = document.getElementById("imageChange");
    target.src = `${array[random]}`;
    log(target);
});

document.addEventListener("DOMContentLoaded", () => {
    const log = console.log,
        array = ["src/images/card-3.jpg", "src/images/card-4.jpg"],
        random = Math.floor(Math.random() * array.length),
        target = document.getElementById("imageChange2");
    target.src = `${array[random]}`;
    log(target);
});

document.addEventListener("DOMContentLoaded", () => {
    const log = console.log,
        array = ["src/images/card-5.jpg", "src/images/card-6.jpg"],
        random = Math.floor(Math.random() * array.length),
        target = document.getElementById("imageChange3");
    target.src = `${array[random]}`;
    log(target);
});

document.addEventListener("DOMContentLoaded", () => {
    const log = console.log,
        array = ["src/images/card-7.jpg", "src/images/card-2.jpg"],
        random = Math.floor(Math.random() * array.length),
        target = document.getElementById("imageChange4");
    target.src = `${array[random]}`;
    log(target);
});


document.addEventListener("DOMContentLoaded", () => {
    const log = console.log,
        array = ["src/images/card.jpg", "src/images/card-13.jpg"],
        random = Math.floor(Math.random() * array.length),
        target = document.getElementById("imageChange5");
    target.src = `${array[random]}`;
    log(target);
});


document.addEventListener("DOMContentLoaded", () => {
    const log = console.log,
        array = ["src/images/card-14.jpg", "src/images/card-12.jpg",],
        random = Math.floor(Math.random() * array.length),
        target = document.getElementById("imageChange6");
    target.src = `${array[random]}`;
    log(target);
});

// wishlist function 

function toggleAddWish(button) {
    var heartPath = button.querySelector('.card__icon-absolute');
    heartPath.classList.toggle('red');
}