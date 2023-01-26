import React from "react";

import { User } from "../model/user";
import UserItem from "./UserItem";
import Card from "../ui/Card";
import Button from "../ui/Button";

import classes from "./UserList.module.css";

const UsersList: React.FC<{
  usersData: User[];
  fetchFiveMoreProfile: () => void;
  verifyUser: (emial: string) => void;
}> = ({ usersData, fetchFiveMoreProfile, verifyUser }) => {
  const usersList = usersData.map((userData: User) => {
    return (
      <UserItem key={userData.id} userData={userData} verifyUser={verifyUser} />
    );
  });

  return (
    <Card className={classes["users"]}>
      <ul>{usersList}</ul>
      <div className={classes["button-container"]}>
        <Button onClick={fetchFiveMoreProfile}>Load five more!</Button>
      </div>
    </Card>
  );
};

export default UsersList;
