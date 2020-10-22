import React from 'react';

import FormLabel from '../atoms/FormLabel';
import HalfInput from '../atoms/HalfInput';
import ValidateMessage from '../atoms/ValidateMessage';

import { requiredValidate, zenkakuValidate } from '../../validates';

import { FlexWrapper } from '../atoms/layouts';

// -----------------------------------------------
//
// type Props = {
//   register: {register};
//   errors: {errors};
//   label: string;
//   name: string;
//   type?: string;
//   placeholder: string;
//   required?: boolean;
//   validates?: {...function};
// }

// -----------------------------------------------
//
const HalfInputField = ({
  register,
  errors,
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  validates,
}) => {
  return (
    <div style={{width: '23%', marginRight: '4%'}}>
      <FormLabel
        required = {required}
      >
        {label}
      </FormLabel>

      <HalfInput
        register = {register}
        name = {name}
        type = {type}
        placeholder = {placeholder}
        validates = {validates}
      />

      <ValidateMessage
        errors = {errors}
        name = {name}
      />
    </div>
  );
}

export default HalfInputField;


// -----------------------------------------------
//
export const NameField = ({
  register,
  errors,
}) => {
  return (
    <FlexWrapper>
      <HalfInputField
        register = {register}
        errors = {errors}
        label = '名字'
        name = 'firstName'
        placeholder = '(例) 村中'
        required = {true}
        validates = {{requiredValidate, zenkakuValidate}}
      />

      <HalfInputField
        register = {register}
        errors = {errors}
        label = '名前'
        name = 'lastName'
        placeholder = '(例) 鴻介'
        required = {true}
        validates = {{requiredValidate, zenkakuValidate}}
      />
    </FlexWrapper>
  );
}

// -----------------------------------------------
//
export const NameKanaField = ({
  register,
  errors,
}) => {
  return (
    <FlexWrapper>
      <HalfInputField
        register = {register}
        errors = {errors}
        label = '名字(かな)'
        name = 'firstKana'
        placeholder = '(例) むらなか'
        required = {true}
        validates = {{requiredValidate, zenkakuValidate}}
      />

      <HalfInputField
        register = {register}
        errors = {errors}
        label = '名前(かな)'
        name = 'lastKana'
        placeholder = '(例) こうすけ'
        required = {true}
        validates = {{requiredValidate, zenkakuValidate}}
      />
    </FlexWrapper>
  );
}
