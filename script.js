// Variables
var introContainer = document.querySelectorAll('.introducing-container');
var welcomeContainer = document.querySelector('.welcome');
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
if (!foodInput || !foodPlusTag || !foodMinusTag || !foodCategory || !moneyIcon) {
    console.error('One of the elements was not found.');
}
else {
    var newFoodCategoryValue_1;
    foodPlusTag.addEventListener('click', function () {
        var inputValue = parseFloat(foodInput.value);
        if (isNaN(inputValue)) {
            console.error('Invalid operation: Input value must be greater than zero.');
        }
        updateFoodCategory_1(inputValue);
    });
    foodMinusTag.addEventListener('click', function () {
        var inputValue = parseFloat(foodInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateFoodCategory_1(-inputValue);
        }
    });
    var updateFoodCategory_1 = function (value) {
        var currentCategoryValue = parseFloat(foodCategory.textContent.replace(/\D/g, ''));
        newFoodCategoryValue_1 = currentCategoryValue + value;
        if (newFoodCategoryValue_1 >= 0) {
            foodCategory.textContent = "".concat(newFoodCategoryValue_1);
            var newMoneyIcon = moneyIcon.cloneNode(true);
            foodCategory.appendChild(newMoneyIcon);
        }
        else {
            console.error('Category cannot be negative.');
        }
    };
}
// Home Input Function
var homeInput = document.querySelector('.home-input');
var homePlusTag = document.querySelector('.home-plus');
var homeMinusTag = document.querySelector('.home-minus');
var homeCategory = document.querySelector('.home p');
if (!homeInput || !homePlusTag || !homeMinusTag || !homeCategory || !moneyIcon) {
    console.error('One of the elements was not found.');
}
else {
    var newHomeCategoryValue_1;
    homePlusTag.addEventListener('click', function () {
        var inputValue = parseFloat(homeInput.value);
        if (isNaN(inputValue)) {
            console.error('Invalid operation: Input value must be greater than zero.');
        }
        updateHomeCategory_1(inputValue);
    });
    homeMinusTag.addEventListener('click', function () {
        var inputValue = parseFloat(homeInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateHomeCategory_1(-inputValue);
        }
    });
    var updateHomeCategory_1 = function (value) {
        var currentCategoryValue = parseFloat(homeCategory.textContent.replace(/\D/g, ''));
        newHomeCategoryValue_1 = currentCategoryValue + value;
        if (newHomeCategoryValue_1 >= 0) {
            homeCategory.textContent = "".concat(newHomeCategoryValue_1);
            var newMoneyIcon = moneyIcon.cloneNode(true);
            homeCategory.appendChild(newMoneyIcon);
        }
    };
}
// Fuel Input Function
var fuelInput = document.querySelector('.fuel-input');
var fuelPlusTag = document.querySelector('.fuel-plus');
var fuelMinusTag = document.querySelector('.fuel-minus');
var fuelCategory = document.querySelector('.fuel p');
if (!fuelInput || !fuelPlusTag || !fuelMinusTag || !fuelCategory || !moneyIcon) {
    console.error('One of the elements was not found.');
}
else {
    var newFuelCategoryValue_1;
    fuelPlusTag.addEventListener('click', function () {
        var inputValue = parseFloat(fuelInput.value);
        if (isNaN(inputValue)) {
            console.error('Invalid operation: Input value must be greater than zero.');
        }
        updateFuelCategory_1(inputValue);
    });
    fuelMinusTag.addEventListener('click', function () {
        var inputValue = parseFloat(fuelInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateFuelCategory_1(-inputValue);
        }
    });
    var updateFuelCategory_1 = function (value) {
        var currentCategoryValue = parseFloat(fuelCategory.textContent.replace(/\D/g, ''));
        newFuelCategoryValue_1 = currentCategoryValue + value;
        if (newFuelCategoryValue_1 >= 0) {
            fuelCategory.textContent = "".concat(newFuelCategoryValue_1);
            var newMoneyIcon = moneyIcon.cloneNode(true);
            fuelCategory.appendChild(newMoneyIcon);
        }
    };
}
// Fun Input Function
var funInput = document.querySelector('.fun-input');
var funPlusTag = document.querySelector('.fun-plus');
var funMinusTag = document.querySelector('.fun-minus');
var funCategory = document.querySelector('.fun p');
if (!funInput || !funPlusTag || !funMinusTag || !funCategory || !moneyIcon) {
    console.error('One of the elements was not found.');
}
else {
    var newFunCategoryValue_1;
    funPlusTag.addEventListener('click', function () {
        var inputValue = parseFloat(funInput.value);
        if (isNaN(inputValue)) {
            console.error('Invalid operation: Input value must be greater than zero.');
        }
        updateFunCategory_1(inputValue);
    });
    funMinusTag.addEventListener('click', function () {
        var inputValue = parseFloat(funInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateFunCategory_1(-inputValue);
        }
    });
    var updateFunCategory_1 = function (value) {
        var currentCategoryValue = parseFloat(funCategory.textContent.replace(/\D/g, ''));
        newFunCategoryValue_1 = currentCategoryValue + value;
        if (newFunCategoryValue_1 >= 0) {
            funCategory.textContent = "".concat(newFunCategoryValue_1);
            var newMoneyIcon = moneyIcon.cloneNode(true);
            funCategory.appendChild(newMoneyIcon);
        }
    };
}
// Other Input Function
var otherInput = document.querySelector('.other-input');
var otherPlusTag = document.querySelector('.other-plus');
var otherMinusTag = document.querySelector('.other-minus');
var otherCategory = document.querySelector('.other p');
if (!otherInput || !otherPlusTag || !otherMinusTag || !otherCategory || !moneyIcon) {
    console.error('One of the elements was not found.');
}
else {
    var newOtherCategoryValue_1;
    otherPlusTag.addEventListener('click', function () {
        var inputValue = parseFloat(otherInput.value);
        if (isNaN(inputValue)) {
            console.error('Invalid operation: Input value must be greater than zero.');
        }
        updateOtherCategory_1(inputValue);
    });
    otherMinusTag.addEventListener('click', function () {
        var inputValue = parseFloat(otherInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateOtherCategory_1(-inputValue);
        }
    });
    var updateOtherCategory_1 = function (value) {
        var currentCategoryValue = parseFloat(otherCategory.textContent.replace(/\D/g, ''));
        newOtherCategoryValue_1 = currentCategoryValue + value;
        if (newOtherCategoryValue_1 >= 0) {
            otherCategory.textContent = "".concat(newOtherCategoryValue_1);
            var newMoneyIcon = moneyIcon.cloneNode(true);
            otherCategory.appendChild(newMoneyIcon);
        }
    };
}
// Delete all Categories and Inputs Values
var deleteBtn = document.querySelector('.delete-box');
function setCategoriesValue(iconElement) {
    [foodCategory, homeCategory, fuelCategory, funCategory, otherCategory].forEach(function (category) {
        var newIcon = iconElement.cloneNode(true);
        category.textContent = '0';
        category.appendChild(newIcon);
    });
}
;
function setInputsValue(value) {
    [foodInput, homeInput, fuelInput, funInput, otherInput].forEach(function (elValue) {
        elValue.value = value;
    });
}
deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener('click', function () {
    setCategoriesValue(moneyIcon);
    setInputsValue('');
});
// Set Budget Circle Graph
var budgetSelector = document.querySelector('.num-selector input');
var goalSelector = document.querySelector('.goal-selector input');
