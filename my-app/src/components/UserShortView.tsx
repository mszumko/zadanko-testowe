import React from "react";

const UserShortView: React.FC<{
  userName: string;
  userLastName: string;
  imageUrl?: string;
  email: string;
  verified: boolean;
  toggleView: () => void;
}> = ({ userName, userLastName, imageUrl, email, verified, toggleView }) => {
  const fullName = `${userName} ${userLastName}`;

  return (
    <li onClick={toggleView}>
      <div>
        <div>
          <img src={imageUrl} alt={userName} />
          {verified && <span>Verified!</span>}
        </div>
        <div>{fullName}</div>
        <div>{email}</div>
      </div>
    </li>
  );
};

export default UserShortView;
