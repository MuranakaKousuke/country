import React from 'react';
import { useForm }from 'react-hook-form';

import { FormTitle } from '../components/atoms/Heading';
import { NameField, NameKanaField } from '../components/molecules/HalfInputField';
import { UserNameField, MailField, PhoneField } from '../components/molecules/InputField';
import { GenderField } from '../components/molecules/SelectField';
import { SelfIntroductionField } from '../components/molecules/TextareaField';

const Signup = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {console.log(data)};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>新規登録</FormTitle>

      <NameField
        register = {register}
        errors = {errors}
      />

      <NameKanaField
        register = {register}
        errors = {errors}
      />

      <GenderField
        register = {register}
        errors = {errors}
      />

      <UserNameField
        register = {register}
        errors = {errors}
      />

      <MailField
        register = {register}
        errors = {errors}
      />

      <PhoneField
        register = {register}
        errors = {errors}
      />

      <SelfIntroductionField
        register = {register}
        errors = {errors}
      />

      <input style={{display: 'block'}} type='submit' />
    </form>
  );
}

export default Signup;