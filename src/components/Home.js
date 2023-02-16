import React from 'react'
import Employee from './Empolyee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaPen, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import { Link,useNavigate  } from 'react-router-dom';


function Home() {
    const history=useNavigate()
    const handleDelete=(id)=>{
        // alert('Deleted')
        var index=Employee.map(item=>item.id).indexOf(id);//index
        Employee.splice(index,1)//item remove
        console.log(Employee);//array position with remaing item
    
        history('/')
      }
      const handleEdit=(id,empname,age,desigination,salary)=>{
        localStorage.setItem("ID",id);
        localStorage.setItem("NAME",empname);
        localStorage.setItem("AGE",age);
        localStorage.setItem("DESIGINATION",desigination);
        localStorage.setItem("SALARY",salary);
      }

  return (
    <>
    <h1 className='text-primary text-center m-4'>Employee Management System</h1>
    <p className='p-3'>An employee management system is a software, that helps your employees to give their best efforts every day to achieve the goals of your organization. It guides and manages employees efforts in the right direction. It also securely stores and manages personal and other work-related details for your employees. That makes it easier to store and access the data when there is a need.In the employee management system, you can manage admin activities in an easier and quicker way. Employees are an important part of your organization it is their work that ultimately contributes to the bottom line of the company. It is an important part of HR management. It also helps to employee engagement and performance management brings down costs and increases productivity.</p>
    <Link to={'/add'}>
    <Button variant='success'><FaUserPlus/></Button>
    </Link>

    <h1 className='my-5'>list of employee</h1>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Employee Name</th>
        <th>Age</th>
        <th>Desigination</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        
      {
        Employee && Employee.length>0?
        Employee.map((item)=>(
          <tr>
            <td>{item.id}</td>
            <td>{item.empname}</td>
            <td>{item.age}</td>
            <td>{item.desigination}</td>
            <td>{item.salary}</td>
            <td>
            <Link to={'/edit'}>
              <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.desigination,item.salary)}  variant="primary"><FaPen/></Button>
              </Link>   
             
            <Button onClick={()=>handleDelete(item.id)} variant="danger"><FaTrashAlt/></Button>
            </td>
          </tr>
        )):'No data available'
      }
      
     
    </tbody>
  </Table>
  </>
  )
}

export default Home