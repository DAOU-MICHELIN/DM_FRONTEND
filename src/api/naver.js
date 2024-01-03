import { naverApiInstance } from './index';

const api = naverApiInstance();
const clientId = process.env.NAVER_CLIENT_ID;

function getNaverMapView(param, success, fail) {
    api.get(`maps.js?ncpClientId=${clientId}`).then(success).catch(fail);
}

export { getNaverMapView };
