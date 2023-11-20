import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const UpdateTuVan = () => {
  const history = useHistory();
  const { idTuVan } = useParams();

  const [blogData, setBlogData] = useState({
    cauHoi: "",
    cauTraLoi: "",
  });

  useEffect(() => {
    fetchData();
  }, [idTuVan]);
  console.log("idTuVan:", idTuVan);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/tuvan/${idTuVan}`
      );
      setBlogData({ ...response.data });
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu bài viết:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/tuvan/${idTuVan}`, blogData)
      .then(() => {
        history.push("/advise");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-center mb-4">
                <h1 className="h3 mb-0 text-gray-800">SỬA BÀI VIẾT</h1>
              </div>

              <div className="col-xl-12 col-lg-4">
                <form className="m-4" onSubmit={handleSubmit}>
                  <div className="row mb-2">
                    <div className="col-4">
                      <div className="col">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label text-dark"
                        >
                          Câu Hỏi
                        </label>
                        <textarea
                          className="form-control"
                          id="floatingTextarea"
                          rows={5}
                          name="cauHoi"
                          value={blogData.cauHoi}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label text-dark"
                        >
                          Câu Trả Lời
                        </label>
                        <textarea
                          className="form-control"
                          id="floatingTextarea"
                          rows={5}
                          name="cauTraLoi"
                          value={blogData.cauTraLoi}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">
                    Sửa
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTuVan;
