<!--
 * @Description: 设置语言功能
 * @Author: HTMoon 社区人员
 * @Date: 2021-06-10 12:02:52
 * @LastEditTime: 2021-06-10 16:21:56
-->
<template>
    <div class="language">
        <v-menu offset-y open-on-hover rounded="lg">
            <template v-slot:activator="{ on, attrs }">
                <i
                    v-bind="attrs"
                    v-on="on"
                    large
                    class="iconfont icon-zhongyingwenyingwen"
                ></i>
            </template>
            <v-list dense>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-content @click="handleChangeLang(item.lang)">
                            <v-list-item-title
                                v-text="item.text"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            { text: "中文", lang:"zh-cn" ,icon: "mdi-clock" },
            { text: "英文", lang:"en-us" ,icon: "mdi-account" },
        ],
    }),
    methods:{
        handleChangeLang(lang){
           this.$i18n.locale = lang;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/icon/iconfont.css";
.v-list-item__title{
    color: black;
}
.language:focus::before{
    opacity: 0.12;
}
</style>