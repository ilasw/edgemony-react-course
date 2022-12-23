// Hook(s) - 
import { useEffect, useState } from 'react';
import { Button } from '../../atoms/button/Button'
import { Text } from '../../atoms/text/Text'

export const Counter = (props) => {
    // funzione con due parametri
    // 1- Callback da eseguire in determinate circostanze
    // 2- Un array che definisce le circostanze, [dependencyArray]
    // useEffect(() => {
    //     // On mount
    //     console.log('sono uno useEffect con [] per dipendenza');

    //     // on unmount / destruction
    //     return () => {
    //         console.log('clean-up del componente');
    //         // localStorage.removeItem('counter');
    //     }
    // }, [])

    // // Viene eseguito ad ogni cambiamento di state
    // useEffect(() => {
    //     console.log('Sono matto');
    // })

    // useEffect(() => {
    //     console.log(`counter è cambiato, ora vale: ${counter}`)

    //     return () => {
    //         console.log('return di useEffect con dipendenza [counter]')
    //     }
    // }, [counter])

    // const initialCounter = Number(localStorage.getItem('counter')) ?? 0;
    const [counter, setCounter] = useState(0); // [ Valore, modificaDelValore() ] Tuple

    // const incrementFunction = () => {
    //     setCounter((lastValue) => {
    //         const newValue = lastValue + 1;
    //         console.log('updating counter', {lastValue, newValue});
    //         // localStorage.setItem('counter', newValue);
    //         return newValue;
    //     });
    //     // setCounter(counter + 1);
    // }

    return (
        <>
            <Text>Counter con useState: {counter}</Text>
            <Button
                onClick={() => setCounter(counter - 1)}
            >-1</Button>
            <Button
                onClick={() => setCounter(0)}
            >Reset</Button>
            <Button
                onClick={() => setCounter(counter + 1)}
            >+1</Button>
        </>
    )
}