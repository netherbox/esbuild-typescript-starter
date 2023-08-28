export class HelloWorld {
  private message: string = "TypeScript: Hello, World!";

  public showMessage(): void {
    let heading = document.createElement("h1");
    heading.textContent = this.message;

    document.body.appendChild(heading);
  }
}
