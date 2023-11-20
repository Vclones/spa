import React from 'react';
// import './css/sb-admin-2.min.css'
import './assets/vendor/fontawesome-free/css/all.min.css'
import TopBar from './TopBar';
import SideBar from './SideBar';
const DetailComment = () => {
    return (
        <>
            {/* Page Wrapper */}
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
                            <div className="text-center">
                                <h3 className="mb-0 text-gray-800 text-uppercase">Chi Tiết Đánh giá</h3><br />
                                <h4>Mã Dịch Vụ : 01</h4>
                            </div>
                            {/* Content Row */}

                            {/* Content Row */}
                            <div className="row">
                                {/* Area Chart */}
                                <div className="col-xl-12 col-lg-4">

                                    <div className="card shadow mb-4 ">
                                        <table className="table">
                                            <thead>
                                                <tr className='text-center'>
                                                    <th scope="col">Nội Dung</th>
                                                    <th scope="col">Ngày</th>
                                                    <th scope="col">Người đánh giá</th>
                                                    <th scope="col">Trạng thái</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td><p>Dù sử dụng những loại mỹ phẩm đắt tiền
                                                        hay chăm chỉ dưỡng da đều đặn nhưng các bước.
                                                 
                                                    </p> </td>
                                                    <td>

                                                        <p>12-02-2023</p>
                                                    </td>
                                                    <td>Kim Ngân</td>
                                                    <td >
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected="">Chờ xác nhận</option>
                                                            <option value={1}>Đã Hủy</option>
                                                            <option value={2}>Đã Thực Hiện</option>
                                                        </select>

                                                    </td>
                                                </tr>
                                                <tr>
                                                <td><p>Dù sử dụng những loại mỹ phẩm đắt tiền
                                                        hay chăm chỉ dưỡng da đều đặn nhưng các bước.
                                                 
                                                    </p> </td>
                                                    <td>

                                                        <p>12-02-2023</p>
                                                    </td>
                                                    <td>Kim Ngân</td>
                                                    <td >
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected="">Chờ xác nhận</option>
                                                            <option value={1}>Đã Hủy</option>
                                                            <option value={2}>Đã Thực Hiện</option>
                                                        </select>

                                                    </td>
                                                </tr>
                                                <tr>
                                                <td><p>Dù sử dụng những loại mỹ phẩm đắt tiền
                                                        hay chăm chỉ dưỡng da đều đặn nhưng các bước.
                                                 
                                         
                                                       
                                                    </p> </td>
                                                    <td>

                                                        <p>12-02-2023</p>
                                                    </td>
                                                    <td>Kim Ngân</td>
                                                    <td >
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected="">Chờ xác nhận</option>
                                                            <option value={1}>Đã Hủy</option>
                                                            <option value={2}>Đã Thực Hiện</option>
                                                        </select>

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Main Content */}

                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>EleganceBeauty Website 2023</span>
                            </div>
                        </div>
                    </footer>
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}
            </div>
            {/* End of Page Wrapper */}

        </>


    );
};

export default DetailComment;   