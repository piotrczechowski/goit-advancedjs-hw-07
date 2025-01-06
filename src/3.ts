/*
  You are creating a game with characters of different roles. Currently, you are working on a `Wizard` class, which should implement two interfaces: `ICharacter` and `ISpellCaster`.

Define the interfaces `ICharacter` and `ISpellCaster` to match the requirements of the `Wizard` class.  
The `ICharacter` interface should include the properties `name` and `level` as well as the methods `introduce` and `levelUp`.  
The `ISpellCaster` interface should include the `castSpell` method.
*/

// Wizard class

interface ICharacter {
  name: string;
  level: number;
  introduce(phrase: string): void;
  levelUp(): void;
}

interface ISpellCaster {
  castSpell(): void;
}

class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('I put a spell on you! :) ');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level ${this.name} is ${this.level}`);
  }
}


const wizard = new Wizard('Alice', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp();  // Level up! New level is 16

