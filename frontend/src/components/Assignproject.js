import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Assignproject(props) {
  const [employeeList, setEmployeeList] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:8000/Listemployees_projectassign/${id}`;
    axios.get(apiUrl)
      .then(response => {
        setEmployeeList(response.data);
      })
      .catch(error => {
        console.error("Error fetching employee list:", error);
      });
  }, []);

  const handleCheckboxChange = (employeeId, employeeUsername) => {
    // Toggle the selected state of the employee with the given ID
    setSelectedEmployees((prevSelected) => {
      if (prevSelected.find(emp => emp.id === employeeId)) {
        return prevSelected.filter(emp => emp.id !== employeeId);
      } else {
        return [...prevSelected, { id: employeeId, username: employeeUsername }];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract user IDs and usernames from the selected employees
    const selectedUserIDs = selectedEmployees.map(emp => emp.id);
    const selectedUsernames = selectedEmployees.map(emp => emp.username);

    // Prepare the data to send in the POST request
    const postData = {
      userID: selectedUserIDs,
      projectID: props.data.id,
      username: selectedUsernames.join(', '), // Combine usernames as a comma-separated string
    };

    // Send a POST request with the selected employee IDs
    axios.post("http://127.0.0.1:8000/Assignproject_team/", postData)
      .then(response => {
        if (response.status === 200) {
          console.log('Employee assigned successfully');
          navigate('/home');
        } else {
          console.error('Error assigning employee data');
        }
      })
      .catch(error => {
        console.error("Error sending POST request:", error);
      });
  };

  return (
    <div>
      <section className="w3l-recent-work">
        <div className="row justify-content-center" style={{ paddingTop: "20px" }}>
          <div className="col-md-6 col-lg-5">
            <div className="icon d-flex align-items-center justify-content-center"></div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Select Names:</label>
                {employeeList.map((employee) => (
                  <div key={employee.id} className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`employee-${employee.id}`}
                      checked={selectedEmployees.some(emp => emp.id === employee.id)}
                      onChange={() => handleCheckboxChange(employee.id, employee.username)}
                    />
                    <label className="form-check-label" htmlFor={`employee-${employee.id}`}>
                      {employee.fullname}
                    </label>
                  </div>
                ))}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary rounded submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Assignproject;
