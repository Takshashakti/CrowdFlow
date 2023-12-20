"use client";

import React, { useRef, useState } from "react";
import DashboardSidePannel from "@/components/DashboardSidePannel";
import ConfirmUserByAuthority from "@/components/ConfirmUserByAuthority";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useLocalStorage } from "@uidotdev/usehooks";

type User = {
  name: string;
  age: number;
  id: number;
  phnNo: string;
  gender: string;
};

function DashboardMembers() {
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const phoneNumRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useLocalStorage<User[]>("users", []);

  const searchForUsers = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const userAll = await fetch(
      "https://crowdflowworkers.karmakarmeghdip.workers.dev/user/get?phnNo=" +
        phoneNumRef.current?.value
    );

    const js = await userAll.json();
    setSearchResults(js);
  };

  function addUserToMinucipality(id: User) {
    let ut = users;
    ut.push( id );
    setUsers(ut);
  }

  function removeUserFromMinucipality(id: User) {
    let ut = users;
    ut = ut.filter((user) => user.id !== id.id);
    setUsers(ut);
  }

  return (
    <>
      <DashboardSidePannel activeTab="members" />
      <div className="p-4 sm:ml-[calc(15vw)]">
        <div className="p-3 rounded bg-gray-50 mb-3">
          <h3 className="text-xl font-bold">Add Members</h3>

          <div className="flex justify-center items-center px-4">
            <div className="w-[calc(25vw)]">
              {/* <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label> */}
              <Input
                type="text"
                ref={phoneNumRef}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Phone Number"
                required
              />
            </div>

            <div className="mx-3 h-full">
              <Button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                onClick={searchForUsers}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        {searchResults.length > 0 &&
          searchResults.map((data, ind) => {
            return (
              <ConfirmUserByAuthority
                key={ind}
                name={data.name}
                age={data.age}
                email="contact@gmail.com"
                phoneNumber={data.phnNo}
                gender={data.gender}
                address="N.A."
                buttonName="Add"
                callback={() => { addUserToMinucipality(data) }}
              />
            );
          })}

          <hr />
          <hr />

          <div className="p-3 rounded bg-gray-50 mb-3">
          <h3 className="text-xl font-bold">Members</h3>
          </div>  

          {
            users.map((data, ind) => {
              return (
                <ConfirmUserByAuthority
                  key={ind}
                  name={data.name}
                  age={data.age}
                  email="contact@gmail.com"
                  phoneNumber={data.phnNo}
                  gender={data.gender}
                  address="N.A."
                  buttonName="Remove"
                  callback={() => { removeUserFromMinucipality(data) }}
              />
            );
          })}
          

          
      </div>
    </>
  );
}

export default DashboardMembers;
