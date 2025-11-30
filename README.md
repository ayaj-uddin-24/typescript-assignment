### 1. What are some differences between interfaces and types in TypeScript?

1. Using the **extends** keyword, we can combine multiple interfaces, and using **intersection** we can combine multiple types.
2. **interface** is used only for objects, and **type** is used for any types like string, number, boolean, etc. Type can also be used for objects.
3. **interface** is commonly used for classes and objects. **type** is used for complex & union type.

### 2. What is type inference in TypeScript? Why is it helpful?

When a class brings data from another class and uses it inside the new class, this is called type inheritance.

### Why Important

1. Without writing the  same types again and again, we can create a class and use it can create a child class.
2. In a larger project, using a class is important. If we need to change any data types, we will just change the parent class.
