import { Race } from './race';
import { PONIES } from './ponies-mock';

export const RACES: Race[] = [
    {
        id: 1, location: 'Aquastria', date: new Date('18 Octobre 2018'), ponies:
            [PONIES[1], PONIES[2]]
    },
    {
        id: 2, location: 'Canterlot', date: new Date('19 Octobre 2018'), ponies:
            PONIES
    },
    {
        id: 3, location: 'Griffonroche', date: new Date('19 Octobre 2018'), ponies:
        [PONIES[1], PONIES[3], PONIES[2]]
    }
];
