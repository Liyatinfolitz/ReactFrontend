import React, { useState, useEffect } from "react";
// import HeaderHR from "./HeaderHR";
import { Link } from 'react-router-dom';
import axios from 'axios';


function Employeelist() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Make an API request to fetch employee data
        fetch('http://127.0.0.1:8000/Listemployees/')
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleDelete = async (userID) => {
      const confirmation = window.confirm("Are you sure you want to delete this User?");
  
      if (confirmation) {
          try {
              await axios.delete(`http://127.0.0.1:8000/deleteuser/${userID}`);
              setEmployees((prevEmployee) => prevEmployee.filter((employee) => employee.id !== userID));
          } catch (error) {
              console.error("Error deleting project:", error);
          }
      }
    };

    return (
        <div>
      {/* <HeaderHR /> */}

      <div className="container">
        <button className="btn btn-primary">
          <Link to="/hraddemployee" style={{ color: "white !important" }}>
            ADD +
          </Link>
        </button>
        <br />
        <br />
        <table className="table table-bordered">
          <thead  style={ {backgroundColor:"#8d448b", color:"white"} }> 
            <tr>
              <th>Sl.No.</th>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Username</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.empID}</td>
                <td>{employee.fullname}</td>
                <td>{employee.desigination}</td>
                <td>{employee.username}</td>
                <td><button className="btn btn-primary"><Link to={`/updateemployee/${employee.id}`}>Update</Link></button></td>
                <td><button className="btn btn-primary" onClick={() => handleDelete(employee.id)} >Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}

export default Employeelist;
