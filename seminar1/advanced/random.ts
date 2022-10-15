import { Dinner, Food, Member } from "./interface";
import { food, member } from "./constants";

const dinner: Dinner = {
  member,
  food,
  shuffle(array: Member[] | Food[]){
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize({member, food}:Dinner){
    const [firstMember, secondMember] = this.shuffle(member);
    const [dinnerFood] = this.shuffle(food);

    console.log(`${firstMember.name}, ${secondMember.name} 둘이서 ${dinnerFood.name} 먹기!`);
  },
};

dinner.organize(dinner);