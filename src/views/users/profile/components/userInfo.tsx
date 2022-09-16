import { NSpace, NH1, NForm, NFormItem, NInput } from "naive-ui";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
    setup() {
        const { t } = useI18n()
        return {
            t
        }
    },
    render() {
        return (
            <NSpace vertical>
                <NH1>{this.t('users.profile.info')}</NH1>
                <NForm>
                    <NFormItem label={this.t('users.profile.username')}>
                        <NInput></NInput>
                    </NFormItem>
                    <NFormItem label={this.t('users.profile.email')}>
                        <NInput></NInput>
                    </NFormItem>
                </NForm>
            </NSpace>
        )
    }
})