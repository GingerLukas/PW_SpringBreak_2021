<template>
	<table :id="id" :class="'data-grid '+(dark?'dark':'')">
		<thead>
			<tr>
				<th v-for="head in header.items" v-bind:key="head.key">{{head.name}}</th>
				<th v-for="head in defaultHeader" v-bind:key="head.key">{{head.name}}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in items" v-bind:key="item.key">
				<td v-for="head in header.items" v-bind:key="head.key" >
					<span	v-if="head.icon === undefined && !item.edit">{{item[head.key]}}</span>
					<img	v-else :src="head.icon" class="action-icon" v-on:click="() => item[head.key](this)">
					<input :id="item.key+':'+head.key"	v-if="head.icon === undefined && item.edit"	:type="head.type" :value="item[head.key]">
				</td>
				<td v-for="head in defaultHeader" v-bind:key="head.key">
					<img :id="item.key+':'+head.key" :src="head.icon" class="action-icon" v-on:click="() => this[head.key](item)">
				</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td v-for="(head,index) in header.items" v-bind:key="head.key" >
					<input v-if="head.icon === undefined" type="text" :id="id+':'+head.key">
					<button v-if="index == header.items.length - 1" v-on:click="addNew()">Add</button>
				</td>
			</tr>
		</tfoot>
	</table>
</template>

<script>
import { DataGridHeader, DataGridHeaderItem } from '../types'
import { uuidv4 } from '../utils'
export default {
    props:{
        header:DataGridHeader,
        items:Array,
		dark:Boolean
    },
	data(){
		return {
			id:uuidv4(),
			defaultHeader:[
				new DataGridHeaderItem("Edit","edit","","cog"),
				new DataGridHeaderItem("Delete","delete","","circle-x"),
			]
		}
	},
	methods:{
		addNew(){
			let obj = {};

			this.updateItemWithInputs(this.id,obj);
			// eslint-disable-next-line vue/no-mutating-props
			this.items.push(obj);
		},
		edit(item){
			if (item.edit) {
				this.updateItemWithInputs(item.key,item);
			}
			item.edit = !item.edit;
		},
		delete(item){
			const index = this.items.indexOf(item);
			if (index > -1) {
				// eslint-disable-next-line vue/no-mutating-props
				this.items.splice(index, 1);
			}
		},
		updateItemWithInputs(id,item){
			for (const head of this.header.items) {
				if (head.icon !== undefined) {
					continue;
				}
				let input = document.getElementById(id+":"+head.key);
				if (input) {
					item[head.key] = input.value;
					input.value = "";
				}
			}
			return item;
		}
	}
}
</script>

<style>
	.data-grid img{
		width: 50%;
		height: 50%;
		cursor: pointer;
	}
	.dark{
        background-color: rgb(33, 33, 33);
        color: white
    }
	.dark img.action-icon{
        filter:invert(100%);
    }
</style>