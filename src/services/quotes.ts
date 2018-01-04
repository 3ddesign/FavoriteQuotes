import {Quote} from '../data/quote.interface';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  public addQuoteToFavorites(quote: Quote): void {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  public removeQuoteFromFavorites(quote: Quote): void {
    const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
      return quoteElement.id === quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  public getFavoriteQuotes(): any {
    return this.favoriteQuotes.slice();
  }
}
