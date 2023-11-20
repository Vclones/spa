import React, { useState, useEffect } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import Search from "../search/search";
import { Link } from "react-router-dom";
import { fetchDichVu } from "../../api/dichvu";
import "bootstrap/dist/css/bootstrap.min.css";
import Book from "../Book/Book";
import "./Header.css"; // Import CSS file for custom styles

const Header = () => {
  const [dichVuData, setDichVuData] = useState([]);
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDichVu();
        setDichVuData(data);
      } catch (error) {}
    }

    fetchData();
  }, []);

  // useEffect(() => {
  //   let prevScrollPos = window.pageYOffset;

  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     const scrollingDown = prevScrollPos < currentScrollPos;

  //     setIsScrolled(currentScrollPos > 0);

  //     if (scrollingDown && isTopbarVisible && currentScrollPos > 50) {
  //       setIsTopbarVisible(false);
  //       localStorage.setItem("topbarVisible", JSON.stringify(true));
  //     } else if (!scrollingDown && !isTopbarVisible && currentScrollPos === 0) {
  //       setIsTopbarVisible(true);
  //       localStorage.setItem("topbarVisible", JSON.stringify(false));
  //     }

  //     prevScrollPos = currentScrollPos;
  //   };

  //   const handleInitialScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     setIsScrolled(currentScrollPos > 0);
  //     setIsTopbarVisible(currentScrollPos === 0);
  //     localStorage.setItem(
  //       "topbarVisible",
  //       JSON.stringify(currentScrollPos === 0)
  //     );
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleInitialScroll(); // Handle initial scroll position

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isTopbarVisible]);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <section className={`tf__topbar ${isScrolled ? "sticky-top" : ""} `}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9">
              <ul className="tf__topbar_left d-flex flex-wrap">
                <li>
                  <p>
                    <i className="fas fa-map-marker-alt"></i> 4953 Đường Trần
                    Duy Hưng, Cầu Giấy, Hà Nội
                  </p>
                </li>
                <li>
                  <a
                    href="mailto: elegancebeauty2023@gmail.com"
                    className="text-decoration-none"
                  >
                    <i className="fas fa-envelope"></i>
                    elegancebeauty2023@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="callto:028.6686.3434"
                    className="text-decoration-none"
                  >
                    <i className="fas fa-phone-alt"></i>028.6686.3434
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-lg-3">
              <ul className="tf__topbar_right d-flex flex-wrap">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <nav
        className={`navbar navbar-expand-lg main_menu ${
          isScrolled ? "fixed-top" : ""
        }`}
      >
        <div className="container">
          <Link to="/" className="" aria-current="page">
            <a className="navbar-brand" href="index.html">
              <img className="img" src="../user/images/logonew.png" alt="BonFax" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars menu_icom"></i>
            <i className="fa fa-times menu_close"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav m-auto ">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dịch vụ <BiSolidChevronDown />
                </a>
                <ul className="tf__droap_menu">
                  {dichVuData.map((item) => (
                    <li key={item.idDichVu}>
                      {/* <a href="#" className="text-decoration-none">
                      
                      </a> */}
                      <Link
                        to={`/services/${item.idDichVu}`}
                        class=" text-decoration-none"
                      >
                        {item.tieuDe}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Tin tức
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Liên hệ
                </Link>
              </li>
            </ul>
            <ul className="menu_rights navbar-navs d-flex flex-wrap "    style={{
                  margin: "10px 0",
                }}>
              <li
                className=" nav-item li"
             
              >
                <Search />
              </li>
              <li className=" nav-item li">
                {/* <a
                  type="button"
                 
                  className="reservation text-decoration-none"
                >
                  Đặt lịch
                </a> */}
                <Book />
              </li>
              <li className="nav-item ">
                {/* <a class="nav-link" href="#">
                  
                </a> */}
                <Link
                  to="/login"
                  className="nav-link d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-user"></i>
                </Link>
                {/* <ul class="tf__droap_menu no-hover" style={{}}>
                  <li class="no-hover">
                    <Link
                      to="/login"
                      class="text-decoration-none "
                      style={{
                        width: "80%",
                        border: "none",
                        marginLeft: "-20px",
                        textAlign: "left",
                      }}
                    >
                      Đăng nhập
                    </Link>
                  </li>
                  <li class="no-hover">
                    <Link
                      to="/signup"
                      class="text-decoration-none "
                      style={{
                        width: "80%",
                        border: "none",
                        marginLeft: "-20px",
                        textAlign: "left",
                      }}
                    >
                      Đăng ký
                    </Link>
                  </li>
                </ul> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
