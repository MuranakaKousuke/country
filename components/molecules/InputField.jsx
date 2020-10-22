import React from 'react';

import FormLabel from '../atoms/FormLabel';
import Input from '../atoms/Input';
import ValidateMessage from '../atoms/ValidateMessage';

import { requiredValidate, phoneValidate, mailValidate } from '../../validates';

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
const InputField = ({
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
    <div>
      <FormLabel
        required = {required}
      >
        {label}
      </FormLabel>

      <Input
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

export default InputField;


// -----------------------------------------------
//
export const UserNameField = ({
  register,
  errors,
}) => {
  return (
    <InputField
      register = {register}
      errors = {errors}
      label = 'ユーザーネーム'
      name = 'userName'
      placeholder = '(例) Muranaka'
      required = {true}
      validates = {{requiredValidate}}
    />
  );
}

// -----------------------------------------------
//
export const MailField = ({
  register,
  errors,
}) => {
  return (
    <InputField
      register = {register}
      errors = {errors}
      label = 'メールアドレス'
      name = 'email'
      placeholder = '(例) muranaka@gmail.com'
      required = {true}
      validates = {{requiredValidate, mailValidate}}
    />
  );
}

// -----------------------------------------------
//
export const PhoneField = ({
  register,
  errors,
}) => {
  return (
    <InputField
      register = {register}
      errors = {errors}
      label = '電話番号'
      name = 'phone'
      placeholder = '(例) 0332131111'
      required = {true}
      validates = {{requiredValidate, phoneValidate}}
    />
  );
}