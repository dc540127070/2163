
import { observable, computed, action } from "mobx";

export default class CellModel {
    @observable row;
    @observable cell;
    @observable border = false;
    @observable nextborder = false;
    @observable show = false;

    constructor(row,cell) {
        this.row = row;
        this.cell = cell;
    }
}