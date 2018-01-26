import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter from './routers/AppRouter'
import React from 'react'
import ReactDOM from 'react-dom'
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import { setTextFilter } from './actions/filters'

const store = configureStore()
store.dispatch(addExpense({ description: 'Water bill' }))
store.dispatch(addExpense({ description: 'Gas bill' }))
store.dispatch(setTextFilter('bill'))

const state = store.getState()
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibileExpenses)

ReactDOM.render(<AppRouter />, document.getElementById('app'))