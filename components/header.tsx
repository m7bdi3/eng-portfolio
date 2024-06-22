"use client";

import React from "react";
import { HeaderFadeDown } from "./header/header-text";
import { HeaderLantern } from "./header/header-lantern";
import { HeaderF1 } from "./header/header-f1";

export const MainHeader = () => {
  return (
    <div className="relative h-[100svh] z-50">
      <div className="w-full h-full">
        <HeaderLantern />
        <HeaderF1 />
      </div>
      <div className="absolute z-50 top-[30%] flex w-full flex-col items-center self-start">
        <HeaderFadeDown />
      </div>
    </div>
  );
};
