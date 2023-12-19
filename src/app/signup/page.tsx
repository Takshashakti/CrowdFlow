"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DemoCreateAccount() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phnNo: "",
    gender: "",
    age: 0,
    location: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <div className="flex flex-col px-6 h-7">
      <h1 className="pb-16 pt-10 text-2xl text-black-800 font-bold">
        Sign Up{" "}
      </h1>
      <form
        className="flex flex-col "
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);

          const formUrl = "";
          const data = new FormData();

          Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value as string);
          });

          fetch(
            "https://crowdflowworkers.karmakarmeghdip.workers.dev/user/register",
            {
              method: "POST",
              body: JSON.stringify(formData),
              // mode: "no-cors"
            }
          ).then(async (res) => console.log(await res.text()));

          const loginData = {
            phnNo: formData.phnNo,
          };

          fetch(
            "https://crowdflowworkers.karmakarmeghdip.workers.dev/user/login",
            {
              method: "POST",
              body: JSON.stringify(loginData),
            }
          ).then(async (o) => {
            const res = await o.json();
            const token = res[0].token;
            console.log(token);
            localStorage.setItem("userAuthToken", token);
            void router.push("/");
          });
        }}
      >
        <div className="flex flex-col gap-7"></div>
        <div className="flex flex-col">
          <div className="flex justify-between font-bold">
            <label htmlFor="phone ">Name</label>
          </div>
          <input
            type="text"
            name="name"
            className=" border px-1 py-2 text-l rounded-md bg-slate-100"
            onChange={handleInput}
            value={formData.name}
            required
          />
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
        </div>
        <br></br>
        <div className="flex flex-col">
          <div className="flex justify-between font-bold">
            <label htmlFor="phone">Gender</label>
          </div>

          <div className="border-2 rounded-md">
            {" "}
            <select
              className="w-full bg-slate-100 px-1 py-2 "
              name="gender"
              id="gender"
              onChange={handleSelect}
              value={formData.gender}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>{" "}
          </div>
        </div>
        <br></br>
        <div className="flex flex-col">
          <div className="flex justify-between font-bold">
            {/* <label htmlFor="phone" > DOB </label> */}
          </div>
          <fieldset>
            <legend>
              <b>Age</b>
            </legend>

            <input
              type="text"
              name="age"
              className=" border px-1 py-2 text-xl rounded-md bg-slate-100 "
              onChange={handleInput}
              value={formData.age}
            ></input>
          </fieldset>
        </div>
        <br></br>

        <div className="flex flex-col">
          <div className="flex justify-between font-bold">
            <label htmlFor="phone">Location</label>
          </div>
          <input
            type="text"
            name="location"
            className=" border px-1 py-2 text-xl rounded-md bg-slate-100"
            onChange={handleInput}
            value={formData.location}
            required
          />
        </div>
        <br></br>
        <div className="flex flex-col ">
          <div className="flex justify-between font-bold">
            <label htmlFor="phone">Phone</label>
          </div>
          <input
            type="text"
            name="phnNo"
            className="border px-1 py-2 text-xl rounded-md bg-slate-100"
            onChange={handleInput}
            value={formData.phnNo}
            required
          />
        </div>
        <br></br>

        <button type="submit" className="bg-[black] py-4 text-white rounded-lg">
          Sign Up
        </button>
      </form>
      <br></br>
      <div className="flex justify-between font-medium">
        <p> Already registered ?</p>
        <Link
          href="src/app/signin/page.tsx"
          className="text-sm text-[#4172DC] underline"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
