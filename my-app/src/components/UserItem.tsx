import React, { Fragment, useState } from "react";

import { User } from "../model/user";
import UserShortView from "./UserShortView";
import UserFullView from "./UserFullView";

const UserItem: React.FC<{
  userData: User;
  verifyUser: (email: string) => void;
}> = ({ userData, verifyUser }) => {
  const [view, setToggleView] = useState<boolean>(false);

  const toggleView = () => {
    setToggleView(!view);
  };

  return (
    <Fragment>
      {!view ? (
        <UserShortView
          key={userData.id}
          userName={userData.userName}
          userLastName={userData.userLastName}
          email={userData.email}
          imageUrl={userData.image.small}
          verified={userData.verified}
          toggleView={toggleView}
        />
      ) : (
        <UserFullView
          userData={userData}
          toggleView={toggleView}
          verifyUser={verifyUser}
        />
      )}
    </Fragment>
  );
};

export default UserItem;
