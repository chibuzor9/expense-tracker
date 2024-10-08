import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
	const [isEditing, setIsEditing] = useState(false);

	const onSaveExpenseData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		// eslint-disable-next-line react/prop-types
		props.onUpdateExpenses(expenseData);
		setIsEditing(false);
	};

	const startEditinghandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditinghandler}>
					Add New Expense
				</button>
			)}
			{isEditing && (
				<ExpenseForm
					onExpenseSubmit={onSaveExpenseData}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
}

export default NewExpense;
