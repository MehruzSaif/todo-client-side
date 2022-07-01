import React, { useEffect, useState } from 'react';

const IncompletedTasksTable = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tasks`)

            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    const taskCompleted = (e, task) => {
        fetch(`http://localhost:5000/task-complete/${task._id}`, {
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


    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Check</th>
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
                                        <label for="my-modal-3" class="btn modal-button">Edit</label>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box relative">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 class="text-lg font-bold">Edit your task</h3>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <button class="btn btn-success">Success</button>
                        </div>

                    </div>

                </table>
            </div>
        </div>
    );
};

export default IncompletedTasksTable;