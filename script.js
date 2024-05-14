// Variables
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
// Categories Variables
var newFoodCategoryValue = 0;
var newHomeCategoryValue = 0;
var newFuelCategoryValue = 0;
var newFunCategoryValue = 0;
var newOtherCategoryValue = 0;
// Food Input Function
var foodInput = document.querySelector('.food-input');
var foodPlusTag = document.querySelector('.food-plus');
var foodMinusTag = document.querySelector('.food-minus');
var foodCategory = document.querySelector('.food p');
window.addEventListener('load', function () {
    var foodStoredValue = localStorage.getItem('foodValue');
    if (foodStoredValue) {
        newFoodCategoryValue = parseFloat(foodStoredValue);
        foodCategory.textContent = foodStoredValue;
    }
});
if (!foodInput || !foodPlusTag || !foodMinusTag || !foodCategory) {
    console.error('One of the elements was not found.');
}
else {
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
        newFoodCategoryValue = currentCategoryValue + value;
        if (newFoodCategoryValue >= 0) {
            foodCategory.textContent = "".concat(newFoodCategoryValue);
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
window.addEventListener('load', function () {
    var homeStoredValue = localStorage.getItem('homeValue');
    if (homeStoredValue) {
        newHomeCategoryValue = parseFloat(homeStoredValue);
        homeCategory.textContent = homeStoredValue;
    }
});
if (!homeInput || !homePlusTag || !homeMinusTag || !homeCategory) {
    console.error('One of the elements was not found.');
}
else {
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
        newHomeCategoryValue = currentCategoryValue + value;
        if (newHomeCategoryValue >= 0) {
            homeCategory.textContent = "".concat(newHomeCategoryValue);
            localStorage.setItem('homeValue', newHomeCategoryValue.toString());
        }
    };
}
// Fuel Input Function
var fuelInput = document.querySelector('.fuel-input');
var fuelPlusTag = document.querySelector('.fuel-plus');
var fuelMinusTag = document.querySelector('.fuel-minus');
var fuelCategory = document.querySelector('.fuel p');
window.addEventListener('load', function () {
    var fuelStoredValue = localStorage.getItem('fuelValue');
    if (fuelStoredValue) {
        newFuelCategoryValue = parseFloat(fuelStoredValue);
        fuelCategory.textContent = fuelStoredValue;
    }
});
if (!fuelInput || !fuelPlusTag || !fuelMinusTag || !fuelCategory) {
    console.error('One of the elements was not found.');
}
else {
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
        newFuelCategoryValue = currentCategoryValue + value;
        if (newFuelCategoryValue >= 0) {
            fuelCategory.textContent = "".concat(newFuelCategoryValue);
            localStorage.setItem('fuelValue', newFuelCategoryValue.toString());
        }
    };
}
// Fun Input Function
var funInput = document.querySelector('.fun-input');
var funPlusTag = document.querySelector('.fun-plus');
var funMinusTag = document.querySelector('.fun-minus');
var funCategory = document.querySelector('.fun p');
window.addEventListener('load', function () {
    var funStoredValue = localStorage.getItem('funValue');
    if (funStoredValue) {
        newFunCategoryValue = parseFloat(funStoredValue);
        funCategory.textContent = funStoredValue;
    }
});
if (!funInput || !funPlusTag || !funMinusTag || !funCategory) {
    console.error('One of the elements was not found.');
}
else {
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
        newFunCategoryValue = currentCategoryValue + value;
        if (newFunCategoryValue >= 0) {
            funCategory.textContent = "".concat(newFunCategoryValue);
            localStorage.setItem('funValue', newFunCategoryValue.toString());
        }
    };
}
// Other Input Function
var otherInput = document.querySelector('.other-input');
var otherPlusTag = document.querySelector('.other-plus');
var otherMinusTag = document.querySelector('.other-minus');
var otherCategory = document.querySelector('.other p');
window.addEventListener('load', function () {
    var otherStoredValue = localStorage.getItem('otherValue');
    if (otherStoredValue) {
        newOtherCategoryValue = parseFloat(otherStoredValue);
        otherCategory.textContent = otherStoredValue;
    }
});
if (!otherInput || !otherPlusTag || !otherMinusTag || !otherCategory) {
    console.error('One of the elements was not found.');
}
else {
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
        newOtherCategoryValue = currentCategoryValue + value;
        if (newOtherCategoryValue >= 0) {
            otherCategory.textContent = "".concat(newOtherCategoryValue);
            localStorage.setItem('otherValue', newOtherCategoryValue.toString());
        }
    };
}
// Delete all Categories and Inputs Values
var deleteBtn = document.querySelector('.delete-box');
function setCategoriesValue(iconElement) {
    [foodCategory, homeCategory, fuelCategory, funCategory, otherCategory].forEach(function (category) {
        //    Sem treba doplnit funkciu aby sa hodnota vsetkych categories nastavila na 0 a nasledne to vlozit do deleteBtn event listenera
    });
}
;
function setInputsValue(value) {
    [foodInput, homeInput, fuelInput, funInput, otherInput].forEach(function (elValue) {
        elValue.value = value;
    });
}
deleteBtn.addEventListener('click', function () {
    setInputsValue('');
});
// Set Budget Circle Graph
var budgetSelector = document.querySelector('.num-selector input');
var newBudgetSelectorValue = 0;
// Budget Local Storage Selector
window.addEventListener('load', function () {
    var budgetStoredValue = localStorage.getItem('budgetValue');
    if (budgetStoredValue) {
        newBudgetSelectorValue = parseFloat(budgetStoredValue);
        budgetSelector.value = budgetStoredValue;
        console.log('toto je po nacitani', newBudgetSelectorValue);
    }
});
// Get Budget Value Function
budgetSelector.addEventListener('input', function () {
    var budgetValue = parseFloat(budgetSelector.value);
    if (isNaN(budgetValue) || budgetValue <= 0) {
        newBudgetSelectorValue = 0;
    }
    else {
        newBudgetSelectorValue = budgetValue;
    }
    ;
    localStorage.setItem('budgetValue', newBudgetSelectorValue.toString());
    console.log('toto je aktualny chod', newBudgetSelectorValue);
});
// Progress Bars Functions
function allCategoriesValueCounting(a, b, c, d, e) {
    // Bilance Progress Bar Function
    var catValue = a + b + c + d + e;
    var currentBudget = newBudgetSelectorValue - catValue;
    var percentageBudget = Math.round(currentBudget / newBudgetSelectorValue * 100);
    if (isNaN(percentageBudget)) {
        percentageBudget = 0;
    }
    // Fun & Other Progress Bar function
    var funAndOtherValue = d + e;
    var percentageCosts = Math.round(funAndOtherValue / catValue * 100);
    if (isNaN(percentageCosts)) {
        percentageCosts = 0;
    }
    // Spent Progress Bar function
    var percentageSpent = Math.round(catValue / newBudgetSelectorValue * 100);
    if (isNaN(percentageSpent)) {
        percentageSpent = 0;
    }
    return {
        catValue: catValue,
        percentageSpent: percentageSpent,
        funAndOtherValue: funAndOtherValue,
        percentageCosts: percentageCosts,
        currentBudget: currentBudget,
        percentageBudget: percentageBudget
    };
}
var budgetCategoriesResult = allCategoriesValueCounting(newFoodCategoryValue, newHomeCategoryValue, newFuelCategoryValue, newFunCategoryValue, newOtherCategoryValue);
// Spent Progress Bar
var spentProgressBar = document.querySelector('.spent-progressbar');
function enableBudgetBar() {
    if (spentProgressBar) {
        spentProgressBar.setAttribute('role', "progressBar");
        spentProgressBar.setAttribute('aria-valuenow', budgetCategoriesResult.percentageSpent.toString());
        spentProgressBar.setAttribute('aria-live', budgetCategoriesResult.catValue.toString());
    }
}
enableBudgetBar();
// Investment Progress Bar
var investmentProgressBar = document.querySelector('.investment-progressbar');
function enableInvestmentBar() {
    if (investmentProgressBar) {
        investmentProgressBar.setAttribute('role', 'progressBar');
        investmentProgressBar.setAttribute('aria-valuenow', budgetCategoriesResult.percentageCosts.toString());
        investmentProgressBar.setAttribute('aria-live', budgetCategoriesResult.funAndOtherValue.toString());
    }
}
enableInvestmentBar();
// Goal progress bar
var goalProgressBar = document.querySelector('.goal-progressbar');
function enableGoalBar() {
    if (goalProgressBar) {
        goalProgressBar.setAttribute('role', 'progressBar');
        goalProgressBar.setAttribute('aria-valuenow', budgetCategoriesResult.percentageBudget.toString());
        goalProgressBar.setAttribute('aria-live', budgetCategoriesResult.currentBudget.toString());
    }
}
enableGoalBar();
