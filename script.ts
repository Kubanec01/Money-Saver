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

// Information Container Function
const questionMark = document.querySelector('.bx-question-mark') as HTMLElement;
const infoBox = document.querySelector('.info-window') as HTMLElement;

    questionMark.addEventListener('mousemove', () => {
        infoBox.style.setProperty('display', 'flex', 'important');
    });

    questionMark.addEventListener('mouseleave', () => {
        infoBox.style.setProperty('display', 'none', 'important');
    });



// Categories Variables
let newFoodCategoryValue: number = 0;
let newHomeCategoryValue: number = 0;
let newFuelCategoryValue: number = 0;
let newFunCategoryValue: number = 0;
let newOtherCategoryValue: number = 0;
let newBudgetSelectorValue: number = 1;




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
        enableBudgetBar();
        enableInvestmentBar();
        enableGoalBar();
    });

    foodMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(foodInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateFoodCategory(-inputValue);
        }
        enableBudgetBar();
        enableInvestmentBar();
        enableGoalBar();
    });

    const updateFoodCategory = (value: number) => {
        const currentCategoryValue = parseFloat(foodCategory!.textContent!.replace(/\D/g, ''));
        newFoodCategoryValue = currentCategoryValue + value;
        if (newFoodCategoryValue >= 0) {
            foodCategory!.textContent = `${newFoodCategoryValue}`;
            localStorage.setItem('foodValue', `${newFoodCategoryValue}`);
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
        enableBudgetBar();
        enableInvestmentBar();
        enableGoalBar();
    });

    homeMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(homeInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateHomeCategory(-inputValue);
        }
        enableBudgetBar();
        enableInvestmentBar();
        enableGoalBar();
    });

    const updateHomeCategory = (value: number) => {
        const currentCategoryValue = parseFloat(homeCategory!.textContent!.replace(/\D/g, ''));
        newHomeCategoryValue = currentCategoryValue + value;
        if (newHomeCategoryValue >= 0) {
            homeCategory!.textContent = `${newHomeCategoryValue}`;
            localStorage.setItem('homeValue', `${newHomeCategoryValue}`);
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
        enableBudgetBar();
        enableInvestmentBar();
        enableGoalBar();
    });

    fuelMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(fuelInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateFuelCategory(-inputValue);
        }
        enableBudgetBar();
        enableInvestmentBar();
        enableGoalBar();
    });

    const updateFuelCategory = (value :number) => {
        const currentCategoryValue = parseFloat(fuelCategory!.textContent!.replace(/\D/g, ''));
        newFuelCategoryValue = currentCategoryValue + value;
        if (newFuelCategoryValue >= 0) {
            fuelCategory!.textContent = `${newFuelCategoryValue}`;
            localStorage.setItem('fuelValue', `${newFuelCategoryValue}`);
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
        enableBudgetBar();
        enableInvestmentBar();
        enableGoalBar();
    });

    funMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(funInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateFunCategory(-inputValue);
        }
        enableBudgetBar();
        enableInvestmentBar();
        enableGoalBar();
    });

    const updateFunCategory = (value: number) => {
        const currentCategoryValue = parseFloat(funCategory!.textContent!.replace(/\D/g, ''));
        newFunCategoryValue = currentCategoryValue + value;
        if (newFunCategoryValue >= 0) {
            funCategory!.textContent = `${newFunCategoryValue}`;
            localStorage.setItem('funValue', `${newFunCategoryValue}`);
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
        enableBudgetBar();
        enableInvestmentBar();
        enableGoalBar();
    })

    otherMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(otherInput.value);
        if (!isNaN(inputValue) && inputValue > 0) {
            updateOtherCategory(-inputValue);
        }
        enableBudgetBar();
        enableInvestmentBar();
        enableGoalBar();
    });

    const updateOtherCategory = (value: number) => {
        const currentCategoryValue = parseFloat(otherCategory!.textContent!.replace(/\D/g, ''));
        newOtherCategoryValue = currentCategoryValue + value;
        if (newOtherCategoryValue >= 0) {
            otherCategory.textContent = `${newOtherCategoryValue}`;
            localStorage.setItem('otherValue', `${newOtherCategoryValue}`);
        }
    }
}


