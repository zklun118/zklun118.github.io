<!--
 * @Description: content
 * @Author: HTMoon 社区人员
 * @Date: 2021-06-10 14:20:36
 * @LastEditTime: 2021-06-10 15:03:48
-->
<template>
    <div>
        <Introduce></Introduce>
        <Purchase></Purchase>
        <Sartner></Sartner>
        <Statistics></Statistics>
    </div>
</template> 

<script>
import Introduce from "../../views/introduce.vue";
import Purchase from "../../views/purchase.vue";
import Sartner from "../../views/partner.vue";
import Statistics from "../../views/statistics.vue";
    export default {
        components:{
            Introduce,
            Purchase,
            Sartner,
            Statistics,
        }
    }
</script>

<style lang="scss" scoped>

</style>