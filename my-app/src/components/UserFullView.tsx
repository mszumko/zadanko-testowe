import React from "react";
import { User } from "../model/user";

const UserFullView: React.FC<{
  userData: User;
  toggleView: () => void;
}> = ({ userData, toggleView }) => {
  const fullName = `${userData.userName} ${userData.userLastName}`;

  return (
    <li onClick={toggleView}>
      <div className="image">
        <img src={userData.image.large} alt={userData.userName} />
      </div>
      <div className="name">{fullName}</div>
      <div className="email">{userData.email}</div>
      <div className="additionalInformation">
        <div className="localization">
          <div className="street">{userData.address.street}</div>
          <div className="city">{userData.address.city}</div>
          <div className="country">{userData.address.country}</div>
        </div>
        <div className="birthday">
          <span>DOB: </span>
          <span>{userData.birthday}</span>
        </div>
        <div className="registrationDate">
          <span>Registration time: </span>
          <span>{userData.registrationTime}</span>
        </div>
      </div>
    </li>
  );
};

export default UserFullView;
