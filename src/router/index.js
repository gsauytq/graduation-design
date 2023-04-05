import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../view/IndexPage/IndexPage.vue'
import ShopList from '../view/ShopManagement/ShopList.vue'
import ShopInfoSetting from '../view/ShopManagement/ShopInfoSetting.vue'
import TrafficAnalysis from '../view/ShopManagement/TrafficAnalysis.vue'
import AssociatorList from '../view/AssociatorManagement/AssociatorList.vue'
import AssociatorInfoSetting from '../view/AssociatorManagement/AssociatorInfoSetting.vue'
import StorageList from '../view/Storage/StorageList.vue'
 
const routes = [
    {
        path: '/IndexPage', component: IndexPage
    }, {
        path: '/ShopList', component: ShopList
    }, {
        path: '/ShopInfoSetting', component: ShopInfoSetting
    }, {
        path: '/TrafficAnalysis', component: TrafficAnalysis
    }, {
        path: '/AssociatorList', component: AssociatorList
    }, {
        path: '/AssociatorInfoSetting', component: AssociatorInfoSetting
    }, {
        path: '/StorageList', component: StorageList
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes
})