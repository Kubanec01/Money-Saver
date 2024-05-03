// Variables
var introContainer = document.querySelectorAll('.introducing-container');
var welcomeContainer = document.querySelector('.welcome');
var newCategoryValue;
var moneyIcon = document.querySelector('.bx.bx-euro');
window.addEventListener('scroll', checkBoxes);
checkBoxes();
function checkBoxes() {
    var topHeight = window.innerHeight - 160;
    introContainer.forEach(function (container) {
        var containerTop = container.getBoundingClientRect().top;
        if (containerTop < topHeight) {
            container.classList.add('show');
        }
        else {
            container.classList.remove('show');
        }
    });
}
window.addEventListener('load', function () {
    welcomeContainer === null || welcomeContainer === void 0 ? void 0 : welcomeContainer.classList.add('fade-in');
});
// Food Input Function
var foodInput = document.querySelector('.food-input');
var foodPlusTag = document.querySelector('.food-plus');
var foodMinusTag = document.querySelector('.food-minus');
var foodCategory = document.querySelector('.food p');
if (foodInput && foodPlusTag && foodCategory && moneyIcon) {
    // Nastavení události kliknutí na tlačítko foodPlusTag
    foodPlusTag.addEventListener('click', function () {
        // Získání hodnoty z foodInput a převedení na číslo
        var inputValue = parseFloat(foodInput.value);
        // Získání aktuální hodnoty textu v foodCategory, odstranění měnové ikony a převedení na číslo
        var currentCategoryValue = parseFloat(foodCategory.textContent.replace(/\D/g, ''));
        // Pokud je vstupní hodnota platná, přičte se k aktuální hodnotě kategorie
        if (!isNaN(inputValue)) {
            newCategoryValue = inputValue + currentCategoryValue;
        }
        // Pokud je nová hodnota NaN (neplatná), neaktualizuje se nic
        if (!isNaN(newCategoryValue)) {
            // Aktualizace textu v foodCategory s novou číselnou hodnotou a přidáním ikony měny
            foodCategory.textContent = "".concat(newCategoryValue, " ");
            foodCategory.appendChild(moneyIcon);
        }
    });
}
else {
    console.error('Některý z prvků nebyl nalezen.');
}
if (foodInput && foodMinusTag && foodCategory && moneyIcon) {
    foodMinusTag.addEventListener('click', function () {
        var inputValue = parseInt(foodInput.value);
        var currentCategoryValue = parseFloat(foodCategory.textContent.replace(/\D/g, ''));
        if (!isNaN(inputValue)) {
            newCategoryValue = currentCategoryValue - inputValue;
        }
        if (!isNaN(newCategoryValue)) {
            foodCategory.textContent = "".concat(newCategoryValue);
            foodCategory.appendChild(moneyIcon);
        }
    });
}
else {
    console.log("Error: Invalid input value");
}
// Home Input Function
var homeInput = document.querySelector('.home-input');
var homePlusTag = document.querySelector('.home-plus');
var homeMinusTag = document.querySelector('.home-minus');
var homeCategory = document.querySelector('.home p');
if (homeInput && homePlusTag && homeCategory && moneyIcon) {
    homePlusTag.addEventListener('click', function () {
        var inputValue = parseFloat(homeInput.value);
        var currentCategoryValue = parseFloat(homeCategory.textContent.replace(/\D/g, ''));
        if (!isNaN(inputValue)) {
            newCategoryValue = inputValue + currentCategoryValue;
        }
        if (!isNaN(newCategoryValue)) {
            homeCategory.textContent = "".concat(newCategoryValue);
            homeCategory.appendChild(moneyIcon);
        }
    });
}
else {
    console.log("Error: Invalid input value");
}
if (homeInput && homeMinusTag && homeCategory && moneyIcon) {
    homeMinusTag.addEventListener('click', function () {
        var inputValue = parseFloat(homeInput.value);
        var currentCategoryValue = parseFloat(homeCategory.textContent.replace(/\D/g, ''));
        if (!isNaN(inputValue)) {
            newCategoryValue = currentCategoryValue - inputValue;
        }
        if (!isNaN(currentCategoryValue)) {
            homeCategory.textContent = "".concat(newCategoryValue);
            homeCategory.appendChild(moneyIcon);
        }
    });
}
