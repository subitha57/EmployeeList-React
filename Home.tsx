import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import { IEmployee, PageEnum } from './Employee';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';

export default function Home() {

  const [employeeList, setEmployeeList]= useState([] as IEmployee[]);

  const [shownPage,setShownPage] = useState(PageEnum.list)
  const [dataToEdit,setDataToEdit]=useState({} as IEmployee)

useEffect(()=>{
  const listInstring= window.localStorage.getItem("EmployeeList")
  if(listInstring){
    _setEmployeeList(JSON.parse(listInstring))
  }
},[])

  const onAddEmployeeClickHnd=()=>{
    setShownPage(PageEnum.add);
  }
  const showListPage=()=>{
    setShownPage(PageEnum.list)
  }

  const _setEmployeeList = (list:IEmployee[])=>{
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList",JSON.stringify(list))
  }
const addEmployeeHnd=(data:IEmployee)=>{
 _setEmployeeList([...employeeList,data]);
}

const deleteEmployee=(data:IEmployee)=>{
  const indexToDelete = employeeList.indexOf(data);
  const tempList =[...employeeList]
  tempList.splice(indexToDelete,1);
  setEmployeeList(tempList)
}

const editEmployeeData = (data:IEmployee)=>{
  setShownPage(PageEnum.edit);
  setDataToEdit(data)
}

const updateData=(data:IEmployee)=>{
  const filteredData = employeeList.filter(x=>x.id === data.id)[0];
  const indexOfRecord = employeeList.indexOf(filteredData);
  const tempData=[...employeeList]
  tempData[indexOfRecord]=data;
  setEmployeeList(tempData)
}
  return (
  <>
  <article className='artical-header'>
    <header>
        <h2>Simple Crud Application</h2>
        </header>
        </article>
      
      <section className='section-content'>
        {shownPage === PageEnum.list && (
        <>
         <input type="button" value="Add Employee" onClick={onAddEmployeeClickHnd}
          className='add-employee-btn'/>
     <EmployeeList list={employeeList} 
     onDeleteClickHnd={deleteEmployee} 
     onEdit={editEmployeeData}/>
        </>
        )}
    {shownPage === PageEnum.add && <AddEmployee onBackBtnClickHnd={showListPage}
     onSubmitClickHnd={addEmployeeHnd}/>}

     {shownPage === PageEnum.edit && <EditEmployee data={dataToEdit} 
     onBackBtnClickHnd={showListPage}
     onUpdateClickHnd={updateData}/>}
      </section>
   
        </>
         
  )
}
