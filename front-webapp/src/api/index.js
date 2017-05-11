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

export function getJottings(username, callback) {
    setTimeout(function() {
        callback({
            ret: 0,
            msg: 'success',
            body: {
                jottings: data.jottings
            }
        });
    }, delayed);
}

export function addJotting(jotting, callback) {
    setTimeout(function() {
        callback({
            ret: 0,
            msg: 'success',
            body: {
                id: new Date().getTime()
            }
        });
    }, delayed);
}

export function deleteJotting(id, callback) {
    setTimeout(function() {
        callback({
            ret: 0,
            msg: 'success'
        });
    }, delayed);
}