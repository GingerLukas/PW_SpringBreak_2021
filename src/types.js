import * as utils from './utils'
export class NodeItem{
    constructor(text, nodesOrIcon = []) {
        this.id = utils.uuidv4();
        this.text = text;
        this.display = true;
        if (Array.isArray(nodesOrIcon) || !nodesOrIcon) {
            this.nodes = nodesOrIcon || [];
            this.icon = "/open-iconic/svg/media-record.svg"
        }
        else {
            this.nodes = [];
            this.icon = utils.getIcon(nodesOrIcon)
        }
    }
    toggle() {
        this.display = !this.display;
    }
}
export class ListItem{
    constructor(type, text,style) {
        this.id = utils.uuidv4();
        this.type = type;
        this.text = text;
        this.style = style;
    }
}

export class DataGridHeaderItem{
    constructor(name, key,type, icon) {
        this.name = name;
        this.key = key;
        this.type = type;
        this.icon = utils.getIcon(icon);
    }
}

export class DataGridHeader{
    constructor(items) {
        this.items = items;
    }
}

export class Person{
    constructor(name,lastName,age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.key = utils.uuidv4();
    }
    log() {
        console.log(this);
    }
}

export class CalendarDate{
    constructor(year,month,day,active) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.active = active;
        this.id = utils.uuidv4();
    }
    get date() {
        if (this.year == -1 || this.month == -1 || this.day == -1) {
            return "none";
        }
        return this.year + "-" + utils.pad(this.month, 2) + "-" + utils.pad(this.day, 2);
    }
    set date(text) {
        let a = text.split("-");
        this.year = parseInt(a[0]);
        this.month = parseInt(a[1]);
        this.day = parseInt(a[2]);
    }
    compare(other) {
        if (this.year != other.year) return false;
        if (this.month != other.month) return false;
        if (this.day != other.day) return false;
        return true;
    }
}

export class CalendarTime{
    constructor(hour,minute) {
        this.hour = hour;
        this.minute = minute;
        this.id = utils.uuidv4();
    }
    get time() {
        return utils.pad(this.hour, 2) + ":" + utils.pad(this.minute, 2);
    }
    set time(text) {
        let a = text.split(":");
        this.hour = parseInt(a[0]);
        this.minute = parseInt(a[1]);
    }
}

export class DateTime{
    constructor(date,time) {
        this.date = date;
        this.time = time;
        this.id = utils.uuidv4();
    }
    toString() {
        return this.date.date + " " + this.time.time;
    }
}