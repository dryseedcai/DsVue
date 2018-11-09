<template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-input">输入城市/景点/游玩主题</div>
        <div class="header-right">城市</div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    /* 1rem = html font-size = 50px */
    .header {
        display: flex;
        line-height: .88rem; /* 2倍图下43px */
        background: #00bcd4;
        color: #fff;
    }

    .header-left {
        width: .64rem;
        float: left;
    }

    .header-input {
        flex: 1;
        line-height: .64rem;
        margin-top: .12rem;
        margin-left: .2rem;
        background: #fff;
        border-radius: 0.1rem;
        color: #ccc;
    }

    .header-right {
        width: 1.24rem;
        float: right;
        text-align: center;
    }


</style>










