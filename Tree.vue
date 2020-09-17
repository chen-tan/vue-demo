<template>
    <ul class="tree">
        <li 
         v-for="(node,index) in data"
         :key="node[defaultProps.label]"
         class="tree-node"
        >
            <i 
             v-if="node[defaultProps.children]"
             class="iconfont"
             :class="{
                 'icondown':showBranch[index],
                 'iconright':!showBranch[index],
             }" 
             @click="changeShowBranch(index)"
            ></i>
            <span @click="changeShowBranch(index)">{{ node[defaultProps.label]}}</span>
            <keep-alive>
                <base-tree 
                 v-if="showBranch[index]"
                 :data="node[defaultProps.children]"
                />
            </keep-alive>
            
        </li>
    </ul>
</template>

<script>
export default {
    name:'base-tree',
    props:{
        data:{
            type:Array,
            require:true,
        },
        defaultProps:{
            type:Object,
            default:()=>({
                label:'label',
                children:'children'
            })    
        }
    },
    data(){
        return {
            showBranch:[],
        }
    },
    methods:{
        changeShowBranch(index){
            const flag=!this.showBranch[index];
            this.$set(this.showBranch,index,flag);
        },
    },
    
}
</script>

<style scope>
@import './assets/font.css';
@import './assets/index.css';
</style>