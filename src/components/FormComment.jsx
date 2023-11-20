import React from "react";
class FormComment  extends React.Component{   
    constructor(){
        super();
        this.hoten =  React.createRef();
        this.tinh =  React.createRef();
        this.noidung =  React.createRef();
    }
    submit = (e) =>{
        console.log(this.hoten.current.value);
        console.log(this.tinh.current.value);
        console.log(this.noidung.current.value);
        e.preventDefault();
    } 
    render(){
     const kq=
        <form>
        <div className="row">
        {/*
        <div className="col-xl-6">
            <input type="text" placeholder="Họ và tên" />
        </div>
        <div className="col-xl-6">
            <input type="text" placeholder="Email" />
        </div>
        */
        }
        <div className="col-12">
            <textarea
            rows="7"
            placeholder="Nội dung bình luận"
            ></textarea>
        </div>
        <div className="col-12">
            <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
            />
            <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
            >
                Lưu tên và email lại cho lần sau bình luận
            </label>
            </div>
            <button type="submit" className="common_btn">
            Bình luận
            </button>
        </div>
        </div>
        </form>
        return(kq);
    }
}
export default FormComment;