import React, { forwardRef } from "react";

type StyledButtonProps = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  width?: "full_width" | string;
  classes?: string;
};

const DownloadButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  (
    {
      text,
      onClick,
      disabled = false,
      width,
      classes,
    },
    ref
  ) => {
    const propWidth =
      width === "full_width" ? "w-full" : width ? width : "w-[7.4375rem]";

    return (
      <button
        className={`bg-primary text-white shadow-xl ${propWidth} md:${propWidth} select-none rounded-[0.625rem] hover:opacity-90 ${classes}`}
        onClick={onClick}
        type="button"
        ref={ref}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
);

// Set the displayName separately
DownloadButton.displayName = 'DownloadButton';

export default DownloadButton;