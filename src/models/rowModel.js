import { observable, computed, action } from "mobx";

import CellModel from "./CellModel";

export default class RowModel {
    @observable cells = [];
    @observable border = false;
    @observable nextborder = false;

    constructor(row) {
        this.row = row;
    }

    @computed
    get nextCount() {
        return this.cells.length + 1;
    }

    @action
    addCell(){
        this.cells.push(new CellModel(this.row,this.nextCount));
    }
}