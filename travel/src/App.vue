<template>
    <div id="app">
        <!-- 对内容进行缓存，重新载入时，不会触发mounted生命周期 -->
        <keep-alive>
            <!-- router-view 显示的是当前路由地址所对应的内容-->
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
</style>
