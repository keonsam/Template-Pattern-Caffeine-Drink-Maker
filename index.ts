import { Coffee } from "./src/Coffee";
import { Tea } from "./src/Tea";

class DrinkMaker {
  static async main() {
    const tea = new Tea();
    console.log("\n Making tea....");
    await tea.prepareRecipe();
    const coffee = new Coffee();
    console.log("\n Making coffee....");
    await coffee.prepareRecipe();
  }
}

DrinkMaker.main();