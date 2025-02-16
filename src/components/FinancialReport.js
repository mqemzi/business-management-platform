import React from 'react';
import { Bar } from 'react-chartjs-2';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const FinancialReport = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Average Sales per Month',
      fontSize: 20,
    },
    legend: {
      display: true,
      position: 'right',
    },
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Financial Report', 20, 10);
    doc.autoTable({
      head: [['Month', 'Sales']],
      body: data.labels.map((label, index) => [label, data.datasets[0].data[index]]),
    });
    doc.save('financial_report.pdf');
  };

  return (
    <div>
      <h1>Financial Report</h1>
      <Bar data={data} options={options} />
      <button onClick={exportPDF}>Export to PDF</button>
    </div>
  );
};

export default FinancialReport;
