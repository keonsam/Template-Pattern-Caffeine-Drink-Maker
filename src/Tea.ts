import { CaffeineBeverage } from "./CaffeineBeverage";
import prompts from "prompts";

export class Tea extends CaffeineBeverage {
  async customerWantsCondiments(): Promise<boolean> {
    const { answer } = await prompts({
      type: "text",
      name: "answer",
      message: "Would you like lemon with your tea (y/n)? ",
      validate: value =>
        value === "y" || value === "n" ? true : "enter (y/n)",
    });
    return answer === "y" ? true : false;
  }

  brew(): void {
    console.log("Steeping the tea");
  }

  addCondiments(): void {
    console.log("Adding lemon");
  }
}
