class IsEven {
  /**
   * Checks if a number is even or odd.
   * @param x - The number to check. Only type 'number' is supported, other types such as string and bigint have their own method.
   * @param toCheck - Specify 'even' or 'odd' to have the direct result, default to "even".
   * @returns `true` if the number is as specified in `toCheck` params; `false` if is the opposite. So default to `true` for even; `false` for odd.
   * @throws {Error} If the input is not a valid integer; if no result has been found (very unlikely, won't trigger for most cases).
   */
  number = (x: number, toCheck: "even" | "odd" = "even"): boolean => {
    const err = new Error();
    // Check if number is integer
    const isFloat = !Number.isInteger(x);
    if (isFloat) {
      err.message = `Provided number must be an integer. You provided : ${x}`;
      throw err;
    }
    // Check if number is odd/even
    if (toCheck === "even") return x % 2 === 0;
    else if (toCheck === "odd") return x % 2 !== 0;
    // No solution
    else {
      err.message = `Error trying to analyze number. The provided number : ${x} has been found as nor even nor odd.`;
      throw err;
    }
  };

  /**
   * Checks if a number is even or odd.
   * @param x - The number to check. Only type 'string' is supported, other types such as number and bigint have their own method.
   * @param toCheck - Specify 'even' or 'odd' to have the direct result, default to "even".
   * @returns `true` if the number is as specified in `toCheck` params; `false` if is the opposite. So default to `true` for even; `false` for odd.
   * @throws {Error} If the input is not a valid integer; if no result has been found (very unlikely, won't trigger for most cases).
   */
  string = (x: string, toCheck: "even" | "odd" = "even"): boolean => {
    const err = new Error();
    // Check if number is integer
    const isFloat = x.includes(".") || x.includes(",");
    if (isFloat) {
      err.message = `Provided number must be an integer. You provided : ${x}`;
      throw err;
    }
    // Make string operatable
    const parsedString = parseInt(x);
    // Check if number is odd/even
    if (toCheck === "even") return parsedString % 2 === 0;
    else if (toCheck === "odd") return parsedString % 2 !== 0;
    // No solution
    else {
      err.message = `Error trying to analyze string. The provided string : ${x} has been found as nor even nor odd.`;
      throw err;
    }
  };

  /**
   * Checks if a number is even or odd.
   * @param x - The number to check. Only type 'bigint' is supported, other types such as number and string have their own method.
   * @param toCheck - Specify 'even' or 'odd' to have the direct result, default to "even".
   * @returns `true` if the number is as specified in `toCheck` params; `false` if is the opposite. So default to `true` for even; `false` for odd.
   * @throws {Error} If the input is not a valid integer; if no result has been found (very unlikely, won't trigger for most cases).
   */
  bigint = (x: bigint, toCheck: "even" | "odd" = "even"): boolean => {
    const err = new Error();
    // Get last number
    const stringifiedBigint = x.toString();
    const lastNumberString = stringifiedBigint[stringifiedBigint.length - 1];
    const lastNumber = parseInt(lastNumberString);
    // Check if number is odd/even
    if (toCheck === "even") return lastNumber % 2 === 0;
    else if (toCheck === "odd") return lastNumber % 2 !== 0;
    // No solution
    else {
      err.message = `Error trying to analyze bigint. The provided bigint : ${x} has been found as nor even nor odd.`;
      throw err;
    }
  };
}

export const isEven = new IsEven();
