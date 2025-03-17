"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export default function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="border-6 bg-neutral-300 dark:bg-slate-900 text-black dark:text-white border-neutral-900 dark:border-slate-800 "
      >
        Contact Us
      </Button>
    </div>
  );
}
