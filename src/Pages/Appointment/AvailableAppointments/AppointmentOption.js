import React from 'react';

const AppointmentOption = ({appointmentOption, setTreatment}) => {
    const {name, slots} = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-xl text-center">
            <div className="card-body justify-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try another day."}</p>
                <p>Available Space: {slots.length}</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;