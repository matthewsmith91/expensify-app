import React from 'react'
import expensesTotal from '../selectors/expenses-total'

export class ExpensesSummary extends React.Component {
    render() {
        return (
            <div>
                <p>Viewing {this.props.expenses.length} expenses totaling {expensesTotal(this.props.expenses)}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect()(ExpensesSummary)