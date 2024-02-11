import React from "react";

interface IProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: IProps) {
  return (
    <div className="flex gap-[2rem] flex-col">
      <p className="text-customGray tracking-[0.39375rem] uppercase text-[0.875rem] font-[700] text-center xl:text-[1rem] 2xl:text-[1rem]">
        {title}
      </p>
      <p className="text-darkBlue text-2xl leading-[3rem] mb-12 md:text-[3.25rem] font-[700] text-center sm:text-4xl stm:text-4xl xl:text-5xl 2xl:text-5xl">
        {subtitle}
      </p>
    </div>
  );
}

export default Header;
