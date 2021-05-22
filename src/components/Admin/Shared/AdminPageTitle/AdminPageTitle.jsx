import React from 'react';
import './AdminPageTitle.css'

const AdminPageTitle = ({title}) => {
  return (
    <h2 className="main-portion__title mb-3">
      <span>{title}</span>
    </h2>
  );
};

export default AdminPageTitle;