import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
            .catch(err => console.log(err));
    }, []);
    return (
        <section>
            <p className='text-primary font-bold text-center my-3'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='w-11/12 lg:w-4/5 mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    appointmentOptions.map((option, index) => <AppointmentOption
                        key={index}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;