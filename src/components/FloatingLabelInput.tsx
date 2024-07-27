"use client";

import React, { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
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
  type,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <input
        id={id}
        type={type === "password" && !showPassword ? "password" : "text"}
        className={clsx(
          "peer h-16 px-4 w-full bg-transparent border border-[#819DF54D] text-[white] placeholder-transparent focus:outline-none focus:border-[#622B2B] rounded-[16px]",
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
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-[#819DF5] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600
                    ${
                      isFocused || value
                        ? "top-2 text-xs text-blue-600"
                        : "top-1/2 -translate-y-1/2"
                    }`}
      >
        {label}
      </label>

      {type === "password" && (
        <div
          className="absolute inset-y-0 right-4 flex items-center text-lg cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <PiEyeSlash color="white" size={24} />
          ) : (
            <PiEyeLight className="white" size={24} />
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingInput;
