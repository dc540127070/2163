import { observable, computed, action } from "mobx";

import RowModel from "./RowModel";

export default class TableModel {
    @observable rows = [];

    @computed
    get nextCount() {
        return this.rows.length + 1;
    }

    @action
    addRow(num=1){
        for(let i=0;i<num;i++){
            this.rows.push(new RowModel(this.nextCount));
        }
    }

    @action
    addCol(num=1){
        for(let row of this.rows){
            for(let i=0;i<num;i++){
                row.addCell();
            }
        }
    }
}