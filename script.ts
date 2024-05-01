
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

const foodInput = document.querySelector('.food-input') as HTMLInputElement;
const foodPlusTag = document.querySelector('.food-plus');
const foodMinusTag = document.querySelector('.food-minus');
const foodCategory = document.querySelector('.food p');
const moneyIcon = document.querySelector('.bx.bx-euro');

let newCategoryValue: number;

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