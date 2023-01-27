import React from "react";
import { User } from "../model/user";
import Button from "../ui/Button";

const UserFullView: React.FC<{
  userData: User;
  toggleView: () => void;
  verifyUser: (email: string) => void;
}> = ({ userData, toggleView, verifyUser }) => {
  const fullName = `${userData.userName} ${userData.userLastName}`;

  const button = (
    <Button onClick={verifyUser.bind(null, userData.email)}>Verify</Button>
  );

  return (
    <li>
      <div className="userInformation" onClick={toggleView}>
        <div className="image">
          <img src={userData.image.large} alt={userData.userName} />
          {userData.verified && <span>Verified!</span>}
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
      </div>
      {userData.verified || button}
    </li>
  );
};

export default UserFullView;
