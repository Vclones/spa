import React from 'react';
// import { Link } from 'react-router-dom';
// import './css/sb-admin-2.min.css';
import './assets/vendor/fontawesome-free/css/all.min.css'
// import { PiTrashBold } from "react-icons/pi"
// import { PiPencilSimpleLineBold } from "react-icons/pi"
import TopBar from './TopBar';
import SideBar from './SideBar';
// import Footer from '../components/Footer';
const AddContentB = () => {
    return (
        <>
            <div id="wrapper">
                <SideBar></SideBar>
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        <TopBar></TopBar>
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <div className="d-sm-flex align-items-center justify-content-center mb-4">
                                <h1 className="h3 mb-0 text-gray-800">THÊM NỘI DUNG BÀI VIẾT</h1>
                            </div>

                            <div className="col-xl-12 col-lg-4">

                                <form className='m-4'>
                                    <div className='row mb-2'>
                                        <div className="col">
                                            <label htmlFor="formFile" className="form-label text-dark">
                                                Ảnh
                                            </label>
                                            <input className="form-control mb-2" type="file" id="formFile" />
                                        </div>

                                    </div>
                                    <div className='row mb-2'>
                                        <div className="col">
                                            <label htmlFor="exampleInputEmail1" className="form-label text-dark">
                                                Mô tả
                                            </label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Leave a comment here"
                                                id="floatingTextarea" rows={8}>

                                            </textarea>
                                        </div>

                                    </div>
                                    <button type="submit" className="btn btn-primary mt-2">
                                        Submit
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                    {/* End of Main Content */}

                    {/* <Footer></Footer> */}
                </div>
                {/* End of Content Wrapper */}
            </div>
        </>
    );
};

export default AddContentB;