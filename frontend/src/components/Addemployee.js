import React, { useState, useEffect } from "react";
import HeaderHR from "./HeaderHR";
import { useNavigate, useParams } from 'react-router-dom';

function Addemployee() {
    const [formData, setFormData] = useState({
        fullname: "",
        empID: "",
        desigination: "",
        email: "",
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const { id } = useParams(); // Get the ID from the URL
    const isUpdateMode = !!id; // Check if we are in update mode

    useEffect(() => {
        if (isUpdateMode) {
            // We are in update mode, fetch the employee data for the given ID
            // Make an API request to fetch the employee data based on the ID
            fetch(`http://127.0.0.1:8000/getemployee_updates/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setFormData(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [isUpdateMode, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Determine whether we are in "add" or "update" mode
        if (isUpdateMode) {
            // We are in update mode, make an API request to update employee data
            fetch(`http://127.0.0.1:8000/UpdateUser/${id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    // Handle success, e.g., show a success message
                    console.log('Employee data updated successfully');
                    navigate('/hrhome');
                } else if (response.status === 409) {
                    // Handle error, e.g., show an error message
                    alert('Employee ID already exists.');
                } else {
                    console.error('Error updating employee data');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            // We are in add mode, make an API request to add employee data
            fetch('http://127.0.0.1:8000/AddemployeeData/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    // Handle success, e.g., show a success message
                    console.log('Employee data added successfully');
                    navigate('/hrhome');
                } else if (response.status === 409) {
                    // Handle error, e.g., show an error message
                    alert('Employee ID already exists.');
                } else {
                    console.error('Error adding employee data');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    };

    return (
        <div>
            <HeaderHR />
            <section className="w3l-recent-work">
                <div className="row justify-content-center" style={{ paddingTop: "20px" }}>
                    <div className="col-md-6 col-lg-5">
                        <div className="icon d-flex align-items-center justify-content-center">
                        </div>
                        <h3 className="text-center mb-4">
                            {isUpdateMode ? 'Update Employee Details' : 'Add Employee Details'}
                        </h3>
                        {/* {formData.map((formData) => ( */}
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control rounded-left"
                                    name="fullname"
                                    placeholder="Employee Name"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                    pattern="[A-Za-z\n]{3,30}"
                                    maxLength={30}
                                    readOnly={isUpdateMode}
                                />
                            </div>
                            <div className="form-group d-flex">
                                <input
                                    type="text"
                                    className="form-control rounded-left"
                                    name="empID"
                                    placeholder="Employee ID"
                                    value={formData.empID}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]{3,5}"
                                    maxLength={5}
                                    readOnly={isUpdateMode}
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    name="desigination"
                                    className="form-control"
                                    value={formData.desigination}
                                    onChange={handleChange}
                                >
                                    <option value="">-- Select Designation --</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Software Engineer">Software Engineer</option>
                                    <option value="HR">HR</option>
                                    <option value="Senior Developer">Senior Developer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control rounded-left"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    readOnly={isUpdateMode}
                                />
                            </div>
                            {!isUpdateMode && (
                                <>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control rounded-left"
                                            name="username"
                                            placeholder="Username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                            maxLength={30}
                                            minLength={3}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control rounded-left"
                                            name="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            maxLength={16}
                                            minLength={6}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="form-group d-md-flex">
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary rounded submit p-3 px-5"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                        {/* ))} */}
                        <br></br>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Addemployee;
