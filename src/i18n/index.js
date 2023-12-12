import { createI18n } from 'vue-i18n'
import { app } from '@/config'
import id from '@/i18n/locale/id.json'
import en from '@/i18n/locale/en.json'

const langDefault = app.default.locale

const loadedLanguages = [langDefault]

const i18n = createI18n({
  locale: langDefault,
  fallbackLocale: 'id',
  messages: {
    id,
    en
  }
})

const setI18nLanguage = lang => {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export const loadLanguageAsync = lang => {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(`@/i18n/locale/${lang}.json`)
        .then(msgs => {
          i18n.setLocaleMessage(lang, msgs.default)
          loadedLanguages.push(lang)
          return setI18nLanguage(lang)
        })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}

export default i18n
