import { add } from './add';

test('add',()=>{
    expect(add(1,2)).toBe(3)
});

test('should fail',()=>{
    expect(add(1,2)).toBe(4)
});





