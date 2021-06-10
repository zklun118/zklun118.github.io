<!--
 * @Description: 滚动到顶部
 * @Author: HTMoon 社区人员
 * @Date: 2021-06-10 14:53:44
 * @LastEditTime: 2021-06-10 16:29:23
-->
<template>
    <transition name="fade">
        <v-btn
            v-show="backTopShow"
            class="goTop"
            color="primary"
            fab
            
            dark
            @click="$vuetify.goTo(0, 'duration')"
        >
            <v-icon x-large>mdi-chevron-up</v-icon>
        </v-btn>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            backTopShow: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (
                document.documentElement.scrollTop + document.body.scrollTop >
                100
            ) {
                this.backTopShow = true;
            } else {
                this.backTopShow = false;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.goTop {
    position: fixed;
    z-index: 5;
    right: 2vh;
    bottom: 3vh;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>