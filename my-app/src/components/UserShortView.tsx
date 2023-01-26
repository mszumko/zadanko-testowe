import React from "react";

import classes from "./UserShortView.module.css";

const UserShortView: React.FC<{
  userName: string;
  userLastName: string;
  imageUrl?: string;
  email: string;
  toggleView: () => void;
}> = ({ userName, userLastName, imageUrl, email, toggleView }) => {
  const fullName = `${userName} ${userLastName}`;

  return (
    <li onClick={toggleView}>
      <div>
        <div>
          <img src={imageUrl} alt={userName} />
        </div>
        <div>{fullName}</div>
        <div>{email}</div>
      </div>
    </li>
  );
};

export default UserShortView;
