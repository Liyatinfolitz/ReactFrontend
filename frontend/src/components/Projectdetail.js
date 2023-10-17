import React, { useState, useEffect } from "react";
import Header from "./Header";
import './Projectlist.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Assignproject from "./Assignproject";


function Projectdetail() {
  const [projectData, setProjectData] = useState([]);
  const [memberData, setMemberData] = useState([]);
  const { id } = useParams();
  const [showComponentA, setShowComponentA] = useState(false);
  const variableToPass = { id }

  useEffect(() => {
    // Define your API endpoint URL using backticks
    const apiUrl = `http://127.0.0.1:8000/projectdetailview/${id}`;
    const apiUrl2 = `http://127.0.0.1:8000/assignedemployeedata/${id}`;
    

    // Make an Axios GET request to fetch project details
    axios.get(apiUrl)
      .then(response => {
        // Assuming your API returns project data in JSON format
        setProjectData(response.data);
        console.log("projectData---:", response.data);
      })
      .catch(error => {
        console.error("Error fetching project details:", error);
      });

      axios.get(apiUrl2)
      .then(response => {
        // Assuming your API returns project data in JSON format
        setMemberData(response.data);
        console.log("memberdataaaa---:", response.data);
        
      })
      .catch(error => {
        console.error("Error fetching project details:", error);
      });
  }, [id]);


  const showAddComponent = () => {
    setShowComponentA(true);
  };

  useEffect(() => {
    // console.log("Updated projectData:", projectData);
  }, [projectData]);

  


  return (
    <div>
      <Header />
      <section className="w3l-recent-work" style={{ padding: "20px" }}>
        <div className="container">

          {projectData.map((p) => (
            <div
              className="row d-flex justify-content-center"
              style={{ paddingTop: "50px" }}
            >
              <div className="col"></div>
              <div
                className="col d-flex justify-content-left"
                style={{ paddingLeft: "50px" }}
              >
                <div
                  className="gallery"
                  style={{ marginRight: "20px", marginBottom: "20px", maxHeight:"200px", minWidth:"200px" }}
                >
                  <img src={`http://127.0.0.1:8000${p.img}`} alt={p.project_name} style={{minWidth:"250px",minHeight:"250px"}}/>
                  <div
                    id="desc"
                    style={{
                      padding: "10px",
                      textAlign: "center",
                      maxWidth: "200",
                      minWidth: "100px",
                      minHeight: "150px",
                      maxHeight: "150px",
                    }}
                  >
                    
                  </div>
                </div>
              </div>
              <div
                className="col d-flex justify-content-right"
                style={{ paddingTop: "10px" }}
              >
                <p style={{textAlign:"justify"}}>
                  <b>{p.project_name} :</b> <br /> {p.description}
                  <br></br>
                  <br></br>
                  Members :
                {memberData.map((m) => (
                  <span style={{fontStyle:"italic"}}>
                      {m.username},<br />
                    {/* {m.userID.map((userID, subIndex) => (
                      <span key={subIndex}>
                        {subIndex > 0 ? ', ' : ''}
                        {userID && (
                          memberData.username
                        )}
                      </span>
                    ))} */}
                  </span>
                ))}
                 
                </p>
              </div>
              <div className="col"></div>
            </div>
          ))}

          <div className="row d-flex justify-content-center" style={{marginTop:"30px"}}>
            <button
              className="btn btn-primary"
              style={{ fontSize: "14px", padding: "5px 10px" }}
              onClick={showAddComponent}
            >
              Add Employees+
            </button>
          </div>
          {showComponentA && (
            <Assignproject  data={variableToPass}/> // This component will be shown when showComponentA is true
          )}
         
        </div>
      </section>
    </div>
  );
}

export default Projectdetail;
