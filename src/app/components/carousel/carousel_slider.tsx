import CarouselItem from "./carousel_item";

const carosuelItems = [
    {
        imageUrl: 'https://s3-alpha-sig.figma.com/img/f0bc/acb0/23cb4e82fd6314e321aa50b897859ecd?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hmSPrDAZM6i1rKqSq7qIRzGFVZiJyn6mGKMOY6minsWwiH3HEnvof2kOJQ8pLF0NdarvZwuUHC7YrDvupH2wIIhrmElH4pLjGswekYHZnJigwC~ovEMe8UgAeCyCE-4NGBl8oikEjcUjzSuY89lP6DLV3vFTK9BFyvP1-Cc0n3APHThJ5XGrC5FiW4k4FNwaUbmWg-ueMhYTyZo0J56kCCiaERAA7YC~25k6kGFikam8MoRs6sMNgNwdQz-KnPnq6anLPxcGixC-9ypuFkq-q4JLRKvJz01HHSj15KZ3ZYKEYF~g2ivgDVHxPsimAfyagNLMyQcH133CoZbWETSsPA__',
        title: '50+ Best creative website themes & templates',
        content: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. '
    },
    {
        imageUrl: 'https://s3-alpha-sig.figma.com/img/2aec/afcb/c1ace008ed892accbcbf654c605f0a82?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VPi7l3J-Un8m184jFzZ9hLmMAd8TUpkDVeMy-bLjl9TWJmOYqDiowWy0Pnf~6NA7vzSj3RU7TXR8XR4lsTPxUOIL9s5Wmx34SiKPz9aTPn557koNdzL49Wp1RpiiHdIYj6Keqtrklz4ptw10rGyAdEeNYIbFEfzZwBckSr~-ZPlxqdeCFC2QE9eKz8KhfCs2PhTC2slCsIx58ACc40AkgQT5R57SX8uE8D3816LxBtbl1mszoA9zGr0KAduavOB2zLhtw5KIuQ6xbG4NB-k-Lh1~yzcFLHI885QWQLJqwVt-lqhtOzUXpnS10D1QINyyetL41opPQjQn3oX3lCkqQw__',
        title: '50+ Best creative website themes & templates',
        content: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. '
    },
    {
        imageUrl: 'https://s3-alpha-sig.figma.com/img/1af3/2e6e/4f67843ccf8cafa2ab39105855a675c6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jlVVVP2rdKvlEimB6ytaCzsxyqiuOvIPtZWN8GgZ41X2LCjkDfJTqJsLH~o1xo1iLyTlGXhBtHrlmtKogEzc-~7aICEr8gkj9BqZ3j5-EA~msSLJEED3fqLUMCefjHOiI3Rwi0pq08neayxc9ZI4~cjuNDoSIY1rnljRwm3Wj4Tjr1fAul2AJRmUvUK8Tst2GoN52LvKvVKZGeV3a1VJZai7DcaqIowY~R0Tjjr7pZRJ7Grb8lE-~Ozjgm7vYQxI4T-7BlBtQjcxUHZk~XX7kNEkhqde5uMkzOid7B372eargVGVxberm19qL2RZZEyaFhfON81TDlqQZ1LKKR18ug__',
        title: '50+ Best creative website themes & templates',
        content: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. '
    },
];
const CarouselSlider = () => {
    const children = []
    const items = Array.from({ length: 8 }, (key: number, index: number) => {
        return carosuelItems[index % 3];
    });
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        children.push(
            <CarouselItem
                key={index}
                imageUrl={element.imageUrl}
                alt={"Image of " + element.title}
                title={element.title}
                content={element.content}
            />
        );

    }

    return (
        <div className="flex flex-row gap-[12px] overflow-y-scroll no-scrollbar mt-[24px] mb-[48px]">
            {children}
        </div>
    );
};

export default CarouselSlider;