export class ClassExample {
  constructor(el) {
    this.el = el;
    if (this.el.textContent.length > 0) {
      console.log(
        `Contents of title from classical component: ${this.el.textContent}`
      );
    }
  }
}
