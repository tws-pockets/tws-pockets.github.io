import { createI18n } from 'vue-i18n'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
export function loadLocaleMessages() {
  const locales = require.context('./locales', false, /[A-Za-z0-9-_,\s]+\.js$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      const isFunction = typeof locales(key).default == 'function';
      if (isFunction) {
        messages[locale] = locales(key).default()
        return;
      } 
      
      messages[locale] = locales(key).default
    }
  })
  return messages
}
export default createI18n({

  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE || 'de',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'de',
  messages: loadLocaleMessages()
})
