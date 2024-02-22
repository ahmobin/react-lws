import {useState, useCallback, useMemo} from "react";
import Title from "./Title.jsx";
import ShowCount from "./ShowCount.jsx";
import Button from "./Button.jsx";

function Increment(){

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const incrementByOne = useCallback(() => {
        setCount1(prevState => prevState + 1)
    },[])

    const incrementByFive = useCallback(() => {
        setCount2(prevState => prevState + 5)
    },[])

    const evenOrOdd = useMemo(() => {
        let i = 0;
        while (i<100000000) i += 1;
        return count1 % 2 === 0;
    },[count1])

    return (
        <div className="app">
            <Title/>
            <hr/>
            <ShowCount count={count1} title="Counter 1"/>
            <span>{evenOrOdd ? 'Even' : 'Odd' }</span>
            <Button handleClick={incrementByOne}>Increment By One</Button>
            <hr/>
            <ShowCount count={count2} title="Counter 1"/>
            <Button handleClick={incrementByFive}>Increment By Five</Button>
        </div>
    )
}

export default Increment;