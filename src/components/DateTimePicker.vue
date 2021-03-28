<template>
    <div>
        <div :class="'date-picker '+(dark?'dark':'')">
            {{selectedDate.toString()}}
            <button style="float: right;" @click="toggle">...</button>
            <div class="dialog" v-if="!colapsed">
                <button @click="prev">&#60;</button>
                <div>{{year}}/{{padNumber(month+1,2)}}</div>
                <button @click="next">&#62;</button>
                <table class="date">
                    <thead>
                        <tr>
                            <th>Mo</th>
                            <th>Tu</th>
                            <th>We</th>
                            <th>Th</th>
                            <th>Fr</th>
                            <th>Sa</th>
                            <th>Su</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="week in generateDates()" :key="week">
                            <td 
                            v-for="date in week" 
                            :key="date.id" 
                            :class="' '+(date.active?'active':'inactive') + ' ' + (selectedDate.date.compare(date)?'selected':'')"
                            @click="select(date)"
                            >{{date.day}}</td>
                        </tr>
                    </tbody>
                </table>
                <input class="time" type="time" v-model="selectedDate.time.time">
            </div>
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure enim voluptates sapiente voluptatem fuga aliquam numquam quidem et, voluptatibus itaque incidunt non adipisci nulla labore fugit repudiandae cum illum doloremque!
    </div>
</template>

<script>
import * as moment from "moment"
import { pad, range } from '../utils'
import { CalendarDate, CalendarTime, DateTime } from '../types'
export default {
    props:{
        dark:Boolean
    },
    data(){
        return {
            year:2021,
            month:2,
            rows:range(0,5),
            columns:range(0,6),
            colapsed:true,

            selectedDate:new DateTime(new CalendarDate(-1,-1,-1),new CalendarTime(0,0))
        }
    },
    methods:{
        generateDates(){
            let m = this.localMoment();
            let out = [];
            let week = [];
            
            for (let i = 0; i < this.rows.length; i++) {
                for (let j = 0; j < this.columns.length; j++) {
                    m.add(1,'days');
                    week.push(new CalendarDate(
                        m.year(),
                        m.month(),
                        m.date(),
                        (m.month() == this.month)
                        ));
                }
                out.push(week);
                week = [];
            }

            return out;
        },
        localMoment(){
            let m = moment(this.year + "-" + pad(this.month+1,2), "YYYY-MM");
            if (m.isoWeekday != 0) {
                m.isoWeekday(0);
            }
            return m;
        },
        toggle(){
            this.colapsed = !this.colapsed;
        },
        prev(){
            this.month = (this.month - 1 + 12) % 12;
            if (this.month == 0) {
                this.year--;
            }
        },
        next(){
            this.month = (this.month + 1) % 12;
            if(this.month == 0) {
                this.year++;
            }
        },
        padNumber(num,size){
            return pad(num,size)
        },
        select(date){
            if(!date.active) return;
            this.selectedDate.date = date;
            console.log(this.selectedDate);
        }
    }
}
</script>

<style>
.dark{
    background-color: rgb(33, 33, 33);
    color: white
}
.date-picker{
    background-color: white;
    position: relative;
    display: inline-block;
    text-align: center;
    width: 256px;
}
.date-picker .dialog{
    display: grid;
    width: 100%;
    position: absolute;
    background-color: inherit;
    text-align: center;
    grid-template-columns: 20% 60% 20%;
}
.dialog *{
    grid-column: span 1;
}
.dialog .time{
    text-align: center;
    grid-column: span 3;
}
.dialog .date{
    grid-column: span 3;
}
.date-picker .active{
    cursor: pointer;
}
.date-picker .active:hover{
    background-color: rgb(9, 71, 113);
    color: white;
    transition: 0.1s;
}
.date-picker .inactive{
    color: gray;
    cursor: not-allowed;
}
.date-picker .selected{
    background-color: rgb(9, 71, 113);
    color: white;
}
</style>