import React from 'react';
import Footer from '../Shared/Footer';
import IncompletedTasksTable from './IncompletedTasksTable';

const ToDo = () => {
    return (
        <div>
            <h1 className='text-center font-bold mt-5 mb-8 text-4xl text-primary'>These are incomplete tasks</h1>
            <IncompletedTasksTable></IncompletedTasksTable>

            <div className='mt-5'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ToDo;