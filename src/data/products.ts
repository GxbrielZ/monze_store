import Product1 from '../assets/images/products/Product1.jpg'
import Product2 from '../assets/images/products/Product2.jpg'
import Product3 from '../assets/images/products/Product3.jpg'
import Product4 from '../assets/images/products/Product4.jpg'
import Product5 from '../assets/images/products/Product5.jpg'
import Product6 from '../assets/images/products/Product6.jpg'
import Product7 from '../assets/images/products/Product7.jpg'

interface Product {
    id: number,
    image: string;
    title: string;
    price: number;
};

const products: Product[] = [
    {
        id: 1,
        image: Product1,
        title: 'Czerwone spodnie w paski',
        price: 115,
    },
    {
        id: 2,
        image: Product2,
        title: 'Białe ogrodniczki',
        price: 100,
    },
    {
        id: 3,
        image: Product3,
        title: 'Koszula w kratę',
        price: 70,
    },
    {
        id: 4,
        image: Product4,
        title: 'Biały t-shirt',
        price: 55,
    },
    {
        id: 5,
        image: Product5,
        title: 'Czarna bluzka',
        price: 130,
    },
    {
        id: 6,
        image: Product6,
        title: 'Niebieskie Jeansy',
        price: 90,
    },
    {
        id: 7,
        image: Product7,
        title: 'Biała koszulka',
        price: 45,
    },
];

export default products;