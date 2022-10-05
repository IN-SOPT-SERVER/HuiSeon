interface SOPT {
    name: string;
    age: number;
    isSOPT?: boolean;
}

const introduce: SOPT = {
    name:'전희선',
    age: 24,
    isSOPT: true,
}

const intro: SOPT = {
    name:'전희선',
    age: 24,
}

const introduces: SOPT[] = [
    {
        name:'전희선',
        age: 24,
        isSOPT: true,
    },
    {
        name:'저니선',
        age: 5,
    },
    {
        name:'썬썬',
        age: 18,
        isSOPT: true,
    },
]