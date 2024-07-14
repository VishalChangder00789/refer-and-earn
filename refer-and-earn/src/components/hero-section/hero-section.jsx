// src/components/HeroSection.js
import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import refer1 from "../../assets/refer1.png";

const HeroSection = ({ onOpenModal }) => {
  return (
    <div className="flex justify-between h-[100vh] items-center">
      <div className="w-[50%] h-[100%]flex justify-center items-center ">
        <img src={refer1} className="h-[100%] w-[100%]" />
      </div>
      <div className="w-[50%] h-[100%] flex flex-col items-center justify-center">
        <div className="mb-[5%] flex w-[90%] h-[10%] items-center text-[40px] justify-center font-bold text-orange-400">
          GET 5% CASHBACK ON A REFER !!
        </div>
        <div className="flex w-[60%] h-[10%] items-center justify-center text-[16px] font-semibold text-gray-800">
          Refer your friend and earn a cashback on every course they watch.
        </div>

        <div className="flex w-[60%] h-[10%] items-center justify-center text-[16px] font-semibold text-gray-800">
          Join India's best online coaching platform and get the best coaching
          advices from India's top valued and performing professional coaches
        </div>

        <Button
          sx={{ width: "20%", margin: "5%" }}
          variant="contained"
          color="primary"
          onClick={onOpenModal}
        >
          Refer Now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
