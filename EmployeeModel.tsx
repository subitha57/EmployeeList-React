import { IEmployee } from './Employee'
import './EmployeeModel.css'

type Props={
    onClose:()=>void
    data: IEmployee; 
}

const EmployeeModel =(props:Props)=>{
const {onClose,data}=props

    return <div id="myModel" className="model">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Employee Data</h3>
                <div>
                    <div>
                        <label>First Name:{data.firstName}</label>
                    </div>
                    <div>
                        <label>Last Name:{data.lastName}</label>
                    </div>
                    <div>
                        <label>Email:{data.email}</label>
                    </div>
                </div>
            </div>

    </div>
}
export default EmployeeModel;