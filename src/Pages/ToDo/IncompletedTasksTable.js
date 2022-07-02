import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IncompletedTasksTable = () => {

    const [tasks, setTasks] = useState([]);

    const [response, setResponse] = useState({});

    if (response.acknowledged == true && response.modifiedCount == 1) {
        window.location.reload(true);
    }


    useEffect(() => {
        fetch(`https://tim-inukshuk-72807.herokuapp.com/tasks`)

            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    const taskCompleted = (e, task) => {
        fetch(`https://tim-inukshuk-72807.herokuapp.com/task-complete/${task._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged == true && data.modifiedCount == 1) {
                    //navigate to Inventory List
                    window.location.reload(true);
                }
            });
    };

    const handleClick = (task) => {
        // console.log(task.taskName);
        let value = prompt("Edit your task", task.taskName);
        console.log("value: ", value);

        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                taskName: value,
            }),
        };

        fetch(`https://tim-inukshuk-72807.herokuapp.com/edit-task/${task._id}`, requestOptions)
            .then((res) => res.json())
            .then((data) => setResponse(data));
    };


    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Done</th>
                            <th>Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tasks.map(task => (task.isComplete ? (<></>) :
                                <tr>
                                    <th>
                                        <label>
                                            <input onChange={(e) => {
                                                taskCompleted(e, task);
                                            }} type="checkbox" class="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div class="flex tasks-center space-x-3">

                                            <div>
                                                <div class="font-bold">{task.taskName}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <a onClick={() => handleClick(task)} className="btn">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default IncompletedTasksTable;