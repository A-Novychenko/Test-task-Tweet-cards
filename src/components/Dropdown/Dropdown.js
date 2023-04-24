import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeStatusFilter } from 'redux/statusFilter/statusFilterSlice';
import { SelectStyled } from './Dropdown.styled';

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
    <SelectStyled
      options={options}
      value={getValue()}
      onChange={handleChangeValue}
      theme={theme => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          primary25: '#5cd3a8',
          primary: '#5736a3',
        },
      })}
    />
  );
};
