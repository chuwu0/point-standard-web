import instance from "./fetch"

import { Message } from 'element-ui';
import router from '@/router/index.js'

function successResponse(response, success, failed) {
    let res = response.data;
    let result = res.result || res.Result;
    if (result == "success") {
        success(res)
    } else if (result == "failure") {
        let msg = res.ResultMsg || res.message || res.Message || res.resultMsg
        Message.error({ message: msg })
    } else {
        router.replace('/login')
    }
}

function errorResponse(response, err) {
    let json = JSON.stringify(err),
        lastData = JSON.parse(json)
    console.log(err)
    if (lastData.hasOwnProperty('config')) {
        Message.error({ message: '接口：' + lastData.config.url + '请求错误' })
    } else {
        Message.error({ message: '请求错误:' + err });
    }
}


/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}, success) {
    instance.post(url, data).then(response => {
        //对接口错误码做处理
        successResponse(response, success)
    }, err => {
        errorResponse({}, err)
    })
}


/**
 * get 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, data = {}, success) {
    instance.get(url, {
            params: data
        })
        .then(response => {
            successResponse(response, success)
        })
        .catch(err => {
            errorResponse({}, err)
        })
}

/**
 * 封装所有请求
 * @param methed
 * @param url
 * @param data 
 * @param headers
 * @returns {Promise}
 */
export function request(methed, url, data = {}, headers, success) {
    instance({
            method: methed || 'post',
            url: url,
            data: methed === 'get' ? { params: data } : data,
            headers: headers || { 'Content-Type': 'application/json' },
        })
        .then(response => {
            //对接口错误码做处理
            successResponse(response, success)
        })
        .catch(err => {
            errorResponse(response, err)
        })
}