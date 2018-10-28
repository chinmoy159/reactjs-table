import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './bootstrap.min.css';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

class Table extends React.Component {
	render() {
		return(
			<div style = {{margin : '1em'}}>
				<BootstrapTable data = {this.props.data} striped hover trClassName='tr-style'>
					<TableHeaderColumn isKey
						dataField = 'id'
						dataAlign = 'center'
						width = '10%'>
						ID</TableHeaderColumn>
					<TableHeaderColumn dataField = 'name'
						tdStyle = {{backgroundColor : 'cyan'}}>
						Name</TableHeaderColumn>
					<TableHeaderColumn dataField = 'value'
						headerAlign = 'center'
						thStyle = {{fontWeight : 'normal', color : 'green'}}>
						Value</TableHeaderColumn>
				</BootstrapTable>
			</div>
		);
	}
}

export default Table;