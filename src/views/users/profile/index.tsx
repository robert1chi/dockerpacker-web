import { NButton, NCard, NIcon, NLayout, NLayoutContent, NLayoutSider, NMenu, NSpace } from "naive-ui";
import { defineComponent, ref, h, Component, VNodeChild } from "vue";
import type { MenuOption } from 'naive-ui'
import { useI18n } from "vue-i18n";
import UserInfo from "./components/userInfo";
import { Book2 } from '@vicons/tabler'

export default defineComponent({
    setup() {
        const { t } = useI18n()
        const renderIcon = (icon: Component): () => VNodeChild => {
            return () => (
                <NIcon component={icon}>
                </NIcon>
            )
        }
        const menuOptions: MenuOption[] = [
            {
                label: '个人设置',
                key: 'user-profile',
                icon: renderIcon(Book2)
            },
            {
                label: '且听风吟',
                key: 'hear-the-wind-sing1',
                icon: renderIcon(Book2)
            },
            {
                label: '且听风吟',
                key: 'hear-the-wind-sing2',
                icon: renderIcon(Book2)
            },
        ]
        return {
            t,
            menuOptions
        }
    },
    render() {
        return (
            <div>
                <NCard title={this.t('users.profile.title')}>
                    <NLayout hasSider>
                        <NLayoutSider
                            bordered
                            collapseMode="width"
                            width={240}
                            contentStyle="padding: 24px;"
                        >
                            <NMenu options={this.menuOptions} />
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