"use client";

import React from "react";
import { HeaderFadeDown } from "./header/header-text";
import { HeaderLantern } from "./header/header-lantern";
import { HeaderF1 } from "./header/header-f1";

export const MainHeader = () => {
  return (
    <div className="relative h-[100dvh] w-full flex flex-col items-center justify-around">
      <HeaderLantern />
      <HeaderFadeDown />
      <HeaderF1 />
    </div>
  );
};
