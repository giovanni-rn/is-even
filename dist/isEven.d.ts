declare class IsEven {
  number(x: number, toCheck?: "even" | "odd"): boolean;
  string(x: string, toCheck?: "even" | "odd"): boolean;
  bigint(x: bigint, toCheck?: "even" | "odd"): boolean;
}

declare const isEven: IsEven;

export { isEven };
