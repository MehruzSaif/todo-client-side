import React from 'react';
import IncompletedTasksTable from './IncompletedTasksTable';

const ToDo = () => {
    return (
        <div>
            <h1>These are incomplete tasks</h1>
            <IncompletedTasksTable></IncompletedTasksTable>
        </div>
    );
};

export default ToDo;