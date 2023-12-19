"use client";

import AccountPageItems from "@/components/AccountPageItems";
import Label from "@/components/Label";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useState } from "react";

const handleLogout = () => {
  // Implement logout logic here
};

export default function Account() {
  const [profile, setProfile] = useState({
    name: "Shounak Ghosh",
    email: "shounak_paul@whatever.com",
    phoneNumber: "+1234567890",
    address:
      "Kakatiya Hills, Vasanth Nagar Colony, Nizampet, Hyderabad, Telangana",
    gender: "Male",
    age: "50",
    // Add more profile information here
  });
  return (
    <MaxWidthWrapper>
      <div
        className="flex
      flex-col
      relative
      text-center
      "
      >
        <h1 className="text-2xl pb-5 pt-5 text-neutral-900 font-extrabold">
          Account Info
        </h1>
        <AccountPageItems className="truncate">
          <Label>Name:</Label> {profile.name}
        </AccountPageItems>
        <AccountPageItems className="truncate">
          <Label>Email:</Label> {profile.email}
        </AccountPageItems>
        <AccountPageItems className="truncate">
          <Label>Phone Number:</Label> {profile.phoneNumber}
        </AccountPageItems>
        <div className="flex">
          <AccountPageItems className="w-[50%] mr-1 truncate">
            <Label>Gender:</Label> {profile.gender}
          </AccountPageItems>
          <AccountPageItems className="w-[50%] ml-1 truncate">
            <Label>Age:</Label> {profile.age}
          </AccountPageItems>
        </div>
        <AccountPageItems className="">
          <Label>Address:</Label> {profile.address}
        </AccountPageItems>
      </div>
    </MaxWidthWrapper>
  );
}
