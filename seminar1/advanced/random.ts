import { Dinner, Member } from "./interface";
import member from "./member";

const dinner: Dinner = {
  member: member,
  shuffle(array: Member[]){
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array: Member[]){
    const dinnerMember = this.shuffle(array);
    
    console.log(`결과 ${dinnerMember[0].name}, ${dinnerMember[1].name}`);
  },
};

dinner.organize(dinner.member);