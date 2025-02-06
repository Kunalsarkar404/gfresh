import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const Addprofile = () => {
    return (
        <div style={{ width: '100%' }}>
            <div className="dashboardcontent">
                {/* <Breadcup name={'Profile'} /> */}
                <div className="container-fuild px-2 desgin1">
                    <div className="row bg-white ">
                        {/* <div className="col-12 py-3 customtext23" style={{ background: 'hsla(210, 85%, 32%, 0.2)', color: '#0C5398' }}>Personal Details</div> */}
                        <div className="col-lg-12 d-flex justify-content-between py-2" style={{ background: '#bcdae9', color: '#0C5398' }}>
              <p className="m-0 customfont" >Personal Details</p>
              <div className="addnew d-block mb-2">
                <button className="btn text-white closebtn"><NavLink to='/profiledetail' style={{ textDecoration: 'none', color: 'white' }}> x Close</NavLink></button>
              </div>
            </div>
                    </div>
                </div>
        
                <div className="container-fuild px-2 pb-4 pt-3 bg-white">
                    <div className="row bg-white pb-4 round" style={{ border: '1px solid #E0E0E0', margin: "10px 0px", borderRadius: '3px' }}>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">
                                        Full Name <span style={{ color: 'red' }}>*</span>
                                    </label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" placeholder='Company Name ' />
                                </div>
                            </div>
                        </div>                       
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Email <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" placeholder='Email Address' />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label customw">Date of Birth<span style={{ color: 'red' }}>*</span> </label>
                                </div>
                                <div className="col-9">
                                    <input type="date" className="form-control" placeholder='D.O.B' />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Mobile No. <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div className="col-9">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">+91</span>
                                        </div>
                                        <input type="tel" class="form-control" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Address <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" placeholder='Address ' />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Country  <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div className="col-9">
                                    <input type="number" className="form-control" placeholder='Country ' />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">State  <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" placeholder='State ' />
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">City <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" placeholder='City' />
                                </div>
                            </div>
                        </div> */}
                        <div className="col-6 px-4 pt-4">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Pincode <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" placeholder='Pincode' />
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 py-5 px-4 d-flex justify-content-end" style={{ gap: '4px' }}>
                                    <button className='btn4'>Cancel</button>
                                    <button className='btn5'>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addprofile