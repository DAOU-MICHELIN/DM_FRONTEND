<template>
    <header>
        <div class="header_box">
            <Header />
        </div>
    </header>
    <div class="middle">
        <div id="main_box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from './components/GlobalHeader.vue';
export default {
    name: 'App',
    components: {
        Header,
    },
};
</script>
<style src="./assets/css/main.css"></style>
