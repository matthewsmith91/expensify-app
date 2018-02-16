import React from 'react'
import {connect} from 'react-redux'
import expensesTotal from '../selectors/expenses-total'

export class ExpensesSummary extends React.Component {
    render() {
        return (
            <div>
                <p>Viewing {this.props.expenses ? this.props.length : 0} expenses totaling {expensesTotal(this.props.expenses)}</p>
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