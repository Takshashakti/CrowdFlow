"use client"

import AccountPageItems from "@/components/AccountPageItems";
import Label from "@/components/Label";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useState } from 'react';


    

const handleLogout = () => {
        // Implement logout logic here
    };


export default function Account() {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phoneNumber: '+1234567890',
        address: 'XYZ',
        gender:'Attack Helicopter',
        age: '1000'
        // Add more profile information here
    });
    return(
        
      <MaxWidthWrapper>
      <div className='flex
      flex-col
      relative
      text-center
      text-white
     
      '>
        <h1 className='text-2xl pb-5 pt-5 text-neutral-900 font-extrabold'>Account Info</h1>
        <div className="flex">
        <AccountPageItems className="w-[40vw]"><Label>Name:</Label> {profile.name}</AccountPageItems>
        <AccountPageItems className="w-[60vw]"><Label>Email:</Label> {profile.email}</AccountPageItems></div>
        <div className="flex">
        <AccountPageItems className="w-[60vw]"><Label>Phone Number:</Label> {profile.phoneNumber}</AccountPageItems>
        <AccountPageItems className="w-[40vw]"><Label>Gender:</Label> {profile.gender}</AccountPageItems></div>
        <div className="flex">
        <AccountPageItems className="w-[20vw]"><Label>Age:</Label> {profile.age}</AccountPageItems>
        <AccountPageItems className="w-[80vw]"><Label>Address:</Label> {profile.address}</AccountPageItems></div>
        
      </div>
      </MaxWidthWrapper>
    )
  }
  

