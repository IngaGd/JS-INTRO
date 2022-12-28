console.clear();

// komentarai, kurie prasideda "KOMENTARAS" nera spausdinami i console 🎅🚀📚

import { Shop2 } from './Shop2.js';


const onlineKioskas = new Shop2('Meskiuko kioskas', 'EUR');

onlineKioskas.intro();
// Hi, we are "Meskiuko kioskas".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.

onlineKioskas.addItem('obuolys', 130);
// KOMENTARAS: pavadinimas mazosiomis
// "Meskiuko kioskas" sells obuolys for 1.30 EUR now!

onlineKioskas.addItem('morka', 65);
// "Meskiuko kioskas" sells morka for 0.65 EUR now!

onlineKioskas.addItem('arbata', 95);
// "Meskiuko kioskas" sells arbata for 0.95 EUR now!

onlineKioskas.addItem('bulves', 135);
// "Meskiuko kioskas" sells bulves for 1.35 EUR now!

onlineKioskas.addItem('cepelinai', 195);
// "Meskiuko kioskas" sells cepelinai for 1.95 EUR now!

onlineKioskas.items();
// KOMENTARAS: pavadinimai "gramatiskai taisyklingai"
// Items for sale at "Meskiuko kioskas":
// ====================
// 1) Obuolys - 1.30 EUR;
// 2) Morka - 0.65 EUR;
// 3) Arbata - 0.95 EUR;
// 4) Bulves - 1.35 EUR;
// 5) Cepelinai - 1.95 EUR;
// ====================

onlineKioskas.updatePrice('bulves', 90);
// "Meskiuko kioskas" updated price and sells bulves for 0.90 EUR now!

onlineKioskas.createCart('Augustas');
// Augustas have an open cart at "Meskiuko kioskas"!

onlineKioskas.createCart('Barbora');
// Barbora have an open cart at "Meskiuko kioskas"!