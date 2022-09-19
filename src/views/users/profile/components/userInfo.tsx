import { NSpace, NH1, NForm, NFormItem, NInput, NGrid, NGi, NAvatar } from "naive-ui";
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
                <NGrid cols={4} itemResponsive responsive="screen">
                    <NGi>
                        <NAvatar
                            round
                            size={48}
                        >
                            {"aaa"}
                        </NAvatar>
                    </NGi>
                    <NGi span="3">
                        <NForm>
                            <NFormItem label={this.t('users.profile.username')}>
                                <NInput placeholder={this.t('users.profile.usernamePlaceholder')}></NInput>
                            </NFormItem>
                            <NFormItem label={this.t('users.profile.email')}>
                                <NInput placeholder={this.t('users.profile.emailPlaceholder')}></NInput>
                            </NFormItem>
                        </NForm>
                    </NGi>
                </NGrid>
            </NSpace>
        )
    }
})