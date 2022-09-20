import { NSpace, NH1, NForm, NFormItem, NInput, NGrid, NGi, NAvatar, NH2 } from "naive-ui";
import { defineComponent, computed, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { userStore } from "@/store";

export default defineComponent({
    setup() {
        const { t } = useI18n()
        const useUser = userStore();
        const userInfo = ref({
            id: 0,
            username: ''
        })
        onMounted(() => {
            userInfo.value = {
                id: useUser.id,
                username: useUser.username
            }
        })
        console.log(userInfo.value)
        const username = computed<string>(() => useUser.username.slice(0, 1).toUpperCase())
        return {
            userInfo,
            username,
            t
        }
    },
    render() {
        return (
            <NSpace vertical>
                <NH1>{this.t('users.profile.info')}</NH1>
                <NGrid cols={4} itemResponsive responsive="screen">
                    <NGi>
                        <div className="flex justify-center items-center flex-col h-full p-1">
                            <NAvatar
                                round
                                size={114}
                            >
                                <span className="text-3xl">{this.username}</span>
                            </NAvatar>
                            <NH2>{this.t('users.profile.avatar')}</NH2>
                        </div>
                    </NGi>
                    <NGi span="3">
                        <NForm>
                            <NFormItem label={this.t('users.profile.username')}>
                                <NInput placeholder={this.t('users.profile.usernamePlaceholder')} value={this.userInfo.username}></NInput>
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