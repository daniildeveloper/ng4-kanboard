import { CardShema } from './cardshema';

export class CardStore {
  cards: Object = {};

  lastId = -1;

  /**
   * card
   * @param card CardShema with needed card
   */
  _addCard(card: CardShema) {
    card.id = String(++this.lastId);
    this.cards[card.id] = card;

    return (card.id);
  }

  /**
   * get card by id
   * @param cardId card
   */
  getCard(cardId: string) {
    return this.cards[cardId];
  }

  newCard(description: string): string {
    const card = new CardShema();
    card.description = description;

    return (this._addCard(card));
  }
}
