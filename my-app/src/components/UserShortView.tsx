import React from "react";

const UserShortView: React.FC<{
  userName: string;
  userLastName: string;
  imageUrl?: string;
  email: string;
  toggleView: () => void;
}> = ({ userName, userLastName, imageUrl, email, toggleView }) => {
  const fullName = `${userName} ${userLastName}`;

  return (
    <div onClick={toggleView}>
      <div className="image">
        <img src={imageUrl} alt={userName} />
      </div>
      <div className="name">{fullName}</div>
      <div className="email">{email}</div>
    </div>
  );
};

export default UserShortView;
