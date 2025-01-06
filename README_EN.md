
# Programming Tasks

This document outlines four programming tasks in TypeScript.

## Task 1  
Create a `Student` class with three properties: `name`, `age`, and `grade`. Instead of declaring these properties in the class body, assigning them in the constructor, and then giving them values, use shorthand initialization.

---

## Task 2  
Create two classes: `Employee` and `Manager`.

The `Employee` class should include:
- a `name` property accessible to everyone,
- a `department` property accessible only within the `Employee` class,
- a `salary` property accessible only within the `Employee` class and its subclasses.

The `Manager` class should be a subclass of `Employee`.  

Implement a constructor in the `Manager` class that calls the superclass constructor and increases the `salary` by 10,000.

---

## Task 3  
You are creating a game with characters of different roles. Currently, you are working on a `Wizard` class, which should implement two interfaces: `ICharacter` and `ISpellCaster`.

Define the interfaces `ICharacter` and `ISpellCaster` to match the requirements of the `Wizard` class.  
The `ICharacter` interface should include the properties `name` and `level` as well as the methods `introduce` and `levelUp`.  
The `ISpellCaster` interface should include the `castSpell` method.

---

## Task 4 *  
Simulate a scenario where a person interacts with a key and a house.

**Key (Key):**  
Create a `Key` class. It should have a private property `signature` that is randomly generated when an object of this class is created (e.g., using `Math.random()`). This class should also have a method `getSignature` that returns the value of the `signature` property.

**Person (Person):**  
Create a `Person` class. The constructor of this class takes an object of the `Key` class and stores it in a private property `key`. The `Person` class should have a method `getKey` that returns the stored key.

**House (House):**  
Create an abstract `House` class. This class should have two properties:  
- `door`, which can be either open (`true`) or closed (`false`),  
- `key`, which stores an object of the `Key` class.  

The `House` class should also have a `comeIn` method that adds an object of the `Person` class to a `tenants` array if the `door` is open. Additionally, the `House` class should have an abstract method `openDoor`, which takes an object of the `Key` class.

**My House (MyHouse):**  
Create a `MyHouse` class that inherits from the abstract `House` class. Implement the `openDoor` method in this class. If the key passed to this method matches the key stored as `key`, the door opens.

After implementing all the classes, create objects for each class and try to reproduce a scenario where a person comes home.

For example:

```typescript
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```
