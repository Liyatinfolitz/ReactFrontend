import React, { useState, useEffect } from "react";
import './Projectlist.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Projectlist() {
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

    const handleDelete = async (projectId) => {
        const confirmation = window.confirm("Are you sure you want to delete this project?");
    
        if (confirmation) {
            try {
                // Send a DELETE request to the appropriate endpoint with the project's ID
                await axios.delete(`http://127.0.0.1:8000/deleteproject/${projectId}`);
    
                // After successful deletion, you may want to update the projects state or perform any other actions.
                // For example, you can filter the deleted project out of the state.
                setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
            } catch (error) {
                console.error("Error deleting project:", error);
            }
        }
    };
    

    return (
        <section className="w3l-recent-work" style={{ padding: "20px" }}>
            <div className="container">
                <button className="btn btn-primary" style={{ alignItems: "initial" }}>
                    <Link to="/addproject" style={{ color: "white" }}>ADD +</Link>
                </button>
                <br />
                <br />
                <div className="row d-flex " style={{paddingLeft:"80px"}}>
                    {projects.map(project => (
                        <div className="gallery" key={project.id} style={{ marginRight: "20px", marginBottom: "20px"}}>
                            {/* , minWidth:"100px", maxWidth:"200px", minHeight:"100px",maxHeight:"150px"  */}
                            <Link to={`/projectdetail/${project.id}`}>
                            <img src={`http://127.0.0.1:8000${project.img}`} alt={project.project_name} style={{maxWidth:"200px",minWidth:"100px", minHeight:"100px",maxHeight:"150px"}}/>
                            </Link>
                            <div id="desc" style={{ padding: "10px", textAlign: "center",maxWidth:"200px",minWidth:"100px", minHeight:"100px",maxHeight:"150px" }}>
                                <p style={{ wordWrap: "break-word" }}> {project.project_name}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                            <button className="btn2" onClick={() => handleDelete(project.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projectlist;
