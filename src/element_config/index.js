import Vue from "vue"
import {
    Loading,
    MessageBox,
    Message,
    Notification,
    Button,
    Select,
    Input
} from 'element-ui';
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;