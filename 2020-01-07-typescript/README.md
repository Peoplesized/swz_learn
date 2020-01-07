# 2020-01-07-testing-with-typescript tutorial

1. To setup typescript in a node environement we followed the following tutorial [Node.js QuickStart
   ](https://basarat.gitbook.io/typescript/nodejs)

2. We wrote a function that adds to numbers, the code for the function is a follows

```ts
export function add(a: number, b: number): number {
  return a + b;
}
```

## Testing

1. To configure testing we followed the following tutorial [Jest](https://basarat.gitbook.io/typescript/intro-1/jest)

2. To test the add function the following functions were wrote, and executed using `npm jest`

```ts
import { add } from './add';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

test('should fail', () => {
  expect(add(1, 2)).toBe(4);
});
```
