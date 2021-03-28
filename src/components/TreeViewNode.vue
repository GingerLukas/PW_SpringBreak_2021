<template>
<div :id="node.id">
    <div :class="'node '+((selected.has(node.id))?'selected':'')" v-on:click="onClick">
        <img v-if="node.nodes.length > 0 && node.display" class="node-icon" src="/open-iconic/svg/chevron-bottom.svg">
        <img v-else-if="node.nodes.length > 0 && !node.display" class="node-icon" src="/open-iconic/svg/chevron-right.svg">
        <img v-else class="node-icon" :src="node.icon">
        {{node.text}}
        </div>
    <div class="nodes" v-if="node.display">
        <tree-view-node v-for="item of node.nodes" v-bind:key="item.id" :node=item :selected="selected"></tree-view-node>
    </div>
</div>
</template>

<script>
import * as types from '../types'
export default {
    name:"TreeViewNode",
    props:{
        node: types.NodeItem,
        selected: Set
    },
    methods:{
        onClick(){
            this.node.toggle();
            if (this.node.nodes.length == 0) {
                let flag = (this.selected.has(this.node.id));
                this.selected.clear()
                if (!flag) this.selected.add(this.node.id);
            }
        }
    }
}
</script>

<style>
    
</style>