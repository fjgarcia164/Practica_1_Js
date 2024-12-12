export class CardGenerator {
    constructor(deckId) {
        this.deck = document.getElementById(deckId);
        this.suits = ['hearts', 'diamonds', 'spades', 'clubs'];
        this.symbols = { hearts: '♥', diamonds: '♦', spades: '♠', clubs: '♣' };
    }

    generate() {
        for (let i = 1; i <= 10; i++) {
            this.suits.forEach(suit => {
                const card = document.createElement('div');
                card.className = `card ${suit}`;
                card.textContent = `${i} ${this.symbols[suit]}`;
                card.id = `${suit}-${i}`; // Unique ID for each card
                card.draggable = true;
                this.deck.appendChild(card);
            });
        }
    }
}
