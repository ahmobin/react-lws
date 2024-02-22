import {useState, useEffect} from "react";

function Todo(){
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'You need JavaScript skill to complete the task. Do you have it?' : 'Good Job!';
        setTodo(inputValue);
        setWarning(warning);
    }

    const tick = () => {
        setDate(new Date())
    }

    /*
    * useEffect calls on any changes on documents.
    * useEffect first parameter accept callback function which is works for changes
    * useEffect second parameter accept an array is use for getting decision to control the effect is being called or not.
    * useEffect second parameter accept an array and if the value is an empty array then it will set a value for first time then just changes effect.
    * reference: learn with summit react tutorial series, lesson 20, (at 22 minutes)
    * */
    useEffect(() => {
        document.title = `Clicked ${count} times`;
    },[count])

    useEffect(() => {
        console.log("Timer set") //this console will fall on very first time. cause for second param of useEffect is []
        const timer = setInterval(tick,1000)

        /*
        * is useEffect return a function, it works as unmount any state
        * reference: learn with summit react tutorial series, lesson 20, (at 29 minutes)
        * */
        return ()=>{
            clearInterval(timer)
        }
    },[])
    return (
        <div>
            <h3>Time : {date.toLocaleTimeString()}</h3>
            <p>{todo}</p>
            <p>
                <textarea name="todo" onChange={handleInput} value={todo} />
            </p>
            <hr/>
            <h2>{warning}</h2>

            <h1>{count}</h1>
            <button type="button" onClick={() => setCount((count) => count + 1)}>counter</button>
        </div>
    );
}

export default Todo;