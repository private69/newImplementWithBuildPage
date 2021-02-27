// 侧边栏的卡片
export default [
    {
        index: "1",
        name: "我的作品",
        icon: "el-icon-user-solid"
    },
    {
        index: "2",
        name: "数据中心",
        icon: "el-icon-s-order",
        child:[
            {
                index: "2-1",
                name: "数据列表",
                icon: ""
            }
        ]
    },
    {
        index: "3",
        name: "模板中心",
        icon: "el-icon-s-release",
        child: [
            {
                index: "3-1",
                name: "模板列表",
                icon: ""
            }
        ]
    },
    {
        index: "4",
        name: "账号中心",
        icon: "el-icon-s-home"
    },
]