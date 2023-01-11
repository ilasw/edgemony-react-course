import { Button } from '../../atoms/button/Button';
import { useEffect, useState } from 'react';

const MAX_NUMBERS = 6;

export function Lottery() {

    const [numbers, setNumbers] = useState([]);
    const countOfNumbers = numbers.length;

    // const getRandomArrayOfNumbers = () => {
    //     const allNumbers = Array.from({length: 90}, (item, index) => index + 1); // [undefined*90]
    //     const sortedNumbers = allNumbers.concat([]).sort((a, b) => {
    //         return Math.random() - .5;
    //     })
    //     console.log({allNumbers, sortedNumbers})
    // }
    // getRandomArrayOfNumbers()

    useEffect(() => {
        console.log('sono dentro il useEffect')
    }, [])

    console.log('componente ri-eseguito');

    const getRandomNumber = () => (Math.floor(Math.random() * 90) + 1);

    const drawNumber = () => {
        setNumbers(oldNumbers => {
            if (oldNumbers.length === MAX_NUMBERS) {
                return oldNumbers;
            }

            let isUnic = false;
            let newNumber;

            while (!isUnic) {
                newNumber = getRandomNumber();

                if (!oldNumbers.includes(newNumber)) {
                    isUnic = true;
                }
            }

            return [...oldNumbers, newNumber]
        })
    };

    return (<section>
        <h1>Lottery</h1>
        <p>Numeri estratti: {numbers.join(',')}</p>

        <Button disabled={countOfNumbers >= MAX_NUMBERS}
            onClick={() => drawNumber()}
        >Nuova estrazione</Button>
    </section>)
}