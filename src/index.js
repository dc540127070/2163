import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import Table from "./components/Table";
import TableModel from "./models/tableModel";

import style from "./index.css";

const store = new TableModel();

store.addRow(6);
store.addCol(7);

render(
  <div>
    <DevTools />
    <Table store={store} />
  </div>,
  document.getElementById("root")
);

// playing around in the console
window.store = store;
