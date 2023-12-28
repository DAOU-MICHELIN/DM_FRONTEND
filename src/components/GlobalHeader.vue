<template>
    <router-link to="/" class="logo">
        <img id="dm_logo" src="../assets/images/logo.png" />
        <text id="dm_title">타이틀</text>
    </router-link>
    <div class="search">
        <input id="box" type="text" />
    </div>
    <div class="account">
        <router-link to="/login">로그인 </router-link>
        <router-link to="/account">회원가입</router-link>
    </div>
</template>

<script>
export default {
    name: 'GlobalHeader',
};
</script>
<style src="../assets/css/GlobalHeader.css"></style>
