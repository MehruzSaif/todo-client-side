import React from 'react';
import { toast } from 'react-toastify';
import ToDo from '../ToDo/ToDo';

const Home = () => {

    const enterKeyPressed = (e) => {
        if (e.key == "Enter") {
            // e.preventDefault();
            console.log(e.target.value);

            const task = {
                taskName: e.target.value,
            };

            const url = `https://tim-inukshuk-72807.herokuapp.com/add-task`;
            fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(task),
            })
                .then((res) => res.json())
                .then((inserted) => {
                    //   console.log(inserted);
                    if (inserted.success) {
                        alert("Task added successfully");
                        window.location.reload(true);
                    } else {
                        toast.error("Failed to add the task");
                    }
                });
        }
    };

    return (
        <div>
            <h2 className='text-center font-bold mt-5 mb-8 text-4xl text-secondary'>Add New Task</h2>
            <section className=" flex ml-5 mb-3 justify-center">
                <div class="form-control w-full max-w-xs">
                    <input
                        onKeyPress={enterKeyPressed}
                        type="text"
                        placeholder="Add a task & Press Enter Button"
                        class="input input-bordered w-full max-w-xs"
                    />
                </div>
            </section>

            <ToDo></ToDo>

        </div>
    );
};

export default Home;