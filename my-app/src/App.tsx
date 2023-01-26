import React, { Fragment, useCallback, useEffect, useState } from "react";
import UsersList from "./components/UsersList";

import { User } from "./model/user";

function App() {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [iteration, setIteration] = useState<number>(1);

  const fetchUsersData = useCallback(async () => {
    //To jest tak głupie ale niby działa ale jestem pewny, że nie działa, lepiej już pewnie by było pobierać sobie 5 nowych
    //i na koniec merge robic z nowa tabelka i setować nowa tableke xD.
    // const results = 5 * iteration;
    // const response = await fetch(
    //   `https://randomuser.me/api/?results=${results}&seed=testUsers`
    // );

    //Tak jak tutaj hehe
    const response = await fetch(
      `https://randomuser.me/api/?results=5&seed=${iteration}`
    );

    if (!response.ok) {
      return;
    }

    const resData = await response.json();
    const newUsersDataArray: User[] = [];

    const formatDate = (date: string): string => {
      const newDate = new Date(date);
      return `${newDate.getDay()}-${newDate.getMonth()}-${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getSeconds()}`;
    };

    for (const data of resData.results) {
      newUsersDataArray.push({
        //Wiem, że to nie jest najlepszy sposób, bo w końcu dostanie takie smao ID, ale na razie pomaga z problem ID = null i nie wywala mi key reactowego
        id: data.id.value === null ? Math.random().toString() : data.id.value,
        userName: data.name.first,
        userLastName: data.name.last,
        email: data.email,
        image: {
          small: data.picture.thumbnail,
          large: data.picture.large,
        },
        address: {
          street: `${data.location.street.number} ${data.location.street.name}`,
          city: data.location.city,
          country: data.location.country,
        },
        birthday: formatDate(data.dob.date),
        registrationTime: formatDate(data.registered.date),
      });
    }

    setUsersData((prevUsersData: User[]) => {
      return [...prevUsersData, ...newUsersDataArray];
    });
  }, [iteration]);

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

  const fetchFiveMoreProfile = () => {
    setIteration(iteration + 1);
  };

  return (
    <Fragment>
      <UsersList
        usersData={usersData}
        fetchFiveMoreProfile={fetchFiveMoreProfile}
      />
    </Fragment>
  );
}

export default App;
