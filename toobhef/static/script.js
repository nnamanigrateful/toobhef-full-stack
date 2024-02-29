// function updateCurrentDate() {
//     // Get the current date
//     var currentDate = new Date();

//     // Format the date as a string
//     var dateString = currentDate.toDateString();

//     // Update the content of the div with the formatted date
//     document.getElementById('currentDate').innerHTML = dateString;
// }

// // Call the function initially to display the current date
// updateCurrentDate();

// // Set up an interval to update the date every second (1000 milliseconds)
// setInterval(updateCurrentDate, 1000);





const togglebtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

togglebtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
}




var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
            pannel.style.display = "none";
            this.classList.remove("active");
        } else {

            pannel.style.display = "block";
        }
    });
}

// var acc = document.getElementsByClassName("accordian");
// var i;
// var activeAccordion = null; // Variable to track the active accordion

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         // Remove "active" class from the previously active accordion
//         if (activeAccordion !== null) {
//             activeAccordion.classList.remove("active");
//             activeAccordion.parentElement.classList.remove("active");
//             activeAccordion.nextElementSibling.style.display = "none";
//         }

//         // Toggle the "active" class on the clicked accordion
//         this.classList.toggle("active");
//         this.parentElement.classList.toggle("active");

//         // Update the currently active accordion
//         activeAccordion = this;

//         // Get the next sibling element of the clicked accordion
//         var panel = this.nextElementSibling;

//         // Toggle the display of the panel
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }




const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// Back to Top

var btt = document.getElementById("backToTop"),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight, isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

//Calculating docment height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

if (docHeight != 'undefined') {
    offset = docHeight / 4;
}
//add scroll event listener
window.addEventListener('scroll', function (event) {
    scrollPos = body.scrollTop || docElem.scrollTop;
    btt.className = (scrollPos > offset) ? "visible" : "";
})
//add click event listener
btt.addEventListener("click", function (event) {
    if (isFirefox) {
        docElem.ScrollTop = 0;
    } else {
        body.ScrollTop = 0;
        console.log(body.scrollTop)
    }

});



document.addEventListener('DOMContentLoaded', function () {
    const pHeads = document.querySelectorAll('.p-head');

    pHeads.forEach(function (pHead) {
        pHead.addEventListener('click', function () {
            // Toggle the visibility of the associated p-txt element
            const pTxt = this.nextElementSibling;
            pTxt.classList.toggle('open');
        });
    });
});

// Event details details
document.querySelectorAll('.card-item').forEach(card => {
    card.addEventListener('click', function () {
        // Toggle the expanded class for the clicked card
        this.classList.toggle('expanded');

        // If any other card is expanded, collapse it
        document.querySelectorAll('.card-item').forEach(otherCard => {
            if (otherCard !== this && otherCard.classList.contains('expanded')) {
                otherCard.classList.remove('expanded');
            }
        });
    });
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the card click event from firing
        this.closest('.card-item').classList.remove('expanded');
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     var closeBtnContact = document.getElementById('close-btn-contact');
//     var successFlagContact = document.getElementById('success-flag-contact');

//     if (successFlagContact && closeBtnContact) {
//         closeBtnContact.addEventListener('click', function () {
//             successFlagContact.style.display = 'none';
//         });
//     }
// });


