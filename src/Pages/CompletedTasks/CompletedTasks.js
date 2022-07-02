import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';

const CompletedTasks = () => {

    const [CompletedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        fetch(`https://tim-inukshuk-72807.herokuapp.com/tasks`)

            .then(res => res.json())
            .then(data => setCompletedTasks(data))
    }, [])

    return (
        <div>
            <h2 className='text-center font-bold mt-5 mb-8 text-4xl text-primary'>These are Completed Tasks:</h2> <br />
            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Done</th>
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
            <Footer></Footer>
        </div>
    );
};

export default CompletedTasks;