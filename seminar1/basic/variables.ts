const a: string = 'hello';
console.log(typeof a, a);

const test2: number = 3;
console.log(typeof test2, test2);

const test3: boolean = true;
console.log(typeof test3, test3);

const test4: number = 5;

const numbers: number[] = [1,2,3];

const strings: Array<string> = ['1','2','3'];

const foo1 = (a:Object) => {
    console.log(a);
}

const foo2 = (a:object) => {
    console.log(a);
}

foo1('hello');
// foo2('hello'); //string은 소문자 object에 쓸 수 없다.