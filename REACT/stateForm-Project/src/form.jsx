
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        userName: ""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            userName: ""
        });
    };   
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>User Name:</label>
                <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
