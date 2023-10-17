import React, { useState } from "react";
import Header from './Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Addproject() {
    const [formData, setFormData] = useState({
        project_name: "",
        img: null,
        description: "",
        status:""
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value // Handle file input differently
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            const response = await axios.post("http://127.0.0.1:8000/AddprojectData/", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data" // Important for file uploads
                }
            });
           
            if (response.status === 200) {
                // Successful response
                console.log("Project added successfully:", response.data);
                navigate('/home');
                // Optionally, you can perform other actions for a successful response.
            } else {
                // Handle other response status codes
                console.error("Failed to add project. Status code:", response.status);
                // Optionally, you can display an error message or perform other error handling actions.
            }
            

            // Handle success, e.g., show a success message
            console.log("Project added successfully:", response.data);
            navigate('/home');


            // Optionally, you can redirect the user or perform other actions here.
        } catch (error) {
            // Handle errors, e.g., show an error message
            console.error("Error adding project:", error);
        }
    };

    return (
        <div>
            <Header />
            <section className="w3l-recent-work" >
                <div className="container">
                {/* Main content */}
                <div className="row justify-content-center" style={{ paddingTop: "20px" }}>
                <div className="col"></div>
                    <div className="col-md-6 col-lg-5">
                        <div className="icon d-flex align-items-center justify-content-center"></div>
                        <h3 className="text-center mb-4">Add Project Details</h3>
                        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                            <div className="form-group">
                                <input type="text" className="form-control rounded-left" 
                                name="project_name" placeholder="Project Name" required onChange={handleInputChange} 
                                pattern="[A-Za-z\n]{3,30}" minLength={3} maxLength={30} />
                            </div>
                            <div className="form-group d-flex">
                                <input type="file" className="form-control rounded-left" name="img" placeholder="Project Image URL" required onChange={handleInputChange} />
                            </div>
                            <div className="form-group d-flex">
                                <textarea className="form-control rounded-left" name="description" required placeholder="Description" onChange={handleInputChange}></textarea>
                            </div>
                            {/* <div className="form-group">
                                <input type="number" className="form-control rounded-left" name="empID" placeholder="Member ID" required onChange={handleInputChange} />
                            </div> */}
                            <div className="form-group d-flex">
                                {/* Additional form fields go here */}
                                <input type="text" className="form-control rounded-left" name="status" placeholder="Project status" required 
                                onChange={handleInputChange} />
                            </div>
                            {/* <div className="form-group d-flex">
                                <input type="checkbox" />
                            </div> */}
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary rounded submit p-3 px-5">Save</button>
                            </div>
                        </form>
                        <br />
                    </div>
                    {/* <div className="col">
                    <button className="btn btn-primary" style={{ alignItems: "initial" }}>ADD +
                    </button>
                    </div> */}
                    <div className="col"></div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Addproject;
