
<template>
    <v-app id="inspire">
        <Header></Header>
        <div class="banner">
            <v-container class="content">
                <Content></Content>
            </v-container>
        </div>
        <ScrollTop></ScrollTop>
    </v-app>
</template>

<script>
import Header from "./header/index.vue";
import Content from "./content/index.vue";
import ScrollTop from "./scrollTop/index.vue";
export default {
    components: {
        Header,
        Content,
        ScrollTop,
    },
};
</script>

<style scoped>
.banner {
    width: 100%;
    height: 100vh;
    background: url("../assets/images/banner.jpg");
    background-size: 100% 100%;
}
.content {
    margin-top: 64px;
}
</style>