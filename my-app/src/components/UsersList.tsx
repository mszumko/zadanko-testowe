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
  //Jak sądzisz, jakieś info isLoading by było warto dodać do ładowania, tutaj mi się wydaje, żę dość szybko działa więc chyba ok?
  // Ale w normalnym projekcie, wiadomo, Loadin... label np. dodać must be :)
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
