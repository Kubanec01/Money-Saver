// Variables
const introContainer = document.querySelectorAll('.introducing-container');
const welcomeContainer = document.querySelector('.welcome')
const moneyIcon = document.querySelector('.bx.bx-euro') as HTMLElement;


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
const foodCategory = document.querySelector('.food p');


if (!foodInput || !foodPlusTag || !foodMinusTag || !foodCategory || !moneyIcon) {
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
            const newMoneyIcon = moneyIcon!.cloneNode(true) as HTMLElement;
            foodCategory!.appendChild(newMoneyIcon);
        } else {
            console.error('Category cannot be negative.');
        }
    }
}


// Home Input Function
const homeInput = document.querySelector('.home-input') as HTMLInputElement;
const homePlusTag = document.querySelector('.home-plus');
const homeMinusTag = document.querySelector('.home-minus');
const homeCategory = document.querySelector('.home p');

if (!homeInput || !homePlusTag || !homeMinusTag || !homeCategory || !moneyIcon) {
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
            const newMoneyIcon = moneyIcon!.cloneNode(true) as HTMLElement;
            homeCategory.appendChild(newMoneyIcon);
        }
    } 
}


// Fuel Input Function
const fuelInput = document.querySelector('.fuel-input') as HTMLInputElement;
const fuelPlusTag = document.querySelector('.fuel-plus');
const fuelMinusTag = document.querySelector('.fuel-minus');
const fuelCategory = document.querySelector('.fuel p');

if (!fuelInput || !fuelPlusTag || !fuelMinusTag || !fuelCategory || !moneyIcon) {
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
            const newMoneyIcon = moneyIcon!.cloneNode(true) as HTMLElement;
            fuelCategory.appendChild(newMoneyIcon);
        }
    }
}


// Fun Input Function
const funInput = document.querySelector('.fun-input') as HTMLInputElement;
const funPlusTag = document.querySelector('.fun-plus');
const funMinusTag = document.querySelector('.fun-minus');
const funCategory = document.querySelector('.fun p');

if (!funInput || !funPlusTag || !funMinusTag || !funCategory || !moneyIcon) {
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
            const newMoneyIcon = moneyIcon!.cloneNode(true) as HTMLElement;
            funCategory.appendChild(newMoneyIcon);
        }
    }

}


// Other Input Function
const otherInput = document.querySelector('.other-input') as HTMLInputElement;
const otherPlusTag = document.querySelector('.other-plus');
const otherMinusTag = document.querySelector('.other-minus');
const otherCategory = document.querySelector('.other p');

if (!otherInput || !otherPlusTag || !otherMinusTag || !otherCategory || !moneyIcon) {
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
            const newMoneyIcon = moneyIcon!.cloneNode(true) as HTMLElement;
            otherCategory.appendChild(newMoneyIcon);
        }
    }
}

// Delete all Categories and Inputs Values
const deleteBtn = document.querySelector('.delete-box')

function setCategoriesValue (iconElement: HTMLElement) {
    [foodCategory, homeCategory, fuelCategory, funCategory, otherCategory].forEach( category => {
        const newIcon = iconElement.cloneNode(true) as HTMLElement;
        category!.textContent = '0'
        category!.appendChild(newIcon)
    })
};

function setInputsValue (value: string) {
    [foodInput, homeInput, fuelInput, funInput, otherInput].forEach( elValue => {
        elValue.value = value;
    })
}

deleteBtn?.addEventListener('click', () => {
    setCategoriesValue(moneyIcon!);
    setInputsValue('');
})


// Set Budget Circle Graph
const budgetSelector = document.querySelector('.num-selector input');
const goalSelector = document.querySelector('.goal-selector input');
let newBudgetSelectorValue:number = 0;  

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