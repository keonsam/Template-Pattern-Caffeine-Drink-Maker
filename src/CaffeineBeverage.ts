export abstract class CaffeineBeverage {
  async prepareRecipe(): Promise<void> {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (await this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  boilWater(): void {
    console.log("Boiling Water");
  }

  abstract brew(): void;

  pourInCup(): void {
    console.log("Pouring into cup");
  }

  abstract addCondiments(): void;

  async customerWantsCondiments(): Promise<boolean> {
    return true;
  }
}