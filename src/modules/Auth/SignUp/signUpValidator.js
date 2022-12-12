import * as yup from 'yup';

const signUpValidator = (t) => yup.object({
  firstName: yup
    .string(t('enterField')(t('firstName')))
    .required(t('requiredField')(t('firstName'))),
  lastName: yup
    .string(t('enterField')(t('lastName')))
    .required(t('requiredField')(t('lastName'))),
  email: yup
    .string(t('enterField')(t('email')))
    .email(t('enterValidField')(t('email')))
    .required(t('requiredField')(t('email'))),
  password: yup
    .string(t('enterField')(t('password')))
    .min(8, t('passwordValidity'))
    .required(t('requiredField')(t('password'))),
});

export default signUpValidator;