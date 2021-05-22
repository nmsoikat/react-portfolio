import React from 'react';
import ProfileImage from '../shared/ProfileImage/ProfileImage';
import Sidebar from '../shared/Sidebar/Sidebar';

const PageNotFound = () => {
  return (
    <div className="section-container NF-container">
    <div className="content-wrap">
      <div className="sidebar-container">
        <ProfileImage />
        <Sidebar />
      </div>
      <div className="main-content-container NF-content">
        <h2 className="txt-danger text-center">404! Page Not Found</h2>
      </div>
    </div>
  </div>
  );
};

export default PageNotFound;