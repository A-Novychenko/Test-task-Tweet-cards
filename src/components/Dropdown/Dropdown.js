import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'all', label: 'all' },
  { value: 'follow ', label: 'follow ' },
  { value: 'followings ', label: 'followings ' },
];

export const Dropdown = () => (
  <Select options={options} defaultValue={options[0]} />
);

// import React, { CSSProperties } from 'react';

// import Select from 'react-select';
// import {
//   ColourOption,
//   colourOptions,
//   FlavourOption,
//   GroupedOption,
//   groupedOptions,
// } from '../data';

// const groupStyles = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
// };
// const groupBadgeStyles: CSSProperties = {
//   backgroundColor: '#EBECF0',
//   borderRadius: '2em',
//   color: '#172B4D',
//   display: 'inline-block',
//   fontSize: 12,
//   fontWeight: 'normal',
//   lineHeight: '1',
//   minWidth: 1,
//   padding: '0.16666666666667em 0.5em',
//   textAlign: 'center',
// };

// const formatGroupLabel = (data: GroupedOption) => (
//   <div style={groupStyles}>
//     <span>{data.label}</span>
//     <span style={groupBadgeStyles}>{data.options.length}</span>
//   </div>
// );

// export default () => (
//   <Select<ColourOption | FlavourOption, false, GroupedOption>
//     defaultValue={colourOptions[1]}
//     options={groupedOptions}
//     formatGroupLabel={formatGroupLabel}
//   />
// );
