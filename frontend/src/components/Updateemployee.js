import React from "react";
import HeaderHR from "./HeaderHR";




function Updateemployee(){
    return(
        <div>
        <HeaderHR />
        <section className="w3l-recent-work">
            {/* Main content */}
            <div className="row justify-content-center" style={{ paddingTop: "20px" }}>
                <div className="col-md-6 col-lg-5">
                    <div className="icon d-flex align-items-center justify-content-center">
                    </div>
                    <h3 className="text-center mb-4">Update Employees Details</h3>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control rounded-left"
                                name="fullname"
                                placeholder="Employee Name"
                                value={formData.fullname}
                                required
                                pattern="[A-Za-z\n]{3,30}"
                                maxLength={30}
                                readOnly
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
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="desigination"
                                className="form-control"
                                value={formData.desigination}
                                onChange={handleChange}
                            >
                                <option value="">-- Select Desigination --</option>
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
                            />
                        </div>
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
                    <br></br>
                </div>
            </div>
        </section>
    </div>
    )
}
export default Updateemployee;