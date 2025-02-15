"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/app/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const clickMe: () => void = () => {
    console.log(!isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full max-h-screen grid grid-cols-2">
      <div className=" flex border border-red-400">
        <Image
          src="/images/loginLogo.svg"
          alt="Login Logo"
          width={20}
          height={20}
        />
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <CustomButton text="Edit Profile" onClick={clickMe} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">Hello</div>
          <DialogFooter>
            <CustomButton onClick={clickMe} text="Save changes" />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Page;
