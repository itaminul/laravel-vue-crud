import AllCategory from './components/AllCategory.vue';
import CreateCategory from './components/CreateCategory.vue';
import EditCategory from './components/EditCategory.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllCategory
    },
    {
        name: 'Category',
        path: '/categorylist',
        component: AllCategory
    },
    {
        name: 'create',
        path: '/create',
        component: CreateCategory
    },
    {
        name: 'editCategory',
        path: '/editCategory/:id',
        component: EditCategory
    },
    

];