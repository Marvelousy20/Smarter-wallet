"use client";

import React, { useState } from "react";
import clsx from "clsx";

interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputClassName?: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  id,
  inputClassName,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className="relative">
      <input
        id={id}
        className={clsx(
          "peer h-16 px-4 w-full bg-transparent border border-[#819DF54D] text-gray-900 placeholder-transparent focus:outline-none focus:border-[#622B2B] rounded-[16px]",
          inputClassName
        )}
        placeholder={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 text-gray-600 text-sm transition-all duration-300
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600
                    ${
                      isFocused || value
                        ? "top-2 text-xs text-blue-600"
                        : "top-1/2 -translate-y-1/2"
                    }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
