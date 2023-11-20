import React, { useEffect, useState } from "react";
import "./css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const TuVan = () => {
    const [categories, setCategories] = useState([]);
    const [deletedItemId, setDeletedItemId] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
      fetchData();
    }, [deletedItemId]);
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/tuvan/");
        console.log("Fetched data:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    const handleDelete = async (idTuVan) => {
      console.log("Deleting item with ID:", idTuVan);
  
      try {
        await axios.delete(`http://localhost:8000/tuvan/${idTuVan}`);
        setDeletedItemId(idTuVan);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    };
   
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredCategories = categories.filter((service) => {
    return (
      service.cauHoi.toLowerCase().includes(searchValue.toLowerCase()) ||
      service.cauTraLoi.toLowerCase().includes(searchValue.toLowerCase())
      // Thêm các trường khác nếu cần
    );
  });
    
    const truncateString = (str, maxLength) => {
      if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
      }
      return str;
    };
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Tư Vấn</h1>
              <form className="d-none d-sm-inline-block form-inline my-auto navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-white border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      style={{
                        height: "40px",
                        width: "500px",
                        margin: " 10px 0",
                      }}
                      value={searchValue}
                      onChange={handleSearchChange}
                    />
                  </div>
                </form>
              <Link
                to="/addadvise"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-add fa-sm text-white-50" />Thêm
              </Link>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-4">
                <div className="card shadow mb-4">
                  <table className="table">
                    <thead>
                      <tr className="text-left h-2">
                        <th scope="col">Mã Dịch Vụ</th>
                        <th scope="col">Câu Hỏi</th>
                        <th scope="col">Câu Trả Lời</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCategories.map((service, index) => {
                        return (
                          <tr key={index}>
                            <td className="text-left">{index + 1}</td>
                            <td> {truncateString(service.cauHoi, 50)}</td>
                            <td className="text-justify col-xl-5">
                            {truncateString(service.cauTraLoi, 50)}
                            </td>
                     
                            <td className="d-flex align-items-center justify-content-between">
                             
                              <Link
                                to={`/updateTuVan/${service.idTuVan}`}
                                className="btn btn-primary"
                              >
                                Sửa
                              </Link>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(service.idTuVan)}
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-end navigation">
                    <button
                      className="btn m-2 border border-0 bg-primary text-white"
                      type="button"
                    >
                      1
                    </button>
                    <button className="btn m-2 border border-0" type="button">
                      2
                    </button>
                    <button className="btn m-2 border border-0" type="button">
                      3
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuVan;
