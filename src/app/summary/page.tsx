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
      <div className="flex flex-col relative text-center">
        <h1 className="pb-16 pt-10 text-3xl text-center font-bold">
          Report Summary
        </h1>
        <AccountPageItems className="truncate">
          <Label>Hi</Label> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo rem quam ipsam, nisi libero quas voluptate repellat, amet nam consequuntur natus alias vero reprehenderit, mollitia architecto id fugit praesentium.</p>
        </AccountPageItems>
        <AccountPageItems className="truncate">
          <Label>Hi</Label> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut deleniti cumque doloremque sed nisi reprehenderit odio repudiandae dolore obcaecati impedit dicta aliquid aspernatur, voluptas delectus rerum. Hic totam corporis illum?</p>
        </AccountPageItems>
        <AccountPageItems className="truncate">
          <Label>Hi</Label> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, quasi facilis! Numquam aspernatur nostrum sunt unde placeat natus maxime! Maxime delectus rerum repellendus veniam magnam, quaerat voluptate enim excepturi aliquam?</p>
        </AccountPageItems>
        <AccountPageItems className="truncate">
          <Label>Hi</Label> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In beatae nam, odit doloremque rerum odio cupiditate! Doloribus consequuntur molestias autem assumenda. Aliquid architecto, animi ad officia aut quos vitae nam.</p>
        </AccountPageItems>
        <AccountPageItems className="truncate">
          <Label>Hi</Label> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptates blanditiis a vel cupiditate omnis autem assumenda culpa cumque tempore, nostrum odio est eum eius? Fuga minima asperiores iusto laudantium.</p>
        </AccountPageItems>
        
      </div>
    </MaxWidthWrapper>
  );
}
