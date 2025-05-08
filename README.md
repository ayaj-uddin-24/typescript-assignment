### 1. What are some differences between interfaces and types in TypeScript?

---

1. Using **extends** keyword we can combine multiple interfaces together and using **intersection** we can combine multiple types.
2. **interface** is used only for object and **type** is used for any types like string, number, boolean etc. Type also can be used for object.
3. **interface** is commonly used for class and object. **type** is used for complex & union type.

---

### 2. What is type inference in TypeScript? Why is it helpful?

---

When any class brings data from another class and use it inside the new class, this is called type inheritance.

#### Why Important

1. Without writing same types again and again, we can create a class and using this we can create child class.
2. In larger project, using class is important. If we need to change any data types, we will just change the parent class.