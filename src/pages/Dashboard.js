import React, { useState, useEffect } from 'react';
import TransactionsTable from '../components/TransactionsTable';
import StatisticsBox from '../components/StatisticsBox';
import BarChart from '../components/BarChart';
import Dropdown from '../components/Dropdown';
import axios from 'axios';

const Dashboard = () => {
  // State for selected month
  const [selectedMonth, setSelectedMonth] = useState('March');

  // State for transactions data
  const [transactions, setTransactions] = useState([]);

  // State for statistics data
  const [statistics, setStatistics] = useState({});

  // State for bar chart data
  const [barChartData, setBarChartData] = useState([]);

  // Fetch transactions data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/transactions?month=${selectedMonth}`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchData();
  }, [selectedMonth]);

  // Fetch statistics data on component mount and when selected month changes
  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(`/api/statistics/${selectedMonth}`);
        setStatistics(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, [selectedMonth]);

  // Fetch bar chart data on component mount and when selected month changes
  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const response = await axios.get(`/api/bar-chart/${selectedMonth}`);
        setBarChartData(response.data);
      } catch (error) {
        console.error('Error fetching bar chart data:', error);
      }
    };

    fetchBarChartData();
  }, [selectedMonth]);

  return (
    <div>
      <Dropdown selectedMonth={selectedMonth} onSelectMonth={setSelectedMonth} />
      <TransactionsTable transactions={transactions} />
      <StatisticsBox statistics={statistics} />
      <BarChart barChartData={barChartData} />
    </div>
  );
};

export default Dashboard;
