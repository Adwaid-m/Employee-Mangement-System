import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react'; 
import Employee from './Empolyee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {
    const [id,setId]=useState('');
    const [empname,setEmpname]=useState('');
    const [age,setAge]=useState('');
    const [desigination,setDesigination]=useState('');
    const [salary,setSalary]=useState();


    const history = useNavigate()
    const handleAdd=(e)=>{
      e.preventDefault();

      let ids=uuid();
      console.log(ids);

      let uniqueId= ids.slice(0,8)
      console.log(uniqueId);

      Employee.push({
        id:uniqueId,
        empname:empname,
        age:age,
        desigination:desigination,
        salary:salary
      })

      history('/')

    }
  
  return (
    <>
        <h1 className='text-primary text-center m-4'>Add Employee Management system</h1>

        <p className='col-lg-12'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
        <Row>
  <Col md={4}>
  <img src="https://pluspng.com/img-png/png-employee-account-avatar-business-colleague-employee-female-group-human-512.png"></img>
  </Col>

<Col md={6}>
<Form className='border border-3 p-5'>
      <Form.Group className="mb-3" >
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" placeholder="Enter id"
        //value={id}
        onChange={(e)=>setId(e.target.value)} 
        required />
       
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"
        //value={empname}
        onChange={(e)=>setEmpname(e.target.value)} 
        required
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter age" 
        //value={age}
        onChange={(e)=>setAge(e.target.value)}
        required
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Desigination</Form.Label>
        <Form.Control type="text" placeholder="Enter desigination"
        //value={desigination}
        onChange={(e)=>setDesigination(e.target.value)}
        required
         />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter salary"
        //value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        required 
        />
      </Form.Group>
      


      
      <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
        Add
      </Button>
    </Form>
</Col>
</Row>
    </>
  )
}

export default Add