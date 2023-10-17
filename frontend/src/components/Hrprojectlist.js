import React, { useState, useEffect } from "react";
import './Projectlist.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderHR from "./HeaderHR";

function Hrprojectlist(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch project data from the API when the component mounts
        axios.get("http://127.0.0.1:8000/Listprojects/")
            .then(response => {
                // Set the fetched data in the state
                setProjects(response.data);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
            });
    }, []); // The empty dependency array means this effect runs once when the component mounts

    


    return(
        <div>
            <HeaderHR />
        
        <section className="w3l-recent-work" style={{ padding: "20px" }}>
            <div className="container">
               
                <br />
                <br />
                <div className="row d-flex justify-content-center">
                    {projects.map(project => (
                        <div className="gallery" key={project.id} style={{ marginRight: "20px", marginBottom: "20px" }}>
                            <Link to={`/hrprojectdetail/${project.id}`}>
                                <img
                                    src={project.img}
                                    alt={project.name}
                                />
                            </Link>
                            <div className="desc">
                                Name: {project.project_name} <br />
                            </div>
                            {/* <div>
                                <button className="btn btn-primary" onClick={() => handleDelete(project.id)}>
                                    Delete
                                </button>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
    )
}
export default Hrprojectlist;