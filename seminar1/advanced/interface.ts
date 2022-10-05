export interface Member {
    name: string;
    group: "ob" | "yb";
}

export interface Dinner {
    member: Member[];
    shuffle: (array: Member[]) => Member[];
    organize: (array: Member[]) => void;
}