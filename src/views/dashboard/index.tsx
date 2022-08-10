import { NGi, NGrid } from 'naive-ui';
import { ref, computed, defineComponent, onMounted } from 'vue';
import { debounce } from 'lodash';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const cols = ref<number>(document.documentElement.clientWidth);
        const colsNum = computed<number>(() => {
            return cols.value > 768 ? 3 : 2
        })
        const resizeFunc = debounce(() => { cols.value = document.documentElement.clientWidth; }, 100);
        onMounted(() => {
            window.addEventListener('resize', () => {
                resizeFunc()
            })
        })
        return {
            colsNum,
        }
    },
    render() {
        return (
            <div>
                <div className="page-header">

                </div>
                <NGrid cols={this.colsNum}>
                    <NGi>
                        <div>
                            <span>1</span>
                        </div>
                    </NGi>
                    <NGi>
                        <div>
                            <span>2</span>
                        </div>
                    </NGi>
                    <NGi>
                        <div>
                            <span>3</span>
                        </div>
                    </NGi>
                    <NGi>
                        <div>
                            <span>4</span>
                        </div>
                    </NGi>
                    <NGi>
                        <div>
                            <span>5</span>
                        </div>
                    </NGi>
                </NGrid>
            </div>
        )
    }
})