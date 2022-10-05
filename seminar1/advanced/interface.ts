export interface Member {
    name: string;
    group: "ob" | "yb";
}

export interface Food {
    name: string;
    group: "한식" | "일식" | "중식" | "양식";
}

export interface Dinner {
    member: Member[];
    food: Food[];
    shuffle: (array: Member[] | Food[]) => Member[] | Food[];
    organize: ({member, food}:Dinner) => void;
}