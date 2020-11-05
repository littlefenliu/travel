<template>
    <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
        <detail-list :list="list"></detail-list>
    </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            list:[{
                title:'成人票',
                type:[{
                    title:"南京总统府成人票【免预约电子票】"
                },{
                   title:'递归组件使用-二级列表',
                   type:[{
                        title:"递归组件使用-三级列表"
                    }]
                }]
            },{
                title:'学生票',
                type:[{
                        title:"南京总统府学生票【出示学生证】"
                    },{
                        title:'16:00前随买随用'
                    }]
            },{
                title:'老人票',
                type:[{
                        title:"南京总统府老人票【出示老人证】"
                    },{
                        title:'16:00前随买随用'
                    }]
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
.content
    height 20rem
</style>
