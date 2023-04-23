import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'all', label: 'all' },
  { value: 'follow ', label: 'follow ' },
  { value: 'followings ', label: 'followings ' },
];

export const Dropdown = () => {
  const [currentValue, setcurrentValue] = useState('all');

  useEffect(() => {
    console.log('currenValue', currentValue);
  }, [currentValue]);

  const getValue = () =>
    currentValue ? options.find(({ value }) => value === currentValue) : '';

  const handleChangeValue = newValue => {
    setcurrentValue(newValue.value);
  };

  return (
    <Select options={options} value={getValue()} onChange={handleChangeValue} />
  );
};
