/* eslint-disable react/prop-types */
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import DisableButton from '../UI/DisableButton'

function ExpenseItem(props) {
	const deleteHandler = () => {
		props.delete(props.id) 
	}

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">
						$ {props.amount}
					</div>
				</div>
				<DisableButton delete={deleteHandler}/>
			</Card>
		</li>
	);
}

export default ExpenseItem;
