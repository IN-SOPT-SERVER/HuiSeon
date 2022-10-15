//타입단언
const test11: any = '저니선';
const nameLength = (test11 as string).length;
console.log(nameLength);

const test12: any = '쥰쥬닝';
const nameLength2 = (<string>test12).length;
console.log(nameLength2);