import * as data from './mock-data'

// 模拟的接口相应时间
const delayed = 1000;

export function getUserInfo(username, callback) {
    setTimeout(() => {
        if (typeof data.userInfo[username] === 'undefined') {
            callback(data.userInfo['notFind'])
            return
        }

        callback(data.userInfo[username]);
    }, delayed);
}

export function getUserDetail(username, callback) {
    setTimeout(function() {
        callback(data.userDetail);
    }, delayed);
}

export function getTimeline(callback) {
    setTimeout(function() {
        callback(data.timelineData);
    }, delayed);
}

export function getJotting(callback) {
    setTimeout(function() {
        callback(data.jottings);
    }, delayed);
}