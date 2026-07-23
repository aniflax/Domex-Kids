import strapiLogo from "./strapi-logo.png";

export default {
  config: {
    locales: [],
    head: {
      favicon: strapiLogo,
    },
    auth: {
      logo: strapiLogo,
    },
    menu: {
      logo: strapiLogo,
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Domex kids!",
        "Auth.form.welcome.subtitle": "Log in to your account",
      },
    },
  },
};
