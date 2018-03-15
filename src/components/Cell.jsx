import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import style from "../index.css";

@observer
export default class Cell extends React.Component {
    constructor(props){
        super(props)
    }

    @action
    toggleBorder(){
        this.props.toggleColBordor(this.props.cell.cell);
    }

    @action
    showCell(){
        this.props.cell.show = true;
    }

    @action
    hideCell(){
        this.props.cell.show = false;
    }

    render(){
        let width = 100 / this.props.count;
        return <div className={style.box} style={{width:width+"%"}}>
            <div 
                className={style.cell + " " +(this.props.cell.border?style.cellActive:"") + " " + (this.props.cell.nextborder?style.nextCellActive:"") + " " + (this.props.showRowBordor?style.rowActive:"") + " " + (this.props.showNextRowBordor?style.nextRowActive:"")} 
                onClick={this.toggleBorder.bind(this)}
                onMouseMove={this.showCell.bind(this)}
                onMouseOut={this.hideCell.bind(this)}>
                {this.props.cell.show?"第"+this.props.cell.row+"行,第"+this.props.cell.cell+"列":"表格"}
            </div>
        </div>
    }

}