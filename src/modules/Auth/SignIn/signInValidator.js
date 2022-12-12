import * as yup from 'yup';

const signInValidator = (t) => yup.object({
  email: yup
    .string(t('enterField')(t('email')))
    .email(t('enterValidField')(t('email')))
    .required(t('requiredField')(t('email'))),
  password: yup
    .string(t('enterField')(t('password')))
    .min(8, t('passwordValidity'))
    .required(t('requiredField')(t('password'))),
});

export default signInValidator;