interface MenuItem {
    name: string;
    link: string;
}

const menuData: MenuItem[] = [
    { name: 'Kobieta', link: '/woman' },
    { name: 'Mężczyzna', link: '/man' },
    { name: 'Dziecko', link: '/child' },
    { name: 'Akcesoria', link: '/accesories' },
    { name: 'Dekoracje', link: '/decorations' }
];

export default menuData;