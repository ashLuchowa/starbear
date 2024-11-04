// Change Text Color
function scrollNavbar() {
    var headerSection = document.querySelector('header');
    var introPosition = headerSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    var mainNav = document.querySelectorAll('#main-nav a');

    if(-introPosition > screenPosition) {
        for (var j = 0; j < mainNav.length; j++) {
            mainNav[j].classList.add('text-color-dark');
        }
    } else {
        for (var y = 0; y < mainNav.length; y++) {
            mainNav[y].classList.remove('text-color-dark');
        }
    }
}

// Filter Store Page
function filterOptions() {
    var filterItem = document.querySelectorAll('.product-item');
    var filterBtn = document.querySelectorAll('.filter-btn li a');
    var eachBtn = document.querySelectorAll('.list-group a');

    for (var x = 0; x < filterBtn.length; x++ ) {
        filterBtn[x].addEventListener('click', function(event) {
            event.preventDefault();
            var clickedIndex = Array.from(filterBtn).indexOf(this);
            var singleItem = eachBtn[clickedIndex].textContent;

            // filter each item
            for (var i = 0; i < filterItem.length; i++) {
                if(!filterItem[i].className.includes(singleItem)) {
                    filterItem[i].classList.add('filter-none');
                } else {
                    filterItem[i].classList.remove('filter-none');
                }
            }

            // show all items
            if (singleItem === 'All') {
                for (var a = 0; a < filterItem.length; a++) {
                    filterItem[a].classList.remove('filter-none');
                }
            }
        });
    }
}

filterOptions();
window.addEventListener('scroll', scrollNavbar);
