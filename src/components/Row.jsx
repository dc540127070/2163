import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Cell from "./Cell";

import style from "../index.css";

@observer
export default class Row extends React.Component {
    constructor(props){
        super(props)
    }

    @action
    toggleBorder(){
        this.props.toggleRowBordor(this.props.row.row);
    }

    render(){  
        return <div className={style.row} onMouseMove={this.toggleBorder.bind(this)}>
            {this.props.row.cells.map((cell) => {
                return <Cell cell={cell} count={this.props.row.cells.length} showRowBordor={this.props.row.border} showNextRowBordor={this.props.row.nextborder} toggleColBordor={this.props.toggleColBordor}  key={cell.cell}/>
            })}
        </div>
    }

}