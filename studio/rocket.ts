import { Cargo } from "./cargo";
import { Astronaut } from "./astronaut";
import { Payload } from "./Payload";

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  public sumMass(items: Payload[]): number {
    let total: number = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].massKg;
    }
    return total;
  }

  public currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }

  public canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  public addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }

  public addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
