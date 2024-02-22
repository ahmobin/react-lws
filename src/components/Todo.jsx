import {useState} from "react";

function Todo(){
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');
    const [count, setCount] = useState(0);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'You need JavaScript skill to complete the task. Do you have it?' : 'Good Job!';
        setTodo(inputValue);
        setWarning(warning);
    }

    return (
        <div>
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