import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'
// import configPoint from 'views/config_point'
// import notFind from "views/404"
// import editOrigin from "views/config_point/edit_origin"
// import layout from "views/layout/layout"

const configPoint = () =>
    import ("views/config_point")
const notFind = () =>
    import ("views/404")
const editOrigin = () =>
    import ("views/config_point/edit_origin")
const layout = () =>
    import ("views/layout/layout")
const steps = () =>
    import ("views/config_point/steps")
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '*',
            name: 'notFind',
            component: notFind
        },
        {
            path: "/configPoint",
            name: "",
            meta: {
                title: "点位配置"
            },
            component: layout,
            children: [{
                    path: "/",
                    name: "configPoint",
                    meta: {
                        title: "点位配置"
                    },
                    component: configPoint,
                },
                {
                    path: "editOrigin",
                    name: "editOrigin",
                    component: editOrigin,
                    meta: {
                        breadShow: true,
                        title: "数据源",
                        type: "edit",
                        breadArr: [{
                            path: "/configPoint",
                            name: "点位配置"
                        }, {
                            path: "/configPoint/editOrigin",
                            name: "数据源"
                        }]
                    }
                },
                {
                    path: "steps",
                    name: "steps",
                    component: steps,
                    meta: {
                        breadShow: true,
                        title: "点位表维护",
                        type: "edit",
                        breadArr: [{
                            path: "/configPoint",
                            name: "数据源管理"
                        }, {
                            path: "/configPoint/steps",
                            name: "点位表维护"
                        }]
                    }
                }
            ]
        },
    ]
})