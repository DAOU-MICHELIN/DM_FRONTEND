import axios from 'axios';

function naverApiInstance() {
    const instance = axios.create({
        baseURL: process.env.NAVER_BASIC_URL,
        headers: {
            'Content-Type': 'applciation/json;charset=utf-8',
        },
    });

    return instance;
}

export { naverApiInstance };
