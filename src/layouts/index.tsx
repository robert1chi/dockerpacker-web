import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { systemLogout } from "@/utils/api/system";
import i18n from "@/i18n";
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NSpace, NButton, NBreadcrumb, NBreadcrumbItem, NDropdown, NIcon } from "naive-ui";
import { BrandGithub } from "@vicons/tabler";

// import './index.css'

const name = `dockerpacker-base-layout`;

export default defineComponent({
    name,
    setup() {
        const router = useRouter();
        const route = useRoute();
        const contentHeight = ref('height: 80vh');
        onMounted(() => {

        })
        // const list = ref([
        //     { label: 'layouts.homePage', path: '/', method(path: string) { router.push(path) } },
        //     { label: 'layouts.projects', path: '/project', method(path: string) { router.push(path) } },
        //     { label: 'layouts.logout', path: '/login', method(path: string) { systemLogout(); router.push(path) } },
        // ]);
        const list = [{ label: 'layouts.homePage', path: '/', method() { router.push(this.path) } },
        { label: 'layouts.projects', path: '/project', method() { router.push(this.path) } },
        { label: 'layouts.logout', path: '/login', method() { systemLogout(); router.push(this.path) } },]

        const getCurrentRoute = () => {
            const { matched } = route;
            const getRoutes = router.getRoutes()
            console.log(getRoutes)
            const currRoute = matched.filter(item => item)
            return currRoute
        }

        const handleGithub = () => {
            window.open('https://github.com/robert1chi/dockerpacker-web', '_blank')
        }

        const navibar = () => {
            return (
                <div className="header-container flex justify-between items-center">
                    <div className="header-title flex items-center ml-5">
                        <span>Docker Packer</span>
                    </div>
                    <div className="header-menu space-x-3 flex mr-5">
                        {
                            list.map(item => {
                                return (
                                    <div className="header-menu-item">
                                        <NButton quaternary size="small" onClick={() => item.method()}>{i18n.global.t(item.label)}</NButton>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }

        const breadcrumb = () => {
            return (
                <div className="breadcrumb-container">
                    <NBreadcrumb>
                        {
                            getCurrentRoute().map((item, index) => {
                                return (
                                    <NBreadcrumbItem key={index}>
                                        <NDropdown>
                                            <div class="trigger">
                                                {i18n.global.t(String(item.meta.title))}
                                            </div>
                                        </NDropdown>
                                    </NBreadcrumbItem>
                                )
                            })
                        }
                    </NBreadcrumb>
                </div>
            )
        }
        return {
            navibar,
            contentHeight,
            breadcrumb,
            handleGithub,
        }
    },
    render() {
        const Navibar = this.navibar
        const Breadcrumb = this.breadcrumb
        return (
            <div>
                <NLayout className="n-layout n-layout--static-positioned h-screen">
                    <div className="p-4 h-16 bg-[rgba(128,128,128,0.2)] content-center flex items-center">
                        <NLayoutHeader style={"background: rgba(0,0,0,0);"}>
                            <Navibar />
                        </NLayoutHeader>
                    </div>
                    <NLayoutContent>
                        <div className="min-h-[calc(100vh-8rem)] p-5">
                            <NSpace vertical={true} size="large">
                                <div className="page-header">
                                    <div className="page-header-breadcrumb">
                                        <Breadcrumb />
                                    </div>
                                </div>
                                <router-view />
                            </NSpace>
                        </div>
                    </NLayoutContent>
                    <div className="p-4 min-h-[4rem] bg-[rgba(128,128,128,0.2)]">
                        <NLayoutFooter style={"background: rgba(0,0,0,0);"}>
                            <NSpace justify="end">
                                <NButton>
                                    {i18n.global.t('layouts.footer.copyright')}
                                </NButton>
                                <NButton>
                                    {i18n.global.t('layouts.footer.version')}
                                </NButton>
                                <NButton>
                                    {i18n.global.t('layouts.footer.copyright')}
                                </NButton>
                                <NButton onClick={this.handleGithub}>
                                    <NIcon>
                                        <BrandGithub />
                                    </NIcon>
                                </NButton>
                            </NSpace>
                        </NLayoutFooter>
                    </div>
                </NLayout>
            </div>
        );
    }
})

