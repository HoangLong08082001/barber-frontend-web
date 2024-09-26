import React from "react";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faUserAlt } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <Link className={cx("link")} to="/san-pham">
          Sản phẩm
        </Link>
        <Link className={cx("link")} to="/dat-lich">
          Đặt lịch
        </Link>
      </div>
      <div className={cx("right")}>
        <Link to="/dang-nhap">
          <FontAwesomeIcon className={cx("link")} icon={faUserAlt} />
        </Link>
        <Link to="/gio-hang">
          <FontAwesomeIcon className={cx("link")} icon={faShoppingCart} />
        </Link>
      </div>
    </div>
  );
}
