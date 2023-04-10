const input = document.querySelector('#basic-icon-default-fullname');
const table = document.querySelector('#table');
const rows = table.querySelectorAll('tr');


function filterRows() {
    const filterValue = input.value.toLowerCase(); // Valeur saisie par l'utilisateur, en minuscules pour faciliter la comparaison
    rows.forEach(row => {
        const text = row.textContent.toLowerCase(); // Contenu de la ligne, en minuscules
        if (text.includes(filterValue)) {
            row.style.display = ''; // Affichage de la ligne si elle contient la valeur recherchée
        } else {
            row.style.display = 'none'; // Masquage de la ligne sinon
        }
    });
}

// Écouteur d'événement sur la saisie dans l'input
input.addEventListener('input', filterRows);