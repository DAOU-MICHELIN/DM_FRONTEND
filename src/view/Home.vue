<template>
    <div id="map"></div>
</template>

<script>
export default {
    name: 'HomeView',
    mounted() {
        window.kakao && window.kakao.maps ? this.loadMap() : this.loadScript();
    },
    methods: {
        loadScript() {
            const script = document.createElement('script');
            const appKey = process.env.VUE_APP_KAKAO_CLIENT_KEY;

            script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${appKey}`;
            script.onload = () => window.kakao.maps.load(this.loadMap);
            document.head.appendChild(script);
        },
        loadMap() {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };

            this.map = new window.kakao.maps.Map(container, options);
        },
    },
};
</script>

<style scoped>
#map {
    width: 60%;
    height: 100%;
}
</style>