// Budget Input Section
const budgetSelector = document.querySelector('.num-selector input') as HTMLInputElement;
const enterBudgetBtn = document.getElementById('budget-enter') as HTMLElement;

// Budget Local Storage Selector
window.addEventListener('load', () => {
    const budgetStoredValue = localStorage.getItem('budgetValue');
    if (budgetStoredValue) {
        newBudgetSelectorValue = parseFloat(budgetStoredValue);
        budgetSelector.value = budgetStoredValue;
    }
});

// Get Budget Value Function
enterBudgetBtn.addEventListener('click', () => {
    const budgetValue = parseFloat(budgetSelector.value);
    if (isNaN(budgetValue) || budgetValue <= 0) {
        alert('The budget must be at least 1€')
    } else {
        newBudgetSelectorValue = budgetValue;
    };
    localStorage.setItem('budgetValue', newBudgetSelectorValue.toString());
    console.log('toto je nova budget hdnota', newBudgetSelectorValue);
    enableBudgetBar();
    enableInvestmentBar();
    enableGoalBar();
});

// Goal Input Section
const goalSelector = document.querySelector('.goal-selector input') as HTMLInputElement;
let newGoalSelectorValue: number = 0;

window.addEventListener('load', () => {
    const goalStoredValue = localStorage.getItem('goalValue');
    if (goalStoredValue) {
        newGoalSelectorValue = parseFloat(goalStoredValue);
        goalSelector.value = goalStoredValue;
    }
});

goalSelector.addEventListener('input', () => {
    const goalValue = parseFloat(goalSelector.value);
    if (isNaN(goalValue) || goalValue <= 0) {
        newGoalSelectorValue = 0;
    } else {
        newGoalSelectorValue = goalValue;
    }
    localStorage.setItem('goalValue', `${newGoalSelectorValue}`)
});



// Delete All Section
function deleteCategoriesValue () {
    newFoodCategoryValue = 0;
    newHomeCategoryValue  = 0;
    newFuelCategoryValue  = 0;
    newFunCategoryValue  = 0;
    newOtherCategoryValue  = 0;
    newGoalSelectorValue = 0;
    newBudgetSelectorValue = 1;

    

    localStorage.setItem('foodValue', `${newFoodCategoryValue}`);
    foodCategory.textContent = `${newFoodCategoryValue}`;

    localStorage.setItem('homeValue', `${newHomeCategoryValue}`);
    homeCategory.textContent = `${newHomeCategoryValue}`;

    localStorage.setItem('fuelValue', `${newFuelCategoryValue}`);
    fuelCategory.textContent = `${newFuelCategoryValue}`;
    
    localStorage.setItem('funValue', `${newFunCategoryValue}`);
    funCategory.textContent = `${newFunCategoryValue}`;

    localStorage.setItem('otherValue', `${newOtherCategoryValue}`);
    otherCategory.textContent = `${newOtherCategoryValue}`;
    
    goalSelector.value = `${newGoalSelectorValue}`;
    localStorage.setItem('goalValue', `${newGoalSelectorValue}`);

    budgetSelector.value = `${newBudgetSelectorValue}`;
    localStorage.setItem('budgetValue', `${newBudgetSelectorValue}`);
};

function deleteInputsValue (value: string) {
    [foodInput, homeInput, fuelInput, funInput, otherInput].forEach( elValue => {
        elValue.value = value;
    })
}

// Delete Button function
const deleteBtn = document.querySelector('.delete-box') as HTMLButtonElement;
const confirmationModal = document.getElementById('confirmation-modal') as HTMLElement;
const NoBtn = document.getElementById('no-btn') as HTMLButtonElement;
const yesBtn = document.getElementById('yes-btn') as HTMLButtonElement;

function showModal () {
    confirmationModal.style.display = 'block';
}

function hideModal () {
    confirmationModal.style.display = 'none';
}


deleteBtn.addEventListener('click', () => {
    showModal();
})

NoBtn.addEventListener('click', () => {
    hideModal();
})

