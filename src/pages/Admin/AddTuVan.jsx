import React, { useState } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { useHistory } from "react-router-dom";
const AddTuVan = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    cauHoi: "",
    cauTraLoi: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formData); 
      await axios.post("http://localhost:8000/tuvan", formData);
      history.push("/advise");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-center mb-4">
              <h1 className="h3 mb-0 text-gray-800">Thêm Dịch Vụ</h1>
            </div>

            <div className="col-xl-12 col-lg-4">
              <form className="m-4" onSubmit={handleSubmit}>
                <div className="row mb-2">
                  <div className="col-6">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Câu Hỏi
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="cauHoi"
                      value={formData.cauHoi}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <label
                      htmlFor="description"
                      className="form-label text-dark"
                    >
                      Câu Trả Lời
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="cauTraLoi"
                      value={formData.cauTraLoi}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Thêm mới
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTuVan;
