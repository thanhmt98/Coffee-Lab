import React from 'react'
import PeopleIcon from '@material-ui/icons/People';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SearchIcon from '@material-ui/icons/Search';
import AssessmentIcon from '@material-ui/icons/Assessment';

function Header() {
    return (
        <div className="header">
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">Trang Quản Lý</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                    <a href="#" className="d-block">ThanhBr</a>
                    </div>
                </div>
                {/* SidebarSearch Form */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-sidebar">
                        <SearchIcon />
                        </button>
                    </div>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item menu-open">
                        <a href="#" className="nav-link active">
                        <MenuBookIcon />
                        <p>
                            Danh mục
                            <i className="right fas fa-angle-left" />
                        </p>
                        </a>
                        <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                            <FastfoodIcon />
                            <p>Đồ uống</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <FreeBreakfastIcon />
                            <p>Thức ăn</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <LocalBarIcon />
                        <p>
                            Sản phẩm
                            <span className="right badge badge-danger">Mới</span>
                        </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <AssessmentIcon />
                        <p>Thống kê</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <ReceiptIcon />
                        <p>Hóa đơn</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <PeopleIcon />
                        <p>Nhân viên</p>
                        </a>
                    </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    )
}

export default Header
