import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		// eslint-disable-next-line react/prop-types
		props.onUpdateExpenses(expenseData)
	};

	return (
		<div className="new-expense">
			<ExpenseForm
				onExpenseSubmit={saveExpenseDataHandler}
			/>
		</div>
	);
}

export default NewExpense;
