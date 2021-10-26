import { TreeList, Column } from 'devextreme-react/tree-list';
import { employees } from './data.js';
import 'D:/MODULE-BUILDER-SOMONE/grafone-componets/node_modules/devextreme/dist/css/dx.light.css';

const Module = (React, Router, Material, Dashboard) => {
    const Component = props => {
        const expandedRowKeys = [1];

        return (
            <TreeList
              id="employees"
              dataSource={employees}
              rootValue={-1}
              defaultExpandedRowKeys={expandedRowKeys}
              showRowLines={true}
              showBorders={true}
              columnAutoWidth={true}
              keyExpr="ID"
              parentIdExpr="Head_ID"
            >
              <Column
                dataField="Title"
                caption="Position" />
              <Column
                dataField="Full_Name" />
              <Column
                dataField="City" />
              <Column
                dataField="State" />
              <Column
                dataField="Mobile_Phone" />
              <Column
                dataField="Hire_Date"
                dataType="date" />
            </TreeList>
          );
    }
    return Component
}
export default Module