yesBtn.addEventListener('click', () => {
    deleteInputsValue('');
    deleteCategoriesValue();
    hideModal();
    enableBudgetBar();
    enableInvestmentBar();
    enableGoalBar();
})


// Progress Bars Functions
function getNumfromLocalStorage (key: string): number {
    const value = localStorage.getItem(key);
    return value !== null ? parseFloat(value) : 0;
}
function allCategoriesValueCounting () {

    const foodValue: number = getNumfromLocalStorage('foodValue');
    const homeValue: number = getNumfromLocalStorage('homeValue');
    const fuelValue: number = getNumfromLocalStorage('fuelValue');
    const funValue: number = getNumfromLocalStorage('funValue');
    const otherValue: number = getNumfromLocalStorage('otherValue');
    const budgetValue: number = getNumfromLocalStorage('budgetValue');

    // Goal Progress Bar Function
    const catValue = foodValue + homeValue + fuelValue + funValue + otherValue;
    const goalBudget = budgetValue - catValue;
    let percentageGoal = Math.round((goalBudget / budgetValue) * 100);
    if (isNaN(percentageGoal) || percentageGoal < 0) {
        percentageGoal = 0;
    }

    const goalGradient = `#6e1da7 ${percentageGoal}%, transparent ${percentageGoal}%`;


    // Fun & Other Progress Bar function
    const funAndOtherValue = funValue + otherValue;
    let percentageCosts = Math.round((funAndOtherValue / catValue) * 100);
    if (isNaN(percentageCosts)) {
        percentageCosts = 0;
    } else if (percentageCosts > 100) {
        percentageCosts = 100;
    }

    const funAndOtherGradient = `#6e1da7 ${percentageCosts}%, transparent ${percentageCosts}%`;
   
    // Spent Progress Bar function
    let percentageSpent = Math.round((catValue / budgetValue) * 100);
    if (isNaN(percentageSpent)) {
        percentageSpent = 0;
    } else if (percentageSpent > 100) {
        percentageSpent = 100;
    }

    const spentGradient = `#6e1da7 ${percentageSpent}%, transparent ${percentageSpent}%`;


    return {
        percentageGoal,
        goalGradient,
        percentageCosts,
        spentGradient,
        funAndOtherValue,
        percentageSpent,
        funAndOtherGradient,
        catValue,
        goalBudget,
    };

}


// Spent Progress Bar
const spentProgressBar = document.querySelector('.spent-progressbar');

function enableBudgetBar(): void {
    const { percentageSpent, catValue, spentGradient } = allCategoriesValueCounting();
    if (spentProgressBar) {
        spentProgressBar.setAttribute('role', "progressBar");
        spentProgressBar.setAttribute('style', `background: conic-gradient(${spentGradient});`);
        spentProgressBar.setAttribute('aria-valuenow', percentageSpent.toString());
        spentProgressBar.setAttribute('aria-live', `${catValue}`);
    }
}
enableBudgetBar();


// Investment Progress Bar
const investmentProgressBar = document.querySelector('.investment-progressbar');

function enableInvestmentBar(): void {
    const {percentageCosts, funAndOtherValue, funAndOtherGradient} = allCategoriesValueCounting();
    if (investmentProgressBar) {
        investmentProgressBar.setAttribute('role', 'progressBar');
        investmentProgressBar.setAttribute('style', `background: conic-gradient(${funAndOtherGradient});`);
        investmentProgressBar.setAttribute('aria-valuenow', percentageCosts.toString());
        investmentProgressBar.setAttribute('aria-live', funAndOtherValue.toString());
    }
}
enableInvestmentBar();


// Goal progress bar
const goalProgressBar = document.querySelector('.goal-progressbar');

function enableGoalBar(): void {
    const {percentageGoal, goalBudget, goalGradient} = allCategoriesValueCounting();
    if (goalProgressBar) {
        goalProgressBar.setAttribute('role', 'progressBar');
        goalProgressBar.setAttribute('style', `background: conic-gradient(${goalGradient});`);
        goalProgressBar.setAttribute('aria-valuenow', percentageGoal.toString());
        goalProgressBar.setAttribute('aria-live', goalBudget.toString());
    }
}
enableGoalBar();