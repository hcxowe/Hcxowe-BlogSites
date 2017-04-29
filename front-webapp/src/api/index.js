import * as data from './mock-data'

// 模拟的接口相应时间
const delayed = 1000;

export function getUserInfo(callback) {
    setTimeout(() => {
        callback(data.userInfo);
    }, delayed);
}