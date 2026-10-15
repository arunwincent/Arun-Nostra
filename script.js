
var menuToggle = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

var searchInput = document.getElementById('search-input');
var productCards = document.querySelectorAll('.collection-grid');

if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        var enteredText = searchInput.value.toLowerCase();

        for (var i = 0; i < productCards.length; i++) {
            var productTitle = productCards[i].querySelector('h3').textContent.toLowerCase();

            if (productTitle.indexOf(enteredText) > -1) {
                productCards[i].style.display = "flex";
            } else {
                productCards[i].style.display = "none";
            }
        }
    });
}

var filterCheckboxes = document.querySelectorAll('.filter-check');

if (filterCheckboxes.length > 0) {
    for (var j = 0; j < filterCheckboxes.length; j++) {
        filterCheckboxes[j].addEventListener('change', function() {
            var clickedTag = this.value;
            var isChecked = this.checked;

            if (isChecked == false) {
                for (var i = 0; i < productCards.length; i++) {
                    productCards[i].style.display = "flex";
                }
                return; 
            }

     
            for (var k = 0; k < filterCheckboxes.length; k++) {
                if (filterCheckboxes[k] !== this) {
                    filterCheckboxes[k].checked = false;
                }
            }
            for (var i = 0; i < productCards.length; i++) {
                var productTags = productCards[i].getAttribute('data-tags');

                if (productTags && productTags.indexOf(clickedTag) > -1) {
                    productCards[i].style.display = "flex";
                } else {
                    productCards[i].style.display = "none";
                }
            }
        });
    }
}

var container = document.getElementById('most-wanted-container');
var nextButton = document.getElementById('slide-arrow-right');
var prevButton = document.getElementById('slide-arrow-left');

if (container && nextButton && prevButton) {


    nextButton.addEventListener("click", function() {
      
        var cardWidth = container.querySelector('.product-card').clientWidth;
   
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    prevButton.addEventListener("click", function() {
        var cardWidth = container.querySelector('.product-card').clientWidth;
  
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
}