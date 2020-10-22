import React from 'react';

import FormLabel from '../atoms/FormLabel';
import Textarea from '../atoms/Textarea';
import ValidateMessage from '../atoms/ValidateMessage';

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
const TextareaField = ({
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

      <Textarea
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

export default TextareaField;


// -----------------------------------------------
//
export const SelfIntroductionField = ({
  register,
  errors,
}) => {
  return (
    <TextareaField
      register = {register}
      errors = {errors}
      label = '自己紹介'
      name = 'selfIntroduction'
      placeholder = '(例) 実務経験６ヶ月です'
    />
  );
}
