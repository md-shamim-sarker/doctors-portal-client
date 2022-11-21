import React, {useState} from 'react';
import {format} from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import {useQuery} from '@tanstack/react-query';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);

    /* const {data: appointmentOptions = []} = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())
    }); */

    const {data: appointmentOptions = []} = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentOptions');
            const data = await res.json();
            return data;
        }
    });

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