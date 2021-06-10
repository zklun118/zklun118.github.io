/*
 * @Description: 全球化
 * @Author: HTMoon 社区人员
 * @Date: 2021-06-10 10:54:54
 * @LastEditTime: 2021-06-10 15:14:44
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import zh from './zh'
Vue.use(VueI18n)
const messages = {
  "en-us": {
    ...en
  },
  "zh-cn": {
    ...zh
  }
}

const getLocale = () => {
  const cookieLanguage = sessionStorage.getItem('language')
  if (cookieLanguage) {
    return cookieLanguage
  }
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh-cn'
}
console.log(getLocale());
 const i18n = new VueI18n({
  locale: getLocale(),
  messages
})



export default i18n;