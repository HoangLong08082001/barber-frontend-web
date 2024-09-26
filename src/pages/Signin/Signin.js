import React, { useState } from "react";
import style from "./Signin.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function Signin() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleSwitch = () => {
    setShow(!show);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-img")}>
        <img
          src={
            "https://t4.ftcdn.net/jpg/03/78/83/15/360_F_378831540_10ShB9tnvs2quli24qe53ljhvsL07gjz.jpg"
          }
          alt=""
        />
      </div>
      <div className={cx("form")}>
        <h3>ĐĂNG NHẬP</h3>
        <div className={cx("form-input")}>
          <label htmlFor="">Tên tài khoản</label>
          <input
            type="text"
            placeholder="Email hoặc số điện thoại"
            name=""
            id=""
          />
        </div>
        <div className={cx("form-input")}>
          <label htmlFor="">Mật khẩu</label>
          <input
            type={show === false ? "password" : "text"}
            name=""
            placeholder="Mật khẩu"
            id=""
          />
          <div className={cx("action")}>
            <div className={cx("checkbox")}>
              <p onClick={handleSwitch}>
                {show === false ? "Hiển thị mật khẩu" : "Ẩn mật khẩu"}
              </p>
            </div>
            <Link className={cx("link")} to="/quen-mat-khau">
              Quên mật khẩu?
            </Link>
          </div>
        </div>
        <div className={cx("form-btn")}>
          <button className={cx("btn-signin")}>ĐĂNG NHẬP</button>
          <button
            className={cx("btn-signup")}
            onClick={() => navigate("/dang-ky-tai-khoan")}
          >
            ĐĂNG KÝ TÀI KHOẢN
          </button>
        </div>
      </div>
    </div>
  );
}
