interface MenuItem {
    [key: string]: string[];
}

interface MenuItems {
    [key: string]: MenuItem;
}

export const menuItems: MenuItems = {
    KOBIETA: {
        ODZIEŻ: ['Bluzki', 'Bluzy', 'Kamizelki', 'Koszule', 'Koszulki', 'Kurtki/Płaszcze', 'Marynarki', 'Polo', 'Spódnice', 'Sukienki', 'Swetry'],
        SPODNIE: ['Jeansy', 'Spodnie dresowe', 'Spodnie sztruksowe', 'Szorty'],
        OBUWIE: ['Botki', 'Kapcie', 'Klapki', 'Półbuty', 'Trampki', 'Sandały', 'Sneakersy', 'Śniegowce', 'Trapery', 'Trekkingi'],
        DODATKI: ['Akcesoria', 'Bielizna', 'Czapki/Kapelusze', 'Kosmetyki', 'Okulary', 'Paski', 'Portfele', 'Rękawiczki', 'Skarpetki', 'Szaliki/Apaszki', 'Torby/Plecaki']
    },
    MĘŻCZYZNA: {
        ODZIEŻ: ['Bluzki', 'Bluzy', 'Kamizelki', 'Koszule', 'Koszulki', 'Kurtki/Płaszcze', 'Marynarki', 'Polo', 'Spódnice', 'Sukienki', 'Swetry'],
        SPODNIE: ['Jeansy', 'Spodnie dresowe', 'Spodnie sztruksowe', 'Szorty'],
        OBUWIE: ['Botki', 'Kapcie', 'Klapki', 'Półbuty', 'Trampki', 'Sandały', 'Sneakersy', 'Śniegowce', 'Trapery', 'Trekkingi'],
        DODATKI: ['Akcesoria', 'Bielizna', 'Czapki/Kapelusze', 'Kosmetyki', 'Okulary', 'Paski', 'Portfele', 'Rękawiczki', 'Skarpetki', 'Szaliki/Apaszki', 'Torby/Plecaki']
    },
    DZIECKO: {
        ODZIEŻ: ['Bluzki', 'Bluzy', 'Kamizelki', 'Koszule', 'Koszulki', 'Kurtki/Płaszcze', 'Marynarki', 'Polo', 'Spódnice', 'Sukienki', 'Swetry'],
        SPODNIE: ['Jeansy', 'Spodnie dresowe', 'Spodnie sztruksowe', 'Szorty'],
        OBUWIE: ['Botki', 'Kapcie', 'Klapki', 'Półbuty', 'Trampki', 'Sandały', 'Sneakersy', 'Śniegowce', 'Trapery', 'Trekkingi'],
        DODATKI: ['Akcesoria', 'Bielizna', 'Czapki/Kapelusze', 'Kosmetyki', 'Okulary', 'Paski', 'Portfele', 'Rękawiczki', 'Skarpetki', 'Szaliki/Apaszki', 'Torby/Plecaki']
    },
    AKCESORIA: {
        AKCESORIA: ['Plecaki', 'Torby', 'Kolczyki', 'Naszyjniki']
    }
};

export const mainMenuItems: string[] = ['KOBIETA', 'MĘŻCZYZNA', 'DZIECKO', 'AKCESORIA', 'DEKORACJE'];