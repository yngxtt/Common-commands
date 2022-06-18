import Vue from 'vue'
// import { Button, Select, Link,Input , MessageBox,Layout} from 'element-ui';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI);
// Vue.use(Button);
// Vue.use(Select);
// Vue.use(Link);
// Vue.use(Input);
// Vue.use(Layout);



// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;
// Vue.prototype.$layout = Layout;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
