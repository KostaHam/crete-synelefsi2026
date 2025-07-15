/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Da das Skript mit 'defer' geladen wird, ist das DOM beim Ausführen garantiert bereit.

// Eine Liste von fünf Namen
const names = ["ΚΩΣΤΑΣ ΧΑΜΠΕΡΗΣ", "ΤΑΣΟΣ ΝΙΚΟΛΑΟΥ", "ΣΤΕΦΑΝΟΣ ΑΓΓΕΛΟΠΟΥΛΟΣ", "ΓΙΑΝΝΗΣ ΧΑΜΠΕΡΗΣ", "ΒΑΣΙΛΗΣ ΔΑΝΙΗΛ"];

// Die DOM-Elemente holen
const nameListElement = document.getElementById("name-list");
const totalSumElement = document.getElementById("total-sum");

// Funktion zum Berechnen und Aktualisieren der Gesamtsumme
function updateTotalSum() {
  if (!totalSumElement) return;

  const allInputs = document.querySelectorAll('.number-input');
  let total = 0;
  allInputs.forEach(input => {
    // Den Wert als Ganzzahl parsen, bei leerem Feld 0 annehmen
    total += parseInt(input.value, 10) || 0;
  });

  totalSumElement.textContent = total.toString();
}

// Sicherstellen, dass das Listenelement existiert
if (nameListElement) {
  // Durch die Namen iterieren und für jeden ein Listenelement erstellen
  names.forEach((name) => {
    const listItem = document.createElement("li");

    // Ein span-Element für den Namen erstellen
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;

    // Ein Eingabefeld für die Zahl erstellen
    const numberInput = document.createElement("input");
    numberInput.type = "number";
    numberInput.min = "0";
    numberInput.classList.add("number-input");
    numberInput.setAttribute("aria-label", `Zahl für ${name}`);

    // Event-Listener hinzufügen, um die Summe bei jeder Eingabe zu aktualisieren
    numberInput.addEventListener('input', updateTotalSum);

    // Den Namen und das Eingabefeld zum Listenelement hinzufügen
    listItem.appendChild(nameSpan);
    listItem.appendChild(numberInput);

    nameListElement.appendChild(listItem);
  });
}

// Die Summe initial berechnen (sollte 0 sein)
updateTotalSum();