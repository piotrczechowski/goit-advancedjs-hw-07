/*
  You are creating a game with characters of different roles. Currently, you are working on a `Wizard` class, which should implement two interfaces: `ICharacter` and `ISpellCaster`.

Define the interfaces `ICharacter` and `ISpellCaster` to match the requirements of the `Wizard` class.
The `ICharacter` interface should include the properties `name` and `level` as well as the methods `introduce` and `levelUp`.
The `ISpellCaster` interface should include the `castSpell` method.
*/
class Wizard {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        if (this.level < 1) {
            throw new Error('Level too low');
        }
    }
    introduce(phrase) {
        console.log(phrase + ', ' + this.name);
    }
    castSpell() {
        console.log('Casting a spell, behold my power!');
    }
    levelUp() {
        this.level++;
        console.log(`Level up! New level is ${this.level}`);
    }
}
const wizard = new Wizard('Merlin', 15);
wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
export {};
//# sourceMappingURL=3.js.map