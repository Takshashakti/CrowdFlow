"use client"

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import Link from 'next/link';

export default function DemoCreateAccount() {
  return (
    <div className="flex flex-col px-6 h-7">
      <h1 className="pb-16 pt-10 text-2xl text-black-800 font-bold">Sign Up </h1>
      <form className="flex flex-col ">
        <div className="flex flex-col gap-7"></div>
            <div className="flex flex-col">
                <div className="flex justify-between font-bold">
                <label htmlFor="phone ">Name</label>
                </div>
                <input
                type="text"
                name="Name"
                className=" border px-1 py-2 text-l rounded-md bg-slate-100"
        
                
                required/>
            </div>
            <br></br>
            <div className="flex flex-col ">
                <div className="flex justify-between font-bold ">
                <label htmlFor="email">Email</label>
                </div>
                <input
                type="text"
                name="Email"
                className=" border px-1 py-2 text-xl rounded-md bg-slate-100 "
                
               
                />
            </div><br></br>
            <div className="flex flex-col">
                <div className="flex justify-between font-bold">
                <label htmlFor="phone">Gender</label>
                </div>
                
               <div className="border-2 rounded-md"> <select className="w-full bg-slate-100 px-1 py-2 "
               name="gender" id="gender" >
                       <option value="" >Select Gender</option>
                       <option value="Male">Male</option>
                       <option value="Female">Female</option>
                       <option value="Other">Other</option>
                       <option value="Prefer not to say">Prefer not to say</option>
                </select> </div>                  
                
            </div>
           <br></br>
            <div className="flex flex-col">
                <div className="flex justify-between font-bold">
                {/* <label htmlFor="phone" > DOB </label> */}
                </div>
                <fieldset>
                       <legend><b>Date of Birth</b></legend>

                       <input type="date" name="dateofbirth" className=" border px-1 py-2 text-xl rounded-md bg-slate-100 "></input>

                      
                </fieldset>
                                     
            </div><br></br>

            <div className="flex flex-col">
                <div className="flex justify-between font-bold">
                <label htmlFor="phone">Location</label>
                </div>
                <input
                type="text"
                name="Gender"
                className=" border px-1 py-2 text-xl rounded-md bg-slate-100"
                
               
                required/>
            </div>
            <br></br>
            <div className="flex flex-col ">
            <div className="flex justify-between font-bold">
                <label htmlFor="phone">Phone</label></div>
                <input
                    type="text"
                    name="phone"
                    className="border px-1 py-2 text-xl rounded-md bg-slate-100"
                    
                  
                    required />
            </div><br></br>
            

            <button
            type="submit"
            className="bg-[black] py-4 text-white rounded-lg">
            Sign Up
            </button>
            </form>
<br></br>
            <div className="flex justify-between font-medium">
                <p> Already registered ?</p>
                <Link href="src/app/signin/page.tsx" className="text-sm text-[#4172DC] underline">
                Sign In
                </Link>
            </div>
    </div>
  )
}              