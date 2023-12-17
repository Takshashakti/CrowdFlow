"use client"

import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
const TEST_OTP = "696969";

function SignInPage() {
  
}

export default function DemoCreateAccount() {
    const [otpSent, setOtpSent] = useState<boolean>(false);
  const [showOTPError, setSetshowOTPError] = useState<boolean>(false);
  const phoneRef = useRef<HTMLInputElement>(null);
  const otpRef = useRef<HTMLInputElement>(null);
  const router = useRouter()
  return (
    <div className="flex flex-col px-3">
      <h1 className="pb-16 pt-10 text-2xl font-bold">Sign In</h1>
      <form className="flex flex-col">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              className="rounded-none border px-1 py-2 text-xl"
            ref={phoneRef}
            />
          </div>

          {!otpSent ? (
            <></>
          ) : (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <label htmlFor="phone">OTP</label>
                {showOTPError && (
                  <span className="text-sm text-red-500">Incorrect OTP!</span>
                )}
              </div>
              <input
                type="text"
                name="otp"
                ref={otpRef}
                className="rounded-none border px-1 py-2 text-xl"
              />
            </div>
          )}
        </div>

        {otpSent && (
          <div className="my-5 flex justify-end">
            <a href="#" className="text-sm text-[#4172DC] underline">
              Resend OTP
            </a>
          </div>
        )}

        {!otpSent ? (
          <button
            className="mt-5 bg-[black] py-4 rounded-md text-white"
            onClick={(e) => {
              e.preventDefault();
              if (
                phoneRef.current?.value &&
                true /* TODO: phone number checking regexp */
              )
                setOtpSent(true);
            }}
          >
            Get OTP
          </button>
        ) : (
          <button
            type="submit"
            className="bg-[black] py-4 text-white"
            onClick={(e) => {
              e.preventDefault();
              if (otpRef.current?.value === TEST_OTP) {
                localStorage.setItem("authToken", "6969");
                void router.push("/");
              } else setSetshowOTPError(true);
            }}
          >
            Sign In
          </button>
        )}
      </form>
    </div>

  )
}            