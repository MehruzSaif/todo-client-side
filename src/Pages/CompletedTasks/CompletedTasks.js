import React, { useEffect, useState } from 'react';

const CompletedTasks = () => {

    const [CompletedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tasks`)

            .then(res => res.json())
            .then(data => setCompletedTasks(data))
    }, [])

    return (
        <div>
            These are Completed Tasks: <br />
            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Check</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            CompletedTasks.map(completedTask => (completedTask.isComplete ?
                                <tr>
                                    <th>
                                        <label>
                                            <input checked type="checkbox" class="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div class="flex items-center space-x-3">

                                            <div>
                                                <div class="font-bold">{completedTask.taskName}</div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                : (<></>)

                            ))
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default CompletedTasks;