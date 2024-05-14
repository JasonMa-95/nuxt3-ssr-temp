import cn from "./locales/cn.json";
import en from "./locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en,
    cn,
  },
}));
