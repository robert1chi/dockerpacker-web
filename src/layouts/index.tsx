import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NLayout, NLayoutHeader, NLayoutFooter, NSpace, NButton, NBreadcrumb, NBreadcrumbItem, NDropdown, NIcon, NText, NDivider, NAvatar } from "naive-ui";
import { BrandGithub } from "@vicons/tabler";
import navibar from "./components/navibar";
import { useI18n } from "vue-i18n";

// import './index.css'

const name = `dockerpacker-base-layout`;

export default defineComponent({
    name,
    setup() {
        const router = useRouter();
        const route = useRoute();
        const contentHeight = ref('height: 80vh');
        const { t } = useI18n()

        const getCurrentRoute = () => {
            const { matched } = route;
            const getRoutes = router.getRoutes()
            const currRoute = matched.filter(item => item)
            return currRoute
        }

        const handleGithub = () => {
            window.open('https://github.com/robert1chi/dockerpacker-web', '_blank')
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
                                                {t(String(item.meta.title))}
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
            contentHeight,
            breadcrumb,
            handleGithub,
        }
    },
    render() {
        const Navibar = navibar
        const Breadcrumb = this.breadcrumb
        return (
            <div style="min-height: 100vh; position: relative">
                <NLayout position="absolute">
                    {/* <div className="p-4 h-16 bg-[rgba(128,128,128,0.2)] content-center flex items-center"> */}
                    <NLayoutHeader style="height: 64px;" bordered>
                        <Navibar />
                    </NLayoutHeader>
                    <NLayout embedded position="absolute" style="top: 64px; bottom: 64px" contentStyle="padding: 24px;">
                        <NLayout embedded>
                            <NSpace vertical size="large">
                                <div className="page-header">
                                    <div className="page-header-breadcrumb">
                                        <Breadcrumb />
                                    </div>
                                </div>
                                <router-view />
                            </NSpace>
                        </NLayout>
                    </NLayout>
                    <NLayoutFooter
                        bordered
                        position="absolute"
                        style={"height: 64px;"}
                    >
                        <div className="h-full">
                            <div className="gap-4 flex items-center m-auto h-full justify-end mr-4">
                                <NText>
                                    DockerPacker 0.0.0-alpha.1
                                </NText>
                                <NText>
                                    Made by PicoAoi
                                </NText>
                                <NButton onClick={this.handleGithub} >
                                    <NIcon>
                                        <BrandGithub />
                                    </NIcon>
                                </NButton>
                            </div>
                        </div>
                    </NLayoutFooter>
                </NLayout>
            </div>
        );
    }
})

