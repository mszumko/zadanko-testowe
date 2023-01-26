import React from "react";

import { User } from "../model/user";
import UserItem from "./UserItem";
import Card from "../ui/Card";

import classes from "./UserList.module.css";

const UsersList: React.FC<{
  usersData: User[];
  fetchFiveMoreProfile: () => void;
}> = ({ usersData, fetchFiveMoreProfile }) => {
  const usersList = usersData.map((userData: User) => {
    return <UserItem key={userData.id} userData={userData} />;
  });

  return (
    <Card className={classes["users"]}>
      <ul>{usersList}</ul>
      <div className={classes["button-container"]}>
        <button className={classes.button} onClick={fetchFiveMoreProfile}>
          Load five more!
        </button>
      </div>
    </Card>
  );
};

export default UsersList;
