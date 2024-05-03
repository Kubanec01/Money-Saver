// Variables
const introContainer = document.querySelectorAll('.introducing-container');
const welcomeContainer = document.querySelector('.welcome')
let newCategoryValue: number;
const moneyIcon = document.querySelector('.bx.bx-euro');


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


// Food Input Function
const foodInput = document.querySelector('.food-input') as HTMLInputElement;
const foodPlusTag = document.querySelector('.food-plus');
const foodMinusTag = document.querySelector('.food-minus');
const foodCategory = document.querySelector('.food p');

if (foodInput && foodPlusTag && foodCategory && moneyIcon) {
    // Nastavení události kliknutí na tlačítko foodPlusTag
    foodPlusTag.addEventListener('click', () => {
        // Získání hodnoty z foodInput a převedení na číslo
        const inputValue = parseFloat(foodInput.value);

        // Získání aktuální hodnoty textu v foodCategory, odstranění měnové ikony a převedení na číslo
        const currentCategoryValue = parseFloat(foodCategory.textContent!.replace(/\D/g, ''));

        // Pokud je vstupní hodnota platná, přičte se k aktuální hodnotě kategorie
        if (!isNaN(inputValue)) {
            newCategoryValue = inputValue + currentCategoryValue;
        }

        // Pokud je nová hodnota NaN (neplatná), neaktualizuje se nic
        if (!isNaN(newCategoryValue)) {
            // Aktualizace textu v foodCategory s novou číselnou hodnotou a přidáním ikony měny
            foodCategory.textContent = `${newCategoryValue} `;
            foodCategory.appendChild(moneyIcon);
        }
    });
} else {
    console.error('Některý z prvků nebyl nalezen.');
}

if (foodInput && foodMinusTag && foodCategory && moneyIcon) {

    foodMinusTag.addEventListener('click', () => {
        const inputValue = parseInt(foodInput.value);

        const currentCategoryValue = parseFloat(foodCategory.textContent!.replace(/\D/g, ''));

        if (!isNaN(inputValue)) {
            newCategoryValue = currentCategoryValue - inputValue;
        }
        
        if (!isNaN(newCategoryValue)) {
            foodCategory.textContent = `${newCategoryValue}`
            foodCategory.appendChild(moneyIcon);
        }
    })
} else {
    console.log("Error: Invalid input value")
}


// Home Input Function
const homeInput = document.querySelector('.home-input') as HTMLInputElement;
const homePlusTag = document.querySelector('.home-plus');
const homeMinusTag = document.querySelector('.home-minus');
const homeCategory = document.querySelector('.home p');

if (homeInput && homePlusTag && homeCategory && moneyIcon) {

    homePlusTag.addEventListener('click', () => {
        const inputValue = parseFloat(homeInput.value);

        const currentCategoryValue = parseFloat(homeCategory.textContent!.replace(/\D/g, ''));

        if (!isNaN(inputValue)) {
            newCategoryValue = inputValue + currentCategoryValue;
        }

        if(!isNaN(newCategoryValue)) {
            homeCategory.textContent = `${newCategoryValue}`
            homeCategory.appendChild(moneyIcon)
        }
    })
} else {
    console.log("Error: Invalid input value");
}

if (homeInput && homeMinusTag && homeCategory && moneyIcon) {

    homeMinusTag.addEventListener('click', () => {
        const inputValue = parseFloat(homeInput.value);
        
        const currentCategoryValue = parseFloat(homeCategory.textContent!.replace(/\D/g, ''));

        if (!isNaN(inputValue)) {
            newCategoryValue = currentCategoryValue - inputValue;
        }

        if(!isNaN(currentCategoryValue)) {
            homeCategory.textContent = `${newCategoryValue}`
            homeCategory.appendChild(moneyIcon)
        }
    })
} else {
    console.log("Error: Invalid input value");
}

// Fuel Input Function

const fuelInput = document.querySelector('.fuel-input') as HTMLInputElement;
const fuelPlusTag = document.querySelector('.fuel-plus');
const fuelMinusTag = document.querySelector('.fuel-minus');
const fuelCategory = document.querySelector('.fuel p');