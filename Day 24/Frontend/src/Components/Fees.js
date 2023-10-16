import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './Fees.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Fees() {
  const token=localStorage.getItem("token")
  useEffect(()=>{

    if(token===null){
      nav("/login")
      
    }
  },[])
  const [studentData, setStudentData] = useState([]);
  const nav = useNavigate();
  const [paymentStatusData, setPaymentStatusData] = useState([
    { id: 0, value: 0, label: 'Paid' },
    { id: 1, value: 0, label: 'Not Paid' },
    { id: 2, value: 0, label: 'Partial' },
  ]);

  const navFee = () => {
    nav("/feesform");
  }

  useEffect(() => {

    const apiUrl = 'http://localhost:8080/students';
    axios.get(apiUrl)
      .then(response => {
        setStudentData(response.data);
        
        const paymentStatusCounts = response.data.reduce((counts, student) => {
          if (student.feesPaid === student.totalFees) {
            counts.paid++;
          } else if (student.feesPaid === 0) {
            counts.notPaid++;
          } else {
            counts.partial++;
          }
          return counts;
        }, { paid: 0, notPaid: 0, partial: 0 });

        setPaymentStatusData([
          { id: 0, value: paymentStatusCounts.paid, label: 'Paid' },
          { id: 1, value: paymentStatusCounts.notPaid, label: 'Not Paid' },
          { id: 2, value: paymentStatusCounts.partial, label: 'Partial' },
        ]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const getPaymentStatus = (feesPaid, totalFees) => {
    if (feesPaid === totalFees) {
      return 'Paid';
    } else if (feesPaid === 0) {
      return 'Not Paid';
    } else {
      return 'Partial';
    }
  };


  return (
    <div>
      <button onClick={navFee} id="createfeebtn">CREATE FEE STRUCTURE</button>
      <h3 id="piehd">Payment Status:</h3>
      <div className="chart-container">
        <PieChart
          series={[
            {
              data: paymentStatusData,
            },
          ]}
          width={400}
          height={200}
        />
      </div>

      <div className="feesstudenttable">
        <h3 id="splist">Student Payment List:</h3>
        <table className="studenttb">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Quota</th>
              <th>Fee Paid</th>
              <th>Total Fees</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map(student => (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.quota}</td>
                <td>{student.feesPaid}</td>
                <td>{student.totalFees}</td>
                <td>{getPaymentStatus(student.feesPaid, student.totalFees)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fees;
