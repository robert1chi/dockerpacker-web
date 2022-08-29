import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { systemLogout } from "@/utils/api/system";
import i18n from "@/i18n";
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NSpace, NButton, NBreadcrumb, NBreadcrumbItem, NDropdown } from "naive-ui";

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
        const list = ref([
            { label: 'layouts.homePage', path: '/', method(path: string) { router.push(path) } },
            { label: 'layouts.projects', path: '/project', method(path: string) { router.push(path) } },
            { label: 'layouts.logout', path: '/login', method(path: string) { systemLogout(); router.push(path) } },
        ]);

        const getCurrentRoute = () => {
            const { matched } = route;
            // const currRoute = [matched.forEach(item => { 
            //     return item
            //     // {label:item.children.meta.title,key:item.} 
            // })]
            const getRoutes = router.getRoutes()
            const currRoute = matched.filter(item => item)
            console.log(getRoutes)
            return currRoute
        }

        const navibar = () => {
            return (
                <div className="header-container flex justify-between items-center">
                    <div className="header-title flex items-center ml-5">
                        <span>Docker Packer</span>
                    </div>
                    <div className="header-menu space-x-3 flex mr-5">
                        {
                            list.value.map(item => {
                                return (
                                    <div className="header-menu-item">
                                        <NButton quaternary size="small" onClick={() => item.method(item.path)}>{i18n.global.t(item.label)}</NButton>
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
                    <div className="min-h-[calc(100vh-8rem)] p-4">
                        <NLayoutContent>
                            <NSpace vertical size="large">
                                <div className="page-header">
                                    <div className="page-header-breadcrumb">
                                        <Breadcrumb />
                                    </div>
                                </div>
                                <router-view />
                            </NSpace>
                        </NLayoutContent>
                    </div>
                    <div className="p-4 min-h-[4rem] bg-[rgba(128,128,128,0.2)]">
                        <NLayoutFooter style={"background: rgba(0,0,0,0);"}>成府路</NLayoutFooter>
                    </div>
                </NLayout>
            </div>
        );
    }
})

