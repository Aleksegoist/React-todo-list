import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

function App() {
    const [tasks, setTasks] = useState([]);

    const [input, setInput] = useState('');

    // Add tasks
    const handleSubmit = (event) => {
        event.preventDefault();
        const addTask = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            comleted: false,
        };
        setTasks([...tasks, addTask]);
        setInput('');
    };

    // Delete tasks
    const deleteTask = (id) => {
        let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id);
        setTasks(filteredTasks);
        console.log('task deleted');
    };
    // Toggle completed task
    const toggleComlete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const date = new Date();
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'November',
        'December',
    ];

    return (
        <div className='app'>
            <div className='container'>
                <h1>
                    <FaReact />
                    TO DO LIST
                </h1>

                <div className='date'>
                    <p>{days[date.getDay()]}</p>
                    <p>{date.getDate()},</p>
                    <p>{months[date.getMonth()]}</p>
                    <p>{date.getUTCFullYear()}</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='form-input'>
                        <AiOutlinePlus className='icon' />
                        <input
                            placeholder='Enter your task'
                            type='text'
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                        />
                    </div>
                </form>

                <div>
                    {tasks.map((task) => (
                        <div
                            className={`task-row ${
                                task.completed ? 'completed' : ''
                            }`}
                            key={task.id}
                            onDoubleClick={() => toggleComlete(task.id)}
                        >
                            <p>{task.text}</p>
                            <AiOutlineClose
                                onClick={() => deleteTask(task.id)}
                                className='icon'
                            />
                        </div>
                    ))}
                </div>
                <p className='length'>
                    {tasks < 1
                        ? 'You have not any tasks'
                        : `You have: ${tasks.length} tasks`}
                </p>
            </div>
        </div>
    );
}

export default App;
