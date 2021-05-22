import React from 'react';
import profileImg from '../../../images/profile-transparent.png'
import './ProfileImage.css'

const ProfileImage = () => {
  return (
    <div className="image-wrap">
      <img className="img-fluid" src={profileImg} alt=""/>
    </div>
  );
};

export default ProfileImage;