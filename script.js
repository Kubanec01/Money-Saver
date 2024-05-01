var introContainer = document.querySelectorAll('.introducing-container');
var welcomeContainer = document.querySelector('.welcome');
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
var foodInput = document.querySelector('.food-input');
var foodPlusTag = document.querySelector('.food-plus');
var foodMinusTag = document.querySelector('.food-minus');
var foodCategory = document.querySelector('.food p');
var moneyIcon = document.querySelector('.bx.bx-euro');
var newCategoryValue;
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
