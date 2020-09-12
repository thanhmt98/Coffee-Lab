import React from 'react'

function Main() {
    return (
        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark">Trang chủ</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item active">Sản phẩm</li>
                        </ol>
                    </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <div className="content">
                
                </div>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
                <div className="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
                </div>
            </aside>  
            
        </div>
    )
}

export default Main

// <div className="container-fluid">
//                     <div className="row">
//                     <div className="col-lg-6">
//                         <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">
//                             Some quick example text to build on the card title and make up the bulk of the card's
//                             content.
//                             </p>
//                             <a href="#" className="card-link">Card link</a>
//                             <a href="#" className="card-link">Another link</a>
//                         </div>
//                         </div>
//                         <div className="card card-primary card-outline">
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">
//                             Some quick example text to build on the card title and make up the bulk of the card's
//                             content.
//                             </p>
//                             <a href="#" className="card-link">Card link</a>
//                             <a href="#" className="card-link">Another link</a>
//                         </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <div className="card">
//                         <div className="card-header">
//                             <h5 className="m-0">Featured</h5>
//                         </div>
//                         <div className="card-body">
//                             <h6 className="card-title">Special title treatment</h6>
//                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                             <a href="#" className="btn btn-primary">Go somewhere</a>
//                         </div>
//                         </div>
//                         <div className="card card-primary card-outline">
//                         <div className="card-header">
//                             <h5 className="m-0">Featured</h5>
//                         </div>
//                         <div className="card-body">
//                             <h6 className="card-title">Special title treatment</h6>
//                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                             <a href="#" className="btn btn-primary">Go somewhere</a>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>/.container-fluid