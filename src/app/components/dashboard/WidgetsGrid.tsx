"use client";

import React, { useEffect } from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppDispatch, useAppSelector } from "@/store";
import { initCounterState } from "@/store/counter/counterSlice";
import { IoCafeOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center">
      <SimpleWidget
        title={count.toString()}
        subTitle="Productos agregados"
        icon={<IoCafeOutline size={50} className="text-blue-600" />}
        label="Contador"
        href="/dashboard/counter"
      />
      {/* <SimpleWidget /> */}
    </div>
  );
};
