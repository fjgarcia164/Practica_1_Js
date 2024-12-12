import { CardGenerator } from './cardGenerator.js';
import { UIDrag } from './drag.js';

document.addEventListener('DOMContentLoaded', () => {
    // Generar cartas en el contenedor con ID 'deck'
    const cardGenerator = new CardGenerator('deck');
    cardGenerator.generate();

    // Inicializar la funcionalidad de arrastrar y soltar
    UIDrag.init('.suit', '.card');
});
