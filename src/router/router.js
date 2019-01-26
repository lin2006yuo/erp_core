export default  [
    {
        path: "/home",
        name: "home",
        component: () => import('@/views/Home.vue'),
        children:[
            /*任务管理器*/
            {
                path:"task-control/queue-management",
                component:()=>import('@/views/task-control/queue-management/index.vue')
            },
            /*队列管理*/
            {
                path:"task-control/task-management",
                component:()=>import('@/views/task-control/task-management/index.vue')
            },
            /*swoole*/
            {
                path:"task-control/swoole",
                component:()=>import('@/views/task-control/swoole/index.vue')
            },
            {
                name:'workers',
                path:'workers',
                component:() => import('@/views/worker/index.vue')
            },
            {
                name:'worker/detail',
                path:'worker/detail',
                component:()=> import('@/views/worker/detail/index.vue')
            }
        ]
    },
    /*登录*/
    {
        path:"/login",
        name:"login",
        component: () => import('@/views/login/index.vue')
    },

];
