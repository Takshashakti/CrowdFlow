/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
const reportincident =[
     'report-incident-1',
     'report-incident-2',
     'report-incident-3'
]
const listItems= reportincident.map(reportincident => <li key={reportincident}> {reportincident} </li>);
// return <ul>{report-incident}</ul>

export default function Account() {
    return(
    <div id="reportincident" className="flex flex-col px-6 h-12">
    <div className="px=5 py=5">
        <h1 className="pb-16 pt-10 text-3xl text-center text-black-800 font-bold"> Notifications </h1>
    </div>
        <div id="report-incident-1" className="border flex gap-5 px-5 py-8 text-l rounded-sm bg-slate-100 flex-col justify-end">
          <div className="flex flex-row ">
          <svg xmlns="http://www.w3.org/2000/svg"  width="78" height="78" viewBox=" 0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-ring px-2 pr-4"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/><path d="M22 8c0-2.3-.8-4.3-2-6"/></svg>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing neque at voluptates architecto nihil ipsam. Quod quas adipisci iste!</p> 
          </div>
          
           <Dialog>
              <DialogTrigger className="bg-black  scroll-px-8 py-1 h-16 w-full margin-mx-auto rounded-sm text-white"> View Details </DialogTrigger>
              <DialogContent className="px-6">
              <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Report Details</DialogTitle><br></br>
              <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
              </DialogDescription>
              </DialogHeader>
              </DialogContent>
            </Dialog>
        </div>
        

    <br></br>

    
    

          
          
    
    </div>   )}


    
