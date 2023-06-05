import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../view/IndexPage/IndexPage.vue'
import ShopList from '../view/ShopManagement/ShopList.vue'
import ShopInfoSetting from '../view/ShopManagement/ShopInfoSetting.vue'
import TrafficAnalysis from '../view/ShopManagement/TrafficAnalysis.vue'
import AssociatorList from '../view/AssociatorManagement/AssociatorList.vue'
import AssociatorInfoSetting from '../view/AssociatorManagement/AssociatorInfoSetting.vue'
import StorageList from '../view/StorageManagement/StorageList.vue'
import StorageInfoSetting from '../view/StorageManagement/StorageInfoSetting.vue'
import StorageTraffic from '../view/StorageManagement/StorageTraffic.vue'
import EmployeeList from '../view/EmployeeManagement/EmployeeList.vue'
import EmployeeInfoSetting from '../view/EmployeeManagement/EmployeeInfoSetting.vue'
import GoodsList from '../view/GoodsManagement/GoodsList.vue'
import GoodsInfoSetting from '../view/GoodsManagement/GoodsInfoSetting.vue'
import AdministratorsList from '../view/AdministratorsManagement/AdministratorsList.vue'
import AdministratorsInfoSetting from '../view/AdministratorsManagement/AdministratorsInfoSetting.vue'
import LoginView from '../view/Login/Login.vue'
import LayoutContainer from '@/components/LayoutContainer.vue'

export const routes = [
    {
        path: '/', component: LoginView
    }, {
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
    }, {
        path: '/StorageInfoSetting', component: StorageInfoSetting
    }, {
        path: '/StorageTraffic', component: StorageTraffic
    }, {
        path: '/EmployeeList', component: EmployeeList
    }, {
        path: '/EmployeeInfoSetting', component: EmployeeInfoSetting
    }, {
        path: '/GoodsList', component: GoodsList
    }, {
        path: '/GoodsInfoSetting', component: GoodsInfoSetting
    }, {
        path: '/AdministratorsList', component: AdministratorsList
    }, {
        path: '/AdministratorsInfoSetting', component: AdministratorsInfoSetting
    }, {
        path: '/LayoutContainer', component: LayoutContainer
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})