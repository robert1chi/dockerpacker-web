import { defineComponent, onMounted, ref, Component, computed } from "vue";
import type { MenuOption } from 'naive-ui'
import { userStore } from "@/store";
import { RouterLink, useRouter, useRoute } from "vue-router";
import { NAvatar, NButton, NDropdown, NMenu, useMessage, NIcon } from "naive-ui";
import { useI18n } from "vue-i18n";
import { Home, Template, UserCircle, Logout } from '@vicons/tabler'

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();
        const { t } = useI18n()
        const useUser = userStore();
        const message = useMessage()
        const getCurrentRoute = (): string => {
            const { matched } = route;
            const currRoute = matched.filter(item => item)
            return currRoute[1].meta.title as string
        }
        const activeKey = computed<string>(() => {
            return getCurrentRoute()
        })
        const renderIcon = (icon: Component) => (() => (
            <NIcon component={icon}>
            </NIcon>
        ))
        const menuOptions: MenuOption[] = [
            {
                label: () => (<RouterLink to='/'>{t('layouts.homePage')}</RouterLink>),
                key: 'dashboard.index',
                icon: renderIcon(Home)
            },
            {
                label: () => (<RouterLink to='/manage'>{t('layouts.projects')}</RouterLink>),
                key: 'manage.homepage',
                icon: renderIcon(Template)
            },
        ]
        const avatar = ref<string>('')
        const handleAvatar = async () => {
            try {
                await useUser.getUserDetail()
                avatar.value = useUser.username.slice(0, 1).toUpperCase()
            } catch (err) {
                if (err instanceof Error) {
                    message.error(err.message)
                }
            }
        }
        handleAvatar()

        const options = [
            {
                label: t('users.profile.title'),
                key: 'users.profile',
                props: {
                    onClick: () => {
                        router.push('/users/profile')
                    }
                },
                icon: renderIcon(UserCircle)
            },
            {
                label: t('layouts.logout'),
                key: 'layouts.logout',
                props: {
                    onClick: async () => {
                        try {
                            await useUser.logout()
                            router.push('/login')
                        } catch (err) {
                            if (err instanceof Error) {
                                message.error(err.message)
                            }
                        }
                    }
                },
                icon: renderIcon(Logout)
            },
        ]
        return {
            avatar,
            options,
            t,
            menuOptions,
            activeKey
        }
    },
    render() {
        return (
            <div className="header-container flex justify-between items-center m-auto h-full">
                <div className="header-title flex items-center ml-5">
                    <span>Docker Packer</span>
                </div>
                <div className="header-menu space-x-3 flex mr-5 items-center">
                    <NMenu options={this.menuOptions} mode="horizontal" value={this.activeKey} />
                    <NDropdown options={this.options}>
                        <NButton quaternary circle>
                            <NAvatar round>
                                {this.avatar}
                            </NAvatar>
                        </NButton>
                    </NDropdown>
                </div>
            </div>
        )
    }
})