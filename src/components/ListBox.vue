/* eslint-disable vue/no-parsing-error */
<template>
  <div :class="'listBox '+(dark?'dark':'')">
    <div :class="'listBoxItem '+(selected.has(item.id)?'selected':'')" v-for="item of items" v-bind:key="item.id">
        <component :id="item.id" :is="item.type" :src="item.text" v-on:click="toggleSelect" :style="item.style">
            {{item.text}}
        </component>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        items:Array,
        dark:Boolean
    },
    data:function(){
        return{
            selected:new Set()
        }
    },
    methods:{
        toggleSelect:function(event){
            let flag;
            const id = event.target.id;
            if (this.selected.has(id)) {
                flag = this.selected.size == 1;
                this.selected.delete(id)
            }
            if (!event.ctrlKey) this.selected = new Set();
            if (!flag) this.selected.add(id);
        }
    }
}
</script>

<style>
    .listBox{
        text-align: left;
        user-select: none;
        width: 100%;
        height: 100%;
        overflow: scroll;
        overflow-y: auto;
        overflow-x: auto;
    }
    .listBoxItem{
        cursor: pointer;
        padding: 10px;
    }
    .selected{
        background-color: rgb(9, 71, 113);
        color: white;
    }
    .dark{
        background-color: rgb(33, 33, 33);
        color: white
    }
</style>