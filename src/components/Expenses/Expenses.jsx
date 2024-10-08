/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return (
			expense.date.getFullYear().toString() === filteredYear
		);
	});

	const deleteHandler = (id) => {
		props.delete(id)
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList
					expenses={filteredExpenses}
					delete={deleteHandler}
				/>
			</Card>
		</div>
	);
}

export default Expenses;
