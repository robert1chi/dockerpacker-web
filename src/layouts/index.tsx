import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NSpace, NButton } from "naive-ui";

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
            { label: '首页', path: '/' },
            { label: '项目', path: '/project' },
        ]);

        const navibar = () => {
            return (
                <div className="header-container flex justify-between items-center">
                    <div className="header-title flex items-center">
                        <span>Docker Packer</span>
                    </div>
                    <div className="header-menu space-x-6 flex">
                        {
                            list.value.map(item => {
                                return (
                                    <div className="header-menu-item">
                                        <NButton quaternary size="small" onClick={() => {
                                            router.push(item.path);
                                        }}>{item.label}</NButton>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }

        return {
            navibar,
            contentHeight,
        }
    },
    render() {
        const Navibar = this.navibar

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