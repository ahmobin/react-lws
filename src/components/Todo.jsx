import {useState} from "react";

function Todo(){
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

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
        </div>
    );
}

export default Todo;