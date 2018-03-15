import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Row from "./Row";
import style from "../index.css";

@observer
export default class Table extends React.Component {

    @action
    toggleColBordor = (num) => {
        this.props.store.rows.map( row => {
            row.cells.map( cell => {
                if(cell.cell == num){
                    cell.border = !cell.border;
                }else{
                    cell.border = false;
                }
                if(cell.cell == num + 1){
                    cell.nextborder = !cell.nextborder;
                }else{
                    cell.nextborder = false;
                }
            } )
        });
    }

    @action
    toggleRowBordor = (num) => {
        this.props.store.rows.map( row => {
            if(row.row == num){
                row.border = true;
            }else{
                row.border = false;
            }
            if(row.row == num + 1){
                row.nextborder = true;
            }else{
                row.nextborder = false;
            }
        });
    }

    @action
    clearBorder = () => {
        this.props.store.rows.map( row => {
            row.border = false;
            row.nextborder = false;
        });
    }

    render(){
        return <div className={style.table} onMouseOut={this.clearBorder.bind(this)}>
            {this.props.store.rows.map((row) => {
                return <Row row={row} toggleColBordor={this.toggleColBordor.bind(this)} toggleRowBordor={this.toggleRowBordor.bind(this)} key={row.row}/>
            })}
        </div>
    }

}