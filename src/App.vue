<template>
  <div class="showcase">
    <tree-view :nodes=nodes :dark="true"></tree-view>
    <list-box :items="listItems" :dark="true"></list-box>
    <data-grid :header="dataHeader" :items="dataItems" :dark="true"></data-grid>
    <date-time-picker :dark="true"></date-time-picker>
  </div>
</template>

<script>
import DataGrid from './components/DataGrid.vue'
import DateTimePicker from './components/DateTimePicker.vue'
import ListBox from './components/ListBox.vue'
import TreeView from './components/TreeView.vue'
import {NodeItem,ListItem, DataGridHeader, DataGridHeaderItem, Person} from './types'

export default {
	data:function(){
    return{
      nodes:[
        new NodeItem("AAA",[
          new NodeItem("BAA",[
            new NodeItem("CAA","box")
          ])
        ]),
        new NodeItem("AAB",[
          new NodeItem("BAB",[
            new NodeItem("CAB","aperture"),
            new NodeItem("CBB","crop"),
          ]),
          new NodeItem("BBB","command"),
          new NodeItem("BCB","elevator"),
        ]),
        new NodeItem("AAC",[
          new NodeItem("BAC",[
            new NodeItem("CAC","ban"),
            new NodeItem("CBC","beaker"),
            new NodeItem("CCC","badge"),
            new NodeItem("CDC","audio"),
          ])
        ])
      ],
      listItems:[
        new ListItem("iframe",window.location.pathname,{width:"100%"}),
        new ListItem("div","↑↑ iframe"),
        new ListItem("div",'→ this is ordinary div'),
        new ListItem("div",'↓↓ image'),
        new ListItem("img",'https://www.transparentpng.com/thumb/brush-stroke/long-wide-black-brush-stroke-banner-png-transparent--mRgNac.png'),
      ],
      dataHeader:new DataGridHeader([
        new DataGridHeaderItem("Name","name","text"),
        new DataGridHeaderItem("Last name","lastName","text"),
        new DataGridHeaderItem("Age","age","number"),
        new DataGridHeaderItem("Log","log","","code"),
      ]),
      dataItems:[
        new Person("Lukas","Safranek",17),
        new Person("Martin","Vejman",17),
        new Person("Martin","Svoboda",5),
        new Person("Martin","Svoboda",5),
        new Person("Martin","Svoboda",5),
        new Person("Martin","Svoboda",5),
        new Person("Martin","Svoboda",5),
        new Person("Martin","Svoboda",5),
        new Person("Martin","Svoboda",5),
      ]
    }
  },
  name: 'App',
  components: {
    TreeView,
    ListBox,
    DataGrid,
    DateTimePicker
  }
}
</script>

<style>
body{
  overflow: hidden;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
.showcase{
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr) ;
}
.showcase *{
  grid-column: span 1;
}
</style>
