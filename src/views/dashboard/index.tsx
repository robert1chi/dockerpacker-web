import { NGi, NGrid, NCard, NSpace } from 'naive-ui';
import { ref, computed, defineComponent, onMounted } from 'vue';
import { debounce } from 'lodash';
import { dashboardStatus } from '@/utils/api/home'
import type { IDashboard } from '@/utils/api/home';

export default defineComponent({
    setup() {
        const cols = ref<number>(document.documentElement.clientWidth);
        const colsNum = computed<number>(() => {
            return cols.value > 768 ? 3 : 2
        })
        const resizeFunc = debounce(() => { cols.value = document.documentElement.clientWidth; }, 100);
        const dashboard = ref<IDashboard['dashboard']>({
            status: 0,
            containerList: [{
                id: 0,
                name: 'loading',
                status: 0
            }],
        })
        const handleDashboard = async () => {
            const { data } = await dashboardStatus()
            dashboard.value = data.dashboard
        }
        onMounted(() => {
            window.addEventListener('resize', () => {
                resizeFunc()
            })
            handleDashboard()
        })
        return {
            colsNum,
            dashboard,
        }
    },
    render() {
        return (
            <div>
                <div className="page-header">

                </div>
                <NGrid cols={this.colsNum} xGap={12} yGap={12}>
                    <NGi>
                        <NSpace vertical={true}>
                            <NCard title={this.dashboard.containerList[0].name}>
                                <span>
                                    {this.dashboard.containerList[0].status}
                                </span>
                            </NCard>
                            <NCard title={this.dashboard.containerList[0].name}>
                                <span>
                                    {this.dashboard.containerList[0].status}
                                </span>
                            </NCard>
                            <NCard title={this.dashboard.containerList[0].name}>
                                <span>
                                    {this.dashboard.containerList[0].status}
                                </span>
                            </NCard>
                            <NCard title={this.dashboard.containerList[0].name}>
                                <span>
                                    {this.dashboard.containerList[0].status}
                                </span>
                            </NCard>
                            <NCard title={this.dashboard.containerList[0].name}>
                                <span>
                                    {this.dashboard.containerList[0].status}
                                </span>
                            </NCard>
                            <NCard title={this.dashboard.containerList[0].name}>
                                <span>
                                    {this.dashboard.containerList[0].status}
                                </span>
                            </NCard>
                            <NCard title={this.dashboard.containerList[0].name}>
                                <span>
                                    {this.dashboard.containerList[0].status}
                                </span>
                            </NCard>

                        </NSpace>
                    </NGi>
                    <NGi>
                        <NCard title="卡片">
                            卡片内容
                        </NCard>
                    </NGi>
                    <NGi>
                        <NCard title="卡片">
                            卡片内容
                        </NCard>
                    </NGi>
                    <NGi>
                        <NCard title="卡片">
                            卡片内容
                        </NCard>
                    </NGi>
                </NGrid>
            </div>
        )
    }
})