import './ExpenseItem.css';
function ExpenseItem(){
    const ExpenseDate = new Date(2021, 2, 28);
    const ExpenseTitle = 'Car Insurance';
    const ExpensePrice = 294.67;
    const LocationOfExpenditure = 'Chennai';
    return(
        <div className="expense-item">
            <div>{ExpenseDate.toString()}</div>
            <div className="expense-item__description">
                <h2>{ExpenseTitle}</h2>
                <div className="expense-item__price">${ExpensePrice}</div>
                <div className="expense-item__price">{LocationOfExpenditure}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;