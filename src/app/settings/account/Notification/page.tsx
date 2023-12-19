/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NotificationItems from "@/components/NotificationItems"

const handleLogout = () => {
  // Implement logout logic here
};

export default function Notification() {
  const [notification, setNotification] = useState([
     "Lorem, ipsum dolor sit  Quod quas adipisci.....",
     "Lorem, ipsum dolor sit amet consectetu",
     "Lorem, ipsum dolor sit amet consectetur...",
     "Lorem, ipsum dolor sit amet consectetur..ddddd.",
    // Add more profile information here
  ]);

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col relative text-center">
        <h1 className="pb-16 pt-10 text-3xl text-center font-bold">
          Notifications
        </h1>

        {
            notification.map((val, ind) => {
                return (
                    <NotificationItems className="truncate" key={ind}>
                        {val}
                    </NotificationItems>
                )
            })
        }
          
            
          </div>
        
      
    </MaxWidthWrapper>
  );
}
