import { NButton, NCard, NForm, NFormItem, NH1, NInput, NLayout, NLayoutContent, NLayoutSider, NSpace } from "naive-ui";
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import UserInfo from "./components/userInfo";

export default defineComponent({
    setup() {
        const userDetail = 1
        const { t } = useI18n()
        return {
            t
        }
    },
    render() {
        return (
            <div>
                <NCard title={this.t('users.profile.title')}>
                    <NLayout hasSider>
                        <NLayoutSider bordered collapseMode="width" width={240} contentStyle="padding: 24px;">
                            <NSpace vertical>
                                {[0, 1, 2, 3].map((item) => (
                                    <NButton key={item}>
                                        {this.t('users.profile.info')}
                                    </NButton>))}
                            </NSpace>
                        </NLayoutSider>
                        <NLayoutContent contentStyle="padding: 24px;">
                            <UserInfo />
                        </NLayoutContent>
                    </NLayout>
                </NCard>
            </div>
        )
    },

})