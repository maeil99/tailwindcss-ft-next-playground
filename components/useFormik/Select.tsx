import React, { ChangeEventHandler, FocusEventHandler } from "react";

interface OptionsProps {
  value: string;
  key: string;
}

interface ISelectProps {
  name: string;
  label: string;
  options: OptionsProps[];
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
  onBlur: FocusEventHandler<HTMLSelectElement> | undefined;
  className?: string;
}

function Select({
  label,
  name,
  options,
  className,
  onBlur,
  onChange,
  value,
}: ISelectProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`registerField ${className}`}
      >
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
