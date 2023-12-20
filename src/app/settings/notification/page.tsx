/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NotificationItems from "@/components/NotificationItems";
import { cn } from "../../../lib/utils";

const handleLogout = () => {
  // Implement logout logic here
};

export default function Notification() {
  const [notification, setNotification] = useState({
    details: "Lorem, ipsum dolor sit  Quod quas adipisci.....",
    details1: "Lorem, ipsum dolor sit amet consectetu",
    details2: "Lorem, ipsum dolor sit amet consectetur...",
    details3: "Lorem, ipsum dolor sit amet consectetur..dddddddddddddddd.",

    // Add more profile information here
  });

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col relative text-center">
        <h1 className="pb-16 pt-10 text-3xl text-center font-bold">
          Notifications
        </h1>

        <NotificationItems className="truncate ">
          {notification.details}
        </NotificationItems>
        <NotificationItems className="truncate">
          {notification.details1}
        </NotificationItems>
        <NotificationItems className="truncate">
          {notification.details2}
        </NotificationItems>
        <NotificationItems className="truncate">
          {notification.details}
        </NotificationItems>
      </div>
    </MaxWidthWrapper>
  );
}
