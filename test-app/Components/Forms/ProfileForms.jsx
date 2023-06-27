import React from 'react';

const PersonalInfoInput = ({ title, onChange, values, errors }) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="nationalId" className="block mb-1">National ID Number *</label>
                <input
                    type="text"
                    id="nationalId"
                    className={`w-full border rounded-md px-3 py-2 ${errors.nationalId ? 'border-red-500' : 'border-gray-300'}`}
                    value={values.nationalId}
                    onChange={onChange}
                    name="nationalId"
                    required
                />
                {errors.nationalId && <small className="text-red-500">{errors.nationalId}</small>}
            </div>

            <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name *</label>
                <input
                    type="text"
                    id="name"
                    className={`w-full border rounded-md px-3 py-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    required
                />
                {errors.name && <small className="text-red-500">{errors.name}</small>}
            </div>

            <div className="mb-4">
                <label htmlFor="surname" className="block mb-1">Surname *</label>
                <input
                    type="text"
                    id="surname"
                    className={`w-full border rounded-md px-3 py-2 ${errors.surname ? 'border-red-500' : 'border-gray-300'}`}
                    value={values.surname}
                    onChange={onChange}
                    name="surname"
                    required
                />
                {errors.surname && <small className="text-red-500">{errors.surname}</small>}
            </div>

            <div className="mb-4">
                <label htmlFor="dateOfBirth" className="block mb-1">Date of Birth *</label>
                <input
                    type="date"
                    id="dateOfBirth"
                    className={`w-full border rounded-md px-3 py-2 ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'}`}
                    value={values.dateOfBirth}
                    onChange={onChange}
                    name="dateOfBirth"
                    required
                />
                {errors.dateOfBirth && <small className="text-red-500">{errors.dateOfBirth}</small>}
            </div>
        </div>
    );
};

export default PersonalInfoInput;
