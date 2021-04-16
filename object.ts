enum LineUp { MACBOOK_AIR=1, MACBOOK_PRO, IMAC, MAC_PRO='MAC_PRO', MAC_MINI='MAC_MINI'};

const information: {   // information:{}= {}   // information:object = { }    
    name: string;
    price: number;
    functions: string[];
    production: [number, string]; // fixed length array is called tuple.    any[]
    weight: number;
} = {
    name: 'Macbook',
    price: 2000, // dollar
    functions: ['Helping your works', 'Playing music'],
    production: [2016, 'China'],
    weight: 1.79  // kg
}


console.log(LineUp[1]); // MACBOOK_AIR
console.log(LineUp[2]); // MACBOOK_PRO
console.log(LineUp); // {
                     //     '1': 'MACBOOK_AIR',
                     //     '2': 'MACBOOK_PRO',
                     //     '3': 'IMAC',
                     //     MACBOOK_AIR: 1,
                     //     MACBOOK_PRO: 2,
                     //     IMAC: 3,
                     //     MAC_PRO: 'MAC_PRO',
                     //     MAC_MINI: 'MAC_MINI'
                     // }