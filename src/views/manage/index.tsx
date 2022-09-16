import { ref, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { NCard, NLayout, NLayoutContent, NLayoutSider } from 'naive-ui'

export default defineComponent({
    setup() {
        const route = useRoute()
        const containerId = ref<number>(Number(route.query['id']))
    },
    render() {
        return (
            <div className="management-sidebar h-[100%]">
                <NCard size='huge'>
                    <NLayout has-sider={true} embedded content-style="height:100%;">
                        <NLayoutSider
                            collapse-mode="width"
                            collapsed-width={120}
                            width={240}
                            show-trigger="arrow-circle"
                            content-style="padding: 24px;height: 100%;"
                            bordered
                            embedded
                        >
                            <div className="h-[100%]">海淀桥 海淀桥 海淀桥 海淀桥 海淀桥</div>
                        </NLayoutSider>
                        <NLayoutContent contentStyle={"padding: 24px;"} embedded>
                            <div className="management-container">
                                <p>111</p>
                            </div>
                        </NLayoutContent>
                    </NLayout>
                </NCard>
            </div>
        )
    }
})