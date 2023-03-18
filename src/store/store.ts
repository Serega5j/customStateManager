export default class Store {
  sell = '';
  buy = '';

  setSell(str: string) {
    this.sell = str;
  }

  setBuy(str: string) {
    this.buy = str;
  }
}
