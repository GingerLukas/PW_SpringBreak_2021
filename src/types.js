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
            if (nodesOrIcon[0]=="/") {
                this.icon = nodesOrIcon;
            }
            else {
                this.icon = "/open-iconic/svg/"+nodesOrIcon+".svg"
            }
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