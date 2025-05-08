function formatString(input: string, toUpper?: boolean): string {
  return toUpper === undefined || toUpper
    ? input.toUpperCase()
    : input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}
class Vehicle {
  constructor(private make: string, private year: number) {}

  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  const mostExpensiveProduct = products.reduce((maxPrice, currentPrice) =>
    maxPrice.price > currentPrice.price ? maxPrice : currentPrice
  );

  return mostExpensiveProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number is not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
