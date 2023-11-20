import React from 'react';
// import './css/sb-admin-2.min.css'
import './assets/vendor/fontawesome-free/css/all.min.css'
import TopBar from './TopBar';
import SideBar from './SideBar';
const DetailAppointment = () => {
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
                                <h3 className="mb-0 text-gray-800 text-uppercase">Chi Tiết Lịch Hẹn</h3><br />
                                <h4>Mã Lịch Hẹn : 01</h4>
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
                                                    <th scope="col">#</th>
                                                    <th scope="col">Dịch Vụ</th>
                                                    <th scope="col">Mô tả</th>
                                                    <th scope="col">Giá</th>
                                                    <th scope='col'>Nhân viên thực hiện</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Skincare</td>
                                                    <td><p>Dù sử dụng những loại mỹ phẩm đắt tiền
                                                        hay chăm chỉ dưỡng da đều đặn nhưng các bước.
                                                        Thậm chí, đôi khi có thể khiến da bị kích ứng, nổi mụn.
                                                        Trong bài viết dưới đây,skincare không đúng chuẩn thì
                                                        hiệu quả mang lại cũng không cao.
                                                    </p> </td>
                                                    <td>200.000đ</td>
                                                    <td>Kim Ngân</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Skincare</td>
                                                    <td><p>Dù sử dụng những loại mỹ phẩm đắt tiền
                                                        hay chăm chỉ dưỡng da đều đặn nhưng các bước.
                                                        Thậm chí, đôi khi có thể khiến da bị kích ứng, nổi mụn.
                                                        Trong bài viết dưới đây,skincare không đúng chuẩn thì
                                                        hiệu quả mang lại cũng không cao.
                                                    </p> </td>
                                                    <td>200.000đ</td>
                                                    <td>Kim Ngân</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Skincare</td>
                                                    <td><p>Dù sử dụng những loại mỹ phẩm đắt tiền
                                                        hay chăm chỉ dưỡng da đều đặn nhưng các bước.
                                                        Thậm chí, đôi khi có thể khiến da bị kích ứng, nổi mụn.
                                                        Trong bài viết dưới đây,skincare không đúng chuẩn thì
                                                        hiệu quả mang lại cũng không cao.
                                                    </p> </td>
                                                    <td>200.000đ</td>
                                                    <td>Kim Ngân</td>
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

export default DetailAppointment;   