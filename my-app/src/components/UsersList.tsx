import React from "react";

import { User } from "../model/user";
import UserItem from "./UserItem";

const UsersList: React.FC<{
  usersData: User[];
  fetchFiveMoreProfile: () => void;
}> = ({ usersData, fetchFiveMoreProfile }) => {
  const usersList = usersData.map((userData: User) => {
    return <UserItem key={userData.id} userData={userData} />;
  });

  return (
    <div className="userList">
      {usersList}
      <div>
        <button onClick={fetchFiveMoreProfile}>Load five more!</button>
      </div>
    </div>
  );
};

export default UsersList;
