# isEven v1.0.1 : Check if a number is odd/even.

## A lightweight library to test whether a number is odd or even.

Supports various data types such as number, string as well as bigint. All the methods have the proper typing and documentation.

## How to use this library ?

1. Install the library via npm

```powershell
npm install @oriano-dev/is-even
```

2. Import the library in your project

```javascript
import { isEven } from "@oriano-dev/is-even";
```

3. Use the methods anytime in your project

```javascript
isEven.number(24, "even"); // true
isEven.number(-5, "even"); // false
isEven.string("231", "odd"); // true
isEven.bigint(456257262842n, "even"); // true
```

### Tech behind the library

- Language used : **TypeScript** and JavaScript
- Testing library : Jest
- Programming paradigm : Object Oriented Programming (OOP)

This library has been released in about **5 hours** over 1 morning.
