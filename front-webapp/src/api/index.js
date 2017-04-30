import * as data from './mock-data'

// 模拟的接口相应时间
const delayed = 1000;

export function getUserInfo(username, callback) {
    setTimeout(() => {

        if (typeof data.userInfo[username] === 'undefined') {
            callback(data.userInfo['hcxowe'])
            return
        }

        callback(data.userInfo[username]);
    }, delayed);
}