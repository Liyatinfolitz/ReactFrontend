import React, { useState, useEffect } from "react";
import './Projectlist.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HeaderHR from "./HeaderHR";

function Hrprojectdetail(){
    const [projectData, setProjectData] = useState([]);
    const { id } = useParams();
  

  useEffect(() => {
    // Define your API endpoint URL using backticks
    const apiUrl = `http://127.0.0.1:8000/projectdetailview/${id}`;

    // Make an Axios GET request to fetch project details
    axios.get(apiUrl)
      .then(response => {
        // Assuming your API returns project data in JSON format
        
        setProjectData(response.data);
        
      })
      .catch(error => {
        console.error("Error fetching project details:", error);
      });
  }, [id]);
  
  console.log("projectData:", projectData);

  useEffect(() => {
    console.log("Updated projectData:", projectData);
  }, [projectData]);

  

    return(
        <div>
      <HeaderHR />
      
      <section className="w3l-recent-work" style={{ padding: "20px" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="gallery" style={{ marginRight: "20px", marginBottom: "20px" }}>
              <Link to={`/projectdetail/${id}`}> {/* Use the correct path for the Link */}
                <img
                  src={projectData.img }
                  alt={projectData.project_name }
                />
              </Link>
              <div className="desc">
                Name: {projectData.project_name} <br />
                {/* Add other project details here */}
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            
        
          </div>
          
        </div>
      </section>
    </div>
    )
}
export default Hrprojectdetail;