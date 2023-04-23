import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { changeStatusFilter } from 'redux/statusFilter/statusFilterSlice';

const options = [
  { value: 'all', label: 'all' },
  { value: 'follow', label: 'follow' },
  { value: 'followings', label: 'followings' },
];

export const Dropdown = ({ resetCurrentPage }) => {
  const [currentValue, setcurrentValue] = useState('all');
  const dispatch = useDispatch();

  const getValue = () =>
    currentValue ? options.find(({ value }) => value === currentValue) : '';

  const handleChangeValue = newValue => {
    setcurrentValue(newValue.value);
    dispatch(changeStatusFilter(newValue.value));
    resetCurrentPage();
  };

  return (
    <Select options={options} value={getValue()} onChange={handleChangeValue} />
  );
};
