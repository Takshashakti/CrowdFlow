import React from "react";
import { json } from "stream/consumers";
import { Button } from "./ui/button";

export default function ConfirmUserByAuthority({
  name,
  email,
  phoneNumber,
  address,
  gender,
  age,
  callback,
  buttonName
}: {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  gender: string;
  age: number;
  buttonName: string;
  callback: () => void;
}) {
  const user = {
    name,
    email,
    phoneNumber,
    age,
    gender,
    address,
  };

  

  return (
    <>
      <div className="p-3 rounded bg-gray-50 flex flex-col">
        <h3 className="text-xl my-2">
          Name: <span className="font-bold">{user.name}</span>
        </h3>
        <div className="flex justify-between">
          <div className="flex justify-start">
            <h3 className="text-base mr-10">
              Age: <span className="font-bold">{user.age}</span>
            </h3>
            <h3 className="text-base">
              Gender: <span className="font-bold">{user.gender}</span>
            </h3>
          </div>
          <div className="flex justify-start">
            <h3 className="text-base mr-10">
              Email: <span className="font-bold">{user.email}</span>
            </h3>
            <h3 className="text-base">
              Phone Number:{" "}
              <span className="font-bold">{user.phoneNumber}</span>
            </h3>
          </div>
          <h3 className="text-base">
            Address: <span className="font-bold">{user.address}</span>
          </h3>
        </div>
        <div className="flex justify-end mx-8">
          <Button
            onClick={callback}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
          >
            {buttonName}
          </Button>
        </div>
      </div>
    </>
  );
}
