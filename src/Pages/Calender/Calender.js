import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import calender from '../../assests/calendar.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div class="hero min-h-screen">
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