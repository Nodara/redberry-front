
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          firstName: 'first name',
          lastName: 'last name',
          password: 'password',
          email: 'Email Address',
          lang: 'Language',
          home: 'Home',
          signOut: 'Sign Out',
          signIn: 'Sign In',
          signUp: 'Sign Up',
          emailLabel: 'Email Address',
          doNotHaveAnAccount: `Don't have an account? Sign Up`,
          alreadyHaveAnAccount: 'Already have an account? Sign in',

          // Validator
          enterField: (field) => `Enter your ${field}`,
          requiredField: (field) => `${field} is required`,
          enterValidField: (field) => `Enter valid ${field}`,
          passwordValidity: 'Password should be of minimum 8 characters length',

          // tableCellLabels
          title: 'Title',
          confirmed: 'Confirmed',
          recovered: 'Recovered',
          death: 'Death',

          find: 'Find',
          clearFilter: 'Clear Filter',
          filter: 'Filter',
          filters: 'Filters',
          // Error Messages

          USER_NOT_FOUND: 'User not found',
          BAD_CREDENTIALS: 'Email or Password is incorrect',
          ALREADY_EXIST: 'User already exist',
          UNAUTHORIZED: 'Please sign in',
          registered: 'Registered successfully'
        }
      },
      ka: {
        translation: {
          firstName: 'სახელი',
          lastName: 'გვარი',
          password: 'პაროლი',
          email: 'ელ.ფოსტა',
          lang: 'ენა',
          home: 'მთავარი',
          signOut: 'გამოსვლა',
          signIn: 'შესვლა',
          signUp: 'დარეგისტრირება',
          emailLabel: 'ელ.ფოსტის მისამართი',
          doNotHaveAnAccount: `არ ხარ დაგერისტრირებული? დარეგისტრირდი ახლავე`,
          alreadyHaveAnAccount: 'უკვე დარეგისტრირებული ხართ? ანგარისში შესვლა',

          // Validator
          enterField: (field) => `შეიყვანეთ ${field}`,
          requiredField: (field) => `${field}  არის სავალდებულო`,
          enterValidField: (field) => `შეიყვანეთ ვალიდური ${field}`,
          passwordValidity: 'პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან',

          // tableCellLabels
          title: 'დასახელება',
          confirmed: 'დადასტურებული',
          recovered: 'გამოჯანმრთელებული',
          death: 'გარდაცვლილი',

          find: 'ძებნა',
          clearFilter: 'ფილტრის გასუფთავება',
          filter: 'ფილტრი',
          filters: 'ფილტრები',


          USER_NOT_FOUND: 'მომხმარებელი ვერ მოიძებნა',
          BAD_CREDENTIALS: 'მეილი ან პაროლი არასწორია',
          ALREADY_EXIST: 'მომხმარებელი ამ მეილით უკვე არსებობს',
          UNAUTHORIZED: 'გთხოვთ გაიარეთ ავტორიზაცია',
          registered: 'რეგისტრაცია წარმატებით გაიარეთ'
        }
      }
    }
  });


export default i18n;
