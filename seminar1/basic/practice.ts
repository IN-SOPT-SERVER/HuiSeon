interface Info {
    name: string;
    age: number;
    area: string;
    like: string;
}

const members: Info[] = [
    {
        name: '남지윤',
        age: 23,
        area: '공덕',
        like: '너',
    },
    {
        name: '전희선',
        age: 24,
        area: '산본',
        like: '커피',
    },
    {
        name: '최승빈',
        age: 24,
        area: '역곡',
        like: '피자',
    },
    {
        name: '이용택',
        age: 25,
        area: '성수',
        like: '떡볶이',
    },
]

members.map((item)=>console.log(`나는야 ${item.name}! ${item.age}살! ${item.area}에 살지! 좋아하는건 바로 ${item.like}`));