import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import { setTextFilter } from './actions/filters'

const store = configureStore()
store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))

const state = store.getState()
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibileExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))