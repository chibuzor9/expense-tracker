/* eslint-disable react/prop-types */
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
	const { expenses } = props;

	const deleteHandler = (id) => {
		props.delete(id)
	}

	return (
		<ul className="expenses-list">
			{expenses.length === 0 ? (
				<h2 className="expenses-list__fallback">
					Nothing to see here!
				</h2>
			) : (
				expenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						id={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
						delete={deleteHandler}
					/>
				))
			)}
		</ul>
	);
}

export default ExpensesList;
