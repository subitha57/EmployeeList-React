import { useState } from 'react';
import { IEmployee } from './Employee';
import './EmployeeList.css'
import EmployeeModel from './EmployeeModel';


type Props={
    list:IEmployee[];
    onDeleteClickHnd:(data:IEmployee)=>void
    onEdit:(data:IEmployee)=>void;
}
const EmployeeList =(props:Props)=>{
    const{list, onDeleteClickHnd, onEdit}=props;
    const[showModel, setShowModel]=useState(false)
    const[dataToShow,setDataToShow]=useState(null as IEmployee | null)

    const viewEmployee=(data:IEmployee)=>{
        setDataToShow(data)
        setShowModel(true)
    }
    const onCloseModel=()=>setShowModel(false)

    return(
         <div> 
            <article>
                <h3> Employee List</h3>
            </article>
             <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {list.map((employee:any)=>{
                
                return(
            <tr key={employee.id}>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{employee.email}</td>
                <td>
                    <div>
                        <input type="button" value="view" onClick={()=>viewEmployee(employee)}/>
                        <input type="button" value="Edit" onClick={()=>onEdit(employee)}/>
                        <input type="button" value="Delete" 
                        onClick={()=>onDeleteClickHnd(employee)}/>
                    </div>
                </td>
            </tr>
            );
             })}
            </table>
            {showModel && dataToShow !== null && <EmployeeModel onClose={onCloseModel} data={dataToShow}/>}
           
    </div>
    );
};  
export default EmployeeList;