import React, { useState } from "react";
import style from "./Signup.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function Signup() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleSwitch = () => {
    setShow(!show);
  };
  const handleSwitch1 = () => {
    setShow1(!show1);
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
        <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
        <div className={cx("form-input")}>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" name="" id="" />
        </div>
        <div className={cx("form-input")}>
          <label htmlFor="">Số điện thoại</label>
          <input type="text" placeholder="Số điện thoại" name="" id="" />
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
          </div>
        </div>
        <div className={cx("form-input")}>
          <label htmlFor="">Nhập lại mật khẩu</label>
          <input
            type={show1 === false ? "password" : "text"}
            name=""
            placeholder="Xác nhận lại mật khẩu"
            id=""
          />
          <div className={cx("action")}>
            <div className={cx("checkbox")}>
              <p onClick={handleSwitch1}>
                {show1 === false ? "Hiển thị mật khẩu" : "Ẩn mật khẩu"}
              </p>
            </div>
          </div>
        </div>
        <div className={cx("form-btn")}>
          <button className={cx("btn-signin")}>ĐĂNG KÝ TÀI KHOẢN</button>
          <button
            className={cx("btn-signup")}
            onClick={() => navigate("/dang-nhap")}
          >
            ĐĂNG NHẬP
          </button>
        </div>
      </div>
    </div>
  );
}
