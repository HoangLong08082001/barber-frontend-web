import React, { useState } from "react";
import style from "./Booking.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function Booking() {
  const [selected, setSelected] = useState(0);
  const handleDivClick = (option) => {
    setSelected(option);
  };
  return (
    <div className={cx("wrapper")}>
      <h3>ĐẶT LỊCH CẮT TÓC</h3>
      <div className={cx("form-input")}>
        <label htmlFor="">
          Chọn ngày <strong style={{ color: "red", fontWeight: 800 }}>*</strong>
        </label>
        <input type="date" />
      </div>
      <div className={cx("form-input")}>
        <label htmlFor="">
          Chọn giờ <strong style={{ color: "red", fontWeight: 800 }}>*</strong>
        </label>
        <input type="time" placeholder="" />
      </div>
      <div className={cx("form-input")}>
        <label htmlFor="">
          Tên <strong style={{ color: "red", fontWeight: 800 }}>*</strong>
        </label>
        <input type="text" placeholder="Nhập tên" />
      </div>
      <div className={cx("form-input")}>
        <label htmlFor="">
          Số điện thoại{" "}
          <strong style={{ color: "red", fontWeight: 800 }}>*</strong>
        </label>
        <input type="number" placeholder="Nhập số điện thoại" />
      </div>
      <div className={cx("form-input")}>
        <label htmlFor="">Lưu ý</label>
        <textarea name="" id="" placeholder="Nhập lưu ý"></textarea>
      </div>
      <div className={cx("list-address")}>
        <h3>
          Chọn chi nhánh{" "}
          <strong style={{ color: "red", fontWeight: 800 }}>*</strong>
        </h3>
        <div className={cx("form-radio")}>
          <input type="radio" name="btn" checked={selected === 1} value={1} />
          <div className={cx("infor")} onClick={() => handleDivClick(1)}>
            <p className={cx("address")}>Dia chi 1</p>
            <p className={cx("phone")}>0989000111</p>
          </div>
        </div>

        <div className={cx("form-radio")}>
          <input type="radio" name="btn" checked={selected === 2} value={2} />
          <div className={cx("infor")} onClick={() => handleDivClick(2)}>
            <p className={cx("address")}>Dia chi 1</p>
            <p className={cx("phone")}>0989000111</p>
          </div>
        </div>
        <div className={cx("form-radio")}>
          <input type="radio" name="btn" checked={selected === 3} value={3} />
          <div className={cx("infor")} onClick={() => handleDivClick(3)}>
            <p className={cx("address")}>Dia chi 1</p>
            <p className={cx("phone")}>0989000111</p>
          </div>
        </div>
        <div className={cx("form-radio")}>
          <input type="radio" name="btn" checked={selected === 4} value={4} />
          <div className={cx("infor")} onClick={() => handleDivClick(4)}>
            <p className={cx("address")}>Dia chi 1</p>
            <p className={cx("phone")}>0989000111</p>
          </div>
        </div>
        <div className={cx("form-radio")}>
          <input type="radio" name="btn" checked={selected === 5} value={5} />
          <div className={cx("infor")} onClick={() => handleDivClick(5)}>
            <p className={cx("address")}>Dia chi 1</p>
            <p className={cx("phone")}>0989000111</p>
          </div>
        </div>
        <button className={cx("booking")}>ĐẶT LỊCH</button>
      </div>
    </div>
  );
}
