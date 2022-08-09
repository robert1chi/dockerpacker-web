import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from "naive-ui";

const name = `dockerpacker-base-layout`;

export default defineComponent({
    name,
    setup() {
        const router = useRouter();
        const route = useRoute();

    },
    render() {
        return (
            <div>
                <NLayout className="h-max">
                    <NLayoutHeader className="h-4">颐和园路</NLayoutHeader>
                    <NLayoutContent>
                        <router-view />
                    </NLayoutContent>
                    <NLayoutFooter>成府路</NLayoutFooter>
                </NLayout>
            </div>
        );
    }
})