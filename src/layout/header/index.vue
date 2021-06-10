<!--
 * @Description: header
 * @Author: HTMoon 社区人员
 * @Date: 2021-06-10 11:14:00
 * @LastEditTime: 2021-06-10 15:28:24
-->
<template>
    <v-app-bar app color="hsla(0,0%,100%,.03)" hide-on-scroll>
        <v-avatar size="32">logo</v-avatar>
        <Tabs></Tabs>
        <Language></Language>
    </v-app-bar>
</template>

<script>
import Tabs from "./tabs.vue";
import Language from "./language.vue";
export default {
    components: {
        Tabs,
        Language,
    }, 
};
</script>

<style lang="scss" scoped>
</style>