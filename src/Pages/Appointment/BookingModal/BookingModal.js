import React, {useContext} from 'react';
import {format} from 'date-fns';
import {AuthContext} from '../../../contexts/UserContext';

const BookingModal = ({treatment, setTreatment, selectedDate}) => {
    const {user} = useContext(AuthContext);
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PP');
    console.log(user);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone
        };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(booking)
        }).then(() => {
            setTreatment(null);
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='w-full grid grid-cols-1 gap-y-2'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" value={user?.displayName} disabled className="input input-bordered w-full" />
                        <input name='email' type="email" value={user?.email} disabled className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <button type="submit" htmlFor="my-modal-5" className="btn w-full">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;