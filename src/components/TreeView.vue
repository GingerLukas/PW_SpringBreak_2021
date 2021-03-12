<template>
  <div :class="'treeView '+(dark?'dark':'')">
      <tree-view-node v-for="node of nodes" v-bind:key="node.id" :node=node :selected="selected"></tree-view-node>
  </div>
</template>

<script>
import TreeViewNode from './TreeViewNode.vue'
export default {
  components: { TreeViewNode },
    name:"TreeView",
    props:{
        nodes:Array,
        dark:Boolean
    },
    data:function(){
        return {
            selected: new Set()
        }
    }
}
</script>

<style>
    .treeView{
        text-align: left;
        user-select: none;
        width: 100%;
        height: 100%;
        overflow: scroll;
        overflow-y: auto;
        overflow-x: auto;
    }
    .nodes{
        padding-left: 20px;
    }
    .node{
        cursor: pointer;
    }
    .node-icon{
        padding-left: 5px;
    }
    .selected{
        background-color: rgb(9, 71, 113);
        color: white;
    }
    .dark{
        background-color: rgb(33, 33, 33);
        color: white
    }
    .dark img.node-icon{
        filter:invert(100%);
    }
</style>