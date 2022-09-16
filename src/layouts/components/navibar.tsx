import { defineComponent, onMounted, ref } from "vue";
import { systemLogout, systemUserDetail } from "@/utils/api/system";
import { useRouter } from "vue-router";
import { NAvatar, NButton, NDropdown, useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";

export default defineComponent({
    setup() {
        const router = useRouter();
        const { t } = useI18n()

        const list = [
            { label: 'layouts.homePage', path: '/', method() { router.push(this.path) } },
            { label: 'layouts.projects', path: '/manage', method() { router.push(this.path) } },
        ]
        const avatar = ref<string>('')
        const handleAvatar = async () => {
            systemUserDetail()
                .then(({ data }) => {
                    avatar.value = data.userDetail.username.slice(0, 1)
                })
                .catch((err) => {
                    console.log(err.msg)
                    message.error(err.msg)
                })
        }
        handleAvatar()
        const message = useMessage()
        const options = [
            {
                label: t('layouts.logout'),
                key: t('layouts.logout'),
                props: {
                    onClick: async () => {
                        systemLogout().then((res) => {
                            if (res.code === 0) {
                                router.push('/login')
                            }
                        }).catch((err) => {
                            message.error(err.msg)
                        })
                    }
                }
            },
            {
                label: t('users.profile'),
                key: t('users.profile'),
                props: {
                    onClick: () => {
                        router.push('/users/profile')
                    }
                }
            }
        ]
        const handleSelect = (key: string | number) => {
            message.info(String(key))
        }
        return {
            list,
            avatar,
            options,
            handleSelect,
            t
        }
    },
    render() {
        return (
            <div className="header-container flex justify-between items-center">
                <div className="header-title flex items-center ml-5">
                    <span>Docker Packer</span>
                </div>
                <div className="header-menu space-x-3 flex mr-5">
                    {
                        this.list.map(item => {
                            return (
                                <div className="header-menu-item">
                                    <NButton quaternary size="small" onClick={() => item.method()}>{this.t(item.label)}</NButton>
                                </div>
                            )
                        })
                    }
                    <NDropdown options={this.options} onSelect={this.handleSelect}>
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