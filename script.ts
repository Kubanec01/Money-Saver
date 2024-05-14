// Variables
const introContainer = document.querySelectorAll('.introducing-container');
const welcomeContainer = document.querySelector('.welcome')


window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(): void {

    const topHeight: number = window.innerHeight - 160;

    introContainer.forEach((container: Element) => {
        const containerTop: number = container.getBoundingClientRect().top;

        if (containerTop < topHeight) {
            container.classList.add('show');
        } else {
            container.classList.remove('show');
        }
    });
}

window.addEventListener('load', () => {
    welcomeContainer?.classList.add('fade-in');
})

// Categories Variables
let newFoodCategoryValue: number = 0;
let newHomeCategoryValue: number = 0;
let newFuelCategoryValue: number = 0;
let newFunCategoryValue: number = 0;
let newOtherCategoryValue: number = 0;


// Food Input Function
const foodInput = document.querySelector('.food-input') as HTMLInputElement;
const foodPlusTag = document.querySelector('.food-plus');
const foodMinusTag = document.querySelector('.food-minus');
const foodCategory = document.querySelector('.food p') as HTMLElement;

window.addEventListener('load', () => {
    const foodStoredValue = localStorage.getItem('foodValue');
    if (foodStoredValue) {
        newFoodCategoryValue = parseFloat(foodStoredValue);
        foodCategory.textContent = foodStoredValue;
    }
});


if (!foodInput || !foodPlusTag || !foodMinusTag || !foodCategory ) {
    console.error('One of the elements was not found.');
} else {

    foodPlusTag.addEventListener('click', () => {
        const inputValue = parseFloat(foodInput.value);
        if (isNaN(inputValue)) {
            console.error('Invalid operation: Input value must be greater than zero.');
        }
        updateFoodCategory(inputValue);
    });

    foodMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(foodInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateFoodCategory(-inputValue);
        }
    });

    const updateFoodCategory = (value: number) => {
        const currentCategoryValue = parseFloat(foodCategory!.textContent!.replace(/\D/g, ''));
        newFoodCategoryValue = currentCategoryValue + value;
        if (newFoodCategoryValue >= 0) {
            foodCategory!.textContent = `${newFoodCategoryValue}`;
        } else {
            console.error('Category cannot be negative.');
        }
    }
}


// Home Input Function
const homeInput = document.querySelector('.home-input') as HTMLInputElement;
const homePlusTag = document.querySelector('.home-plus');
const homeMinusTag = document.querySelector('.home-minus');
const homeCategory = document.querySelector('.home p') as HTMLElement;

window.addEventListener('load', () => {
    const homeStoredValue = localStorage.getItem('homeValue');
    if (homeStoredValue) {
        newHomeCategoryValue = parseFloat(homeStoredValue);
        homeCategory.textContent = homeStoredValue;
    }
});

if (!homeInput || !homePlusTag || !homeMinusTag || !homeCategory ) {
    console.error('One of the elements was not found.');
} else {

    homePlusTag.addEventListener('click', () => {
        const inputValue = parseFloat(homeInput.value);
        if (isNaN(inputValue)) {
            console.error('Invalid operation: Input value must be greater than zero.');
        }
        updateHomeCategory(inputValue);
    });

    homeMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(homeInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateHomeCategory(-inputValue);
        }
    });

    const updateHomeCategory = (value: number) => {
        const currentCategoryValue = parseFloat(homeCategory!.textContent!.replace(/\D/g, ''));
        newHomeCategoryValue = currentCategoryValue + value;
        if (newHomeCategoryValue >= 0) {
            homeCategory!.textContent = `${newHomeCategoryValue}`;
            localStorage.setItem('homeValue', newHomeCategoryValue.toString());
        }
    } 
}


// Fuel Input Function
const fuelInput = document.querySelector('.fuel-input') as HTMLInputElement;
const fuelPlusTag = document.querySelector('.fuel-plus');
const fuelMinusTag = document.querySelector('.fuel-minus');
const fuelCategory = document.querySelector('.fuel p') as HTMLElement;

window.addEventListener('load', () => {
    const fuelStoredValue = localStorage.getItem('fuelValue');
    if (fuelStoredValue) {
        newFuelCategoryValue = parseFloat(fuelStoredValue);
        fuelCategory.textContent = fuelStoredValue;
    }
})


if (!fuelInput || !fuelPlusTag || !fuelMinusTag || !fuelCategory ) {
    console.error('One of the elements was not found.');
} else {

    fuelPlusTag.addEventListener('click', () => {
        const inputValue = parseFloat(fuelInput.value)
        if (isNaN(inputValue)) {
            console.error('Invalid operation: Input value must be greater than zero.');
        }
        updateFuelCategory(inputValue);
    });

    fuelMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(fuelInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateFuelCategory(-inputValue);
        }
    });

    const updateFuelCategory = (value :number) => {
        const currentCategoryValue = parseFloat(fuelCategory!.textContent!.replace(/\D/g, ''));
        newFuelCategoryValue = currentCategoryValue + value;
        if (newFuelCategoryValue >= 0) {
            fuelCategory!.textContent = `${newFuelCategoryValue}`;
            localStorage.setItem('fuelValue', newFuelCategoryValue.toString());
        }
    }
}


// Fun Input Function
const funInput = document.querySelector('.fun-input') as HTMLInputElement;
const funPlusTag = document.querySelector('.fun-plus');
const funMinusTag = document.querySelector('.fun-minus');
const funCategory = document.querySelector('.fun p') as HTMLElement;

window.addEventListener('load', () => {
    const funStoredValue = localStorage.getItem('funValue');
    if (funStoredValue) {
        newFunCategoryValue = parseFloat(funStoredValue);
        funCategory.textContent = funStoredValue;
    }
})

if (!funInput || !funPlusTag || !funMinusTag || !funCategory ) {
    console.error('One of the elements was not found.');
} else {

    funPlusTag.addEventListener('click', () => {
        const inputValue = parseFloat(funInput.value);
        if(isNaN(inputValue)) {
            console.error('Invalid operation: Input value must be greater than zero.');
        }
        updateFunCategory(inputValue);
    });

    funMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(funInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateFunCategory(-inputValue);
        }
    });

    const updateFunCategory = (value: number) => {
        const currentCategoryValue = parseFloat(funCategory!.textContent!.replace(/\D/g, ''));
        newFunCategoryValue = currentCategoryValue + value;
        if (newFunCategoryValue >= 0) {
            funCategory!.textContent = `${newFunCategoryValue}`;
            localStorage.setItem('funValue', newFunCategoryValue.toString());
        }
    }

}


// Other Input Function
const otherInput = document.querySelector('.other-input') as HTMLInputElement;
const otherPlusTag = document.querySelector('.other-plus');
const otherMinusTag = document.querySelector('.other-minus');
const otherCategory = document.querySelector('.other p') as HTMLElement;

window.addEventListener('load', () => {
    const otherStoredValue = localStorage.getItem('otherValue');
    if (otherStoredValue) {
        newOtherCategoryValue = parseFloat(otherStoredValue);
        otherCategory.textContent = otherStoredValue;
    }
})

if (!otherInput || !otherPlusTag || !otherMinusTag || !otherCategory ) {
    console.error('One of the elements was not found.');
} else {

    otherPlusTag.addEventListener('click', () => {
        const inputValue = parseFloat(otherInput.value);
        if (isNaN(inputValue)) {
            console.error('Invalid operation: Input value must be greater than zero.');
        }
        updateOtherCategory(inputValue)
    })

    otherMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(otherInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateOtherCategory(-inputValue);
        }
    });

    const updateOtherCategory = (value: number) => {
        const currentCategoryValue = parseFloat(otherCategory!.textContent!.replace(/\D/g, ''));
        newOtherCategoryValue = currentCategoryValue + value;
        if (newOtherCategoryValue >= 0) {
            otherCategory.textContent = `${newOtherCategoryValue}`;
            localStorage.setItem('otherValue', newOtherCategoryValue.toString());
        }
    }
}

// Delete all Categories and Inputs Values
const deleteBtn = document.querySelector('.delete-box') as HTMLButtonElement;

function setCategoriesValue (iconElement: number) {
    [foodCategory, homeCategory, fuelCategory, funCategory, otherCategory].forEach( category => {
//    Sem treba doplnit funkciu aby sa hodnota vsetkych categories nastavila na 0 a nasledne to vlozit do deleteBtn event listenera
    })
};

function setInputsValue (value: string) {
    [foodInput, homeInput, fuelInput, funInput, otherInput].forEach( elValue => {
        elValue.value = value;
    })
}

deleteBtn.addEventListener('click', () => {
    setInputsValue('');
})


// Set Budget Circle Graph
const budgetSelector = document.querySelector('.num-selector input') as HTMLInputElement;
let newBudgetSelectorValue: number = 0;

// Budget Local Storage Selector
window.addEventListener('load', () => {
    const budgetStoredValue = localStorage.getItem('budgetValue');
    if (budgetStoredValue) {
        newBudgetSelectorValue = parseFloat(budgetStoredValue);
        budgetSelector.value = budgetStoredValue;
        console.log('toto je po nacitani', newBudgetSelectorValue)
    }
});

// Get Budget Value Function
budgetSelector.addEventListener('input', () => {
    const budgetValue = parseFloat(budgetSelector.value);
    if (isNaN(budgetValue) || budgetValue <= 0) {
        newBudgetSelectorValue = 0;
    } else {
        newBudgetSelectorValue = budgetValue;
    };

    localStorage.setItem('budgetValue', newBudgetSelectorValue.toString());
    console.log('toto je aktualny chod', newBudgetSelectorValue)
});


// Progress Bars Functions
function allCategoriesValueCounting (a:number, b:number, c:number, d:number, e:number,) {

    // Bilance Progress Bar Function
    const catValue = a + b + c + d + e;
    const currentBudget = newBudgetSelectorValue - catValue;
    let percentageBudget = Math.round(currentBudget / newBudgetSelectorValue * 100);
    if (isNaN(percentageBudget)) {
        percentageBudget = 0;
    }

    // Fun & Other Progress Bar function
    const funAndOtherValue = d + e;
    let percentageCosts = Math.round(funAndOtherValue / catValue * 100);
    if (isNaN(percentageCosts)) {
        percentageCosts = 0;
    }
   
    // Spent Progress Bar function
    let percentageSpent = Math.round(catValue / newBudgetSelectorValue * 100);
    if (isNaN(percentageSpent)) {
        percentageSpent = 0;
    }

    
    return {
        catValue,
        percentageSpent,
        funAndOtherValue,
        percentageCosts,
        currentBudget, 
        percentageBudget
    };
}

let budgetCategoriesResult = allCategoriesValueCounting(
    newFoodCategoryValue, 
    newHomeCategoryValue, 
    newFuelCategoryValue, 
    newFunCategoryValue, 
    newOtherCategoryValue
    )


// Spent Progress Bar
const spentProgressBar = document.querySelector('.spent-progressbar');

function enableBudgetBar(): void {
    if (spentProgressBar) {
        spentProgressBar.setAttribute('role', "progressBar");
        spentProgressBar.setAttribute('aria-valuenow', budgetCategoriesResult.percentageSpent.toString());
        spentProgressBar.setAttribute('aria-live', budgetCategoriesResult.catValue.toString());
    }
}
enableBudgetBar();


// Investment Progress Bar
const investmentProgressBar = document.querySelector('.investment-progressbar');

function enableInvestmentBar(): void {
    if (investmentProgressBar) {
        investmentProgressBar.setAttribute('role', 'progressBar');
        investmentProgressBar.setAttribute('aria-valuenow', budgetCategoriesResult.percentageCosts.toString());
        investmentProgressBar.setAttribute('aria-live', budgetCategoriesResult.funAndOtherValue.toString());
    }
}
enableInvestmentBar();


// Goal progress bar
const goalProgressBar = document.querySelector('.goal-progressbar');

function enableGoalBar(): void {
    if (goalProgressBar) {
        goalProgressBar.setAttribute('role', 'progressBar');
        goalProgressBar.setAttribute('aria-valuenow', budgetCategoriesResult.percentageBudget.toString());
        goalProgressBar.setAttribute('aria-live', budgetCategoriesResult.currentBudget.toString());
    }
}
enableGoalBar();
