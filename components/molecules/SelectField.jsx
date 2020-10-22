import React from 'react';

import FormLabel from '../atoms/FormLabel';
import Select from '../atoms/Select';
import ValidateMessage from '../atoms/ValidateMessage';

import { requiredValidate } from '../../validates';

// -----------------------------------------------
//
// type Props = {
//   register: {register};
//   errors: {errors};
//   label: string;
//   name: string;
//   options: {...{key: string | number, value: number | string}}
//   required?: boolean;
//   validates?: {...function};
// }

// -----------------------------------------------
//
const SelectField = ({
  register,
  errors,
  label,
  name,
  options,
  required = false,
  validates,
}) => {
  return (
    <div>
      <FormLabel
        required = {required}
      >
        {label}
      </FormLabel>

      <Select
        register = {register}
        name = {name}
        options = {options}
        validates = {validates}
      />

      <ValidateMessage
        errors = {errors}
        name = {name}
      />
    </div>
  );
}

export default SelectField;


// -----------------------------------------------
//
export const GenderField = ({
  register,
  errors,
}) => {
  return (
    <SelectField
      register = {register}
      errors = {errors}
      label = '性別'
      name = 'gender'
      required = {true}
      options = {[
        {key: 0, formValue: '', value: '選択してください'},
        {key: 1, formValue: '1', value: '男性'},
        {key: 2, formValue: '2', value: '女性'},
        {key: 3, formValue: '3', value: 'その他'},
        {key: 4, formValue: '4', value: '選択しない'}
      ]}
      validates = {{requiredValidate}}
    />
  );
}