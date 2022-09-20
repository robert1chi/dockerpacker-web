import { createI18n } from 'vue-i18n'
import enUs from './modules/en-US';
import jaJp from './modules/ja-jp';
import zhCn from './modules/zh-CN';

const i18n = createI18n({
    legacy: false,
    locale: "en-US",
    fallbackLocale: 'en',
    messages: {
        'en-US': {
            ...enUs
        },
        'zh-CN': {
            ...zhCn
        },
        'ja-JP': {
            ...jaJp
        }
    }
})

export default i18n