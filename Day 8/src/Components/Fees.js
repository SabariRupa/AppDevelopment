import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './Fees.css';
import { Link, useNavigate } from 'react-router-dom';

function Fees() {
  const nav=useNavigate();
  const navFee=()=>{
    nav("/feesform")
  }
  return (
    <div>
    <button onClick={navFee} id="createfeebtn">CREATE FEE STRUCTURE</button>
    <h3 id="piehd">Payment Status:</h3>
    <div className="chart-container">
      <PieChart  
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'Paid' },
              { id: 1, value: 15, label: 'Not Paid' },
              { id: 2, value: 20, label: 'Partial' },
            ],
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
          <tr>
            <td>001</td>
            <td>Nandhish</td>
            <td>MQ</td>
            <td>$50000</td>
            <td>$100000</td>
            <td>Partial</td>
          </tr>
          <tr>
            <td>002</td>
            <td>Prasanna</td>
            <td>GQ</td>
            <td>$80000</td>
            <td>$80000</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>003</td>
            <td>Radhika</td>
            <td>MQ</td>
            <td>$75000</td>
            <td>$100000</td>
            <td>Partial</td>
          </tr>
          <tr>
            <td>004</td>
            <td>Saravana </td>
            <td>GQ</td>
            <td>$0</td>
            <td>$80000</td>
            <td>Not Paid</td>
          </tr>
          <tr>
          <td>005</td>
          <td>Vasumathi</td>
          <td>MQ</td>
          <td>$0</td>
          <td>$100000</td>
          <td>Not Paid</td>
        </tr>

        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Fees;
