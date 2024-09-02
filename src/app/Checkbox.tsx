import React, { useRef } from "react";

export const Checkbox = ({index}: {index: number}) => {
  const i = useRef(index);
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
    console.log('check', i.current);
  };

  return (
    <input type={'checkbox'} checked={checked} onChange={handleChange} />
  );
};
