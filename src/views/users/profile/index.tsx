import { NCard, NIcon, NLayout, NLayoutContent, NLayoutSider, NMenu, NSpace } from "naive-ui";
import { defineComponent, Component, VNodeChild, ref } from "vue";
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
                label: t('users.profile.info'),
                key: 'users.profile.info',
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
        const currentLocal = ref<string>('users.profile.info')
        return {
            t,
            menuOptions,
            currentLocal
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
                            width={180}

                        >
                            <NMenu options={this.menuOptions} value={this.currentLocal} />
                        </NLayoutSider>
                        <NLayoutContent contentStyle="padding: 24px;">
                            {() => { if (this.currentLocal === 'users.profile.info') return <UserInfo /> }}
                        </NLayoutContent>
                    </NLayout>
                </NCard>
            </div>
        )
    },

})