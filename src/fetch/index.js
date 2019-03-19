import {get, post, request } from './request'

let dataForm = '/data-platform-3'

export function getTest(success) {
    return get(`${dataForm}/dict/query/equipment_family`, {}, success)
}