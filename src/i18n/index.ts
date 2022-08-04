import { createI18n } from 'vue-i18n'
import enUs from './modules/en-US';
import zhCn from './modules/zh-CN';

const i18n = createI18n({
    locale: "en-US",
    messages: {
        'en-US': {
            ...enUs
        },
        'zh-CN': {
            ...zhCn
        }
    }
})

export default i18n