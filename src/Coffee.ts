import { CaffeineBeverage } from "./CaffeineBeverage";
import prompts from "prompts";

export class Coffee extends CaffeineBeverage {
  async customerWantsCondiments(): Promise<boolean> {
    const { answer } = await prompts({
      type: "text",
      name: "answer",
      message: "Would you like milk and sugar with your coffee (y/n)? ",
      validate: value =>
        value === "y" || value === "n" ? true : "enter (y/n)",
    });
      return answer === "y" ? true : false;
  }

  brew(): void {
      console.log("Dripping Coffee through filter");
  }

  addCondiments(): void {
      console.log("Adding Sugar and Milk");
  }
}