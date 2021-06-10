<!--
 * @Description: tab
 * @Author: HTMoon 社区人员
 * @Date: 2021-06-10 11:58:47
 * @LastEditTime: 2021-06-10 16:27:08
-->
<template>
    <v-tabs centered class="ml-n12" color="white" slider-size="0">
        <v-tab
            v-for="link in links"
            :key="link.id"
            @change="handleTabChange(link.id)"
        >
            {{ $t(`tab.${link.title}`) }}
        </v-tab>
    </v-tabs>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                title: "introduce",
                id: "introduce",
            },
            {
                title: "purchase",
                id: "purchase",
            },
            {
                title: "partner",
                id: "partner",
            },
            {
                title: "statistics",
                id: "statistics",
            },
        ],
    }),
    methods: {
        handleTabChange(id) {
            document.getElementById(id).scrollIntoView(true);
        },
    },
};
</script>

<style lang="scss" scoped>
.v-tab {
    color: white !important;
}
</style>