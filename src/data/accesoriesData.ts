import Cap1 from '../assets/images/Accesories/Cap1.jpg';
import Cap2 from '../assets/images/Accesories/Cap2.jpg';
import Cap3 from '../assets/images/Accesories/Cap3.jpg';
import Bag1 from '../assets/images/Accesories/Bag1.jpg';
import Bag2 from '../assets/images/Accesories/Bag2.jpg';
import Bag3 from '../assets/images/Accesories/Bag3.jpg';
import Earrings1 from '../assets/images/Accesories/Earrings1.jpg';
import Ring1 from '../assets/images/Accesories/Ring1.jpg';
import Watch1 from '../assets/images/Accesories/Watch1.jpg';

interface Product {
    category: string;
    title: string;
    price: number;
    imageUrl: string;
};

const accesories: Product[] = [
    {
      category: 'BIŻUTERIA',
      title: 'Złoty kolczyk',
      price: 99.99,
      imageUrl: Earrings1,
    },
    {
      category: 'BIŻUTERIA',
      title: 'Zdobione pierścionki',
      price: 1650.00,
      imageUrl: Ring1,
    },
    {
      category: 'BIŻUTERIA',
      title: 'Srebrny naszyjnik',
      price: 120.00,
      imageUrl: Watch1,
    },
    {
      category: 'TORBY/PLECAKI',
      title: 'Torebka skórzana',
      price: 95.99,
      imageUrl: Bag1,
    },
    {
      category: 'TORBY/PLECAKI',
      title: 'Biały plecak',
      price: 179.99,
      imageUrl: Bag2,
    },
    {
      category: 'TORBY/PLECAKI',
      title: 'Beżowy plecak damski',
      price: 220.00,
      imageUrl: Bag3,
    },
    {
      category: 'NAKRYCIA GŁOWY',
      title: 'Czpka damska czarna',
      price: 70.00,
      imageUrl: Cap1,
    },
    {
      category: 'NAKRYCIA GŁOWY',
      title: 'Kolorowa czapka z daszkiem',
      price: 59.99,
      imageUrl: Cap2,
    },
    {
      category: 'NAKRYCIA GŁOWY',
      title: 'Szara czapka męska',
      price: 65.00,
      imageUrl: Cap3,
    },
];

export default accesories;