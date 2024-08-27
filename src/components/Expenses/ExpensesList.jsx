/* eslint-disable react/prop-types */
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
	const { expenses } = props;

	return (
		<ul className="expenses-list">
			{expenses.length === 0 ? (
                <h2 className='expenses-list__fallback'>Nothing to see here!</h2>
			) : (
				expenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))
			)}
		</ul>
	);
}

export default ExpensesList;
