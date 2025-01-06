/*
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
*/

// Key Class 

class Key {
    private signature: number; 
    
    constructor() {
        this.signature = Math.floor(Math.random() * 1000);
    }

    getSignature(): number {
        return this.signature;
    }
}


class Person {
    private key: Key; 

    constructor (key: Key) {
        this.key = key;
}

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected tenats: Person[] = [];

    constructor(protected key: Key) {}

    comeIn (person: Person): void {
        if (this.door) {
            this.tenats.push(person);
            console.log('Welcome to the house!');
        } else {
            console.log('The door is closed');
        }

        }
        abstract openDoor(key: Key): void; // abstract method to open doors
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is open');
        } else {
            console.log('The key is not correct');
        }
    }
}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

console.log(house);

