import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Home from "../pages/home_user";
import About from "../pages/about_user";
import Contact from "../pages/contact_user";
import Blog from "../pages/blog_user";
import Login from "../pages/login_user";
import Signup from "../pages/signup_user";
import Blogdetail from "../pages/blog_detail_user";
import Services from "../pages/services_user";
import ListUser from '../pages/Admin/ListUser';
import DashBoard from '../pages/Admin/DashBoard';
// import AddUser from '../pages/Admin/AddUser';
import ListBlog from '../pages/Admin/ListBlog';
import AddBlog from '../pages/Admin/AddBlog';
import AddContentB from '../pages/Admin/AddContentB';
import ListAppointment from '../pages/Admin/ListAppointment';
import ListService from '../pages/Admin/ListService';
import ListComment from '../pages/Admin/ListComment';
import DetailComment from '../pages/Admin/DetailComment';
import DetailAppointment from '../pages/Admin/DetailAppointment';
import AddService from '../pages/Admin/AddService';
import Thongke from "../pages/Admin/Thongke";
import UpdateBlog from "../pages/Admin/UpdateBlog";
import EditService from "../pages/Admin/EditService";
import TuVan from "../pages/Admin/TuVan";
import AddTuVan from "../pages/Admin/AddTuVan";
import UpdateTuVan from "../pages/Admin/UpdateTuVan";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  return (
   <Router>
      <ScrollToTop />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/services/:id" component={Services} />
      <Route path="/blog_detail/:id" component={Blogdetail} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path='/admin' component={DashBoard}/>
      <Route path='/thongke' component={Thongke}/>
      <Route path='/listblog' component={ListBlog}/>
      <Route path='/listuser'component={ListUser}/>
      {/* <Route path='/adduser' component={AddUser}/> */}
      <Route path='/addblog' component={AddBlog}/>
      <Route path='/updateblog/:idBaiViet' component={UpdateBlog}/>
      <Route path='/AddService' component={AddService}/>
      <Route path='/addcontentblog'component={AddContentB}/>
      <Route path='/listappointment' component={ListAppointment}/>
      <Route path='/listService' component={ListService}/>
      <Route path='/EditService/:idDichVu' component={EditService}/>
      <Route path='/ListComment'component={ListComment}/>
      <Route path='/DetailComment' component={DetailComment}/>
      <Route path='/DetailAppointment'component={DetailAppointment}/>
      <Route path='/advise'component={TuVan}/>
      <Route path='/addadvise'component={AddTuVan}/>
      <Route path='/updateTuVan/:idTuVan'component={UpdateTuVan}/>
    </Router>
  );
};

export default AppRouter;