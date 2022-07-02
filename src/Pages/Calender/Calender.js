import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import calender from '../../assests/calendar.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <h2 className='text-center font-bold mt-5 mb-4 text-4xl text-primary'>This is calender</h2>
            <div class="hero mb-5">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={calender} alt='Calender image' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Calender;