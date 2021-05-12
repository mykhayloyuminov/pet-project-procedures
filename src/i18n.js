import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        "Error from backend. Tamara will fix it soon":
          "Error from backend. Tamara will fix it soon",
        "E-mail is not valid!": "E-mail is not valid!",
        "E-mail is required!": "E-mail is required!",
        "Password has to be longer than 8 characters!":
          "Password has to be longer than 8 characters!",
        "Password is required!": "Password is required!",
        "User with specified email does not exists.":
          "User with specified email does not exists.",
        "Your password": "Your password",
        "Sign In": "Sign In",
        "Don't have an account?": "Don't have an account?",
        "Sign Up": "Sign Up",
        "Name is required!": "Name is required!",
        "City is required!": "City is required!",
        "Country is required!": "Country is required!",
        "Phone is incorrect!": "Phone is incorrect!",
        "Phone is required!": "Phone is required!",
        "Address is required!": "Address is required!",
        "Password doesn't match": "Password doesn't match",
        "Password confirm is required": "Password confirm is required",
        "Your Name": "Your Name",
        "New Password": "New Password",
        "Your country": "Your country",
        "Your city": "Your city",
        "Your address": "Your address",
        "Your phone": "Your phone",
        "Already have an account?": "Already have an account?",
        Language: "Language",
        Ukraine: "Ukrainian",
        Russian: "Russian",
        English: "English",
        Name: "Name",
        Time: "Time",
        "Load more": "Load more",
        "Subscribe Me in Instagram": "Subscribe Me in Instagram",
        "Create New Procedure": "Create New Procedure",
        "Create procedure": "Create procedure",
        "Procedures list": "Procedures list",
        "Sign out": "Sign out",
        "Last Name": "Last Name",
        Email: "Email",
        Country: "Country",
        City: "City",
        Phone: "Phone",
        "Passport ID": "Passport ID",
        Birthday: "Birthday",
        Address: "Address",
        Password: "Password",
      },
    },
    ru: {
      translations: {
        "Error from backend. Tamara will fix it soon":
          "Ошибка с бекенда. Тамара скоро пофиксит это",
        "E-mail is not valid!": "Почта некорректна!",
        "E-mail is required!": "Почта необходима!",
        "Password has to be longer than 8 characters!":
          "Пароль должен быть длиннее 8 символов!",
        "Password is required!": "Пароль необходим!",
        "User with specified email does not exists.":
          "Пользователя с указанной почтой не существует",
        "Your password": "Ваш пароль",
        "Sign In": "Войти",
        "Don't have an account?": "Нету аккаунта?",
        "Sign Up": "Зарегистрироваться",
        "Name is required!": "Имя необходимо!",
        "City is required!": "Город необходим!",
        "Country is required!": "Страна необходима!",
        "Phone is incorrect!": "Телефон некорректный!",
        "Phone is required!": "Телефон необходим!",
        "Address is required!": "Адрес необходим!",
        "Password doesn't match": "Пароль не совпадает",
        "Password confirm is required": "Подтверждение пароля необходимо",
        "Your Name": "Ваше имя",
        "New Password": "Новый пароль",
        "Your country": "Ваша страна",
        "Your city": "Ваш город",
        "Your address": "Ваш адрес",
        "Your phone": "Ваш телефон",
        "Already have an account?": "Уже есть аккаунт?",
        Language: "Язык",
        Ukraine: "Украинский",
        Russian: "Русский",
        English: "Английский",
        Name: "Имя",
        Time: "Время",
        "Load more": "Загрузить еще",
        "Subscribe Me in Instagram": "Подписуйтесь на меня в Instagram",
        "Create New Procedure": "Создать новую процедуру",
        "Create procedure": "Создать процедуру",
        "Procedures list": "Лист процедур",
        "Sign out": "Выйти",
        "Last Name": "Фамилия",
        Email: "Почта",
        Country: "Страна",
        City: "Город",
        Phone: "Телефон",
        "Passport ID": "Пасспорт ID",
        Birthday: "День рождения",
        Address: "Адрес",
        Password: "Пароль",
      },
    },
    ua: {
      translations: {
        "Error from backend. Tamara will fix it soon":
          "Помилка з бекенда. Тамара це скоро виправить",
        "E-mail is not valid!": "Електронна пошта недійсна!",
        "E-mail is required!": "Пошта необхiдна",
        "Password has to be longer than 8 characters!":
          "Пароль повинен містити більше 8 символів!",
        "Password is required!": "Пароль необхiден!",
        "User with specified email does not exists.":
          "Користувач із вказаною електронною адресою не існує.",
        "Your password": "Ваш пароль",
        "Sign In": "Увійти",
        "Don't have an account?": "Не маєте аккаунту?",
        "Sign Up": "Зареєструватися",
        "Name is required!": "Потрібно вказати ім’я!",
        "City is required!": "Місто обов’язкове!",
        "Country is required!": "Країна обов’язкова!",
        "Phone is incorrect!": "Телефон неправильний!",
        "Phone is required!": "Телефон потрібен!",
        "Address is required!": "Адреса обов’язкова!",
        "Password doesn't match": "Пароль не збігається",
        "Password confirm is required": "Потрібно підтвердити пароль",
        "Your Name": "Ваше ім'я",
        "New Password": "Новий пароль",
        "Your country": "Твоя країна",
        "Your city": "Твоє місто",
        "Your address": "Вашу адресу",
        "Your phone": "Ваш телефон",
        "Already have an account?": "Вже є аккаунт?",
        Language: "Мова",
        Ukraine: "Український",
        Russian: "Російська",
        English: "Англійська",
        Name: "Ім'я",
        Time: "Час",
        "Load more": "Завантажити ще",
        "Subscribe Me in Instagram": "Підпишіться на мене в Instagram",
        "Create New Procedure": "Створити нову процедуру",
        "Procedures list": "Лист процедур",
        "Create procedure": "Создати процедуру",
        "Sign out": "Вийти з аккаунта",
        "Last Name": "Прізвище",
        Email: "Пошта",
        Country: "Країна",
        City: "Місто",
        Phone: "Телефон",
        "Passport ID": "Паспорт ID",
        Birthday: "День народження",
        Address: "Адреса",
        Password: "Пароль",
      },
    },
  },
  lng: window.localStorage.getItem("i18nextLng") || "en",
  fallbackLng: window.localStorage.getItem("i18nextLng") || "en",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
