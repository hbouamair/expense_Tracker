
import './App.css';
import {Header} from './Components/Header'
import {Balance} from './Components/Balance'
import {IncomesExpense} from './Components/IncomesExpense'
import {TransactionsList} from './Components/TransactionsList'
import {AddTransaction} from './Components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <GlobalProvider >
      <Header/>

    <div className="container">
    <Balance/>
    <IncomesExpense/>
    <TransactionsList/>
    <AddTransaction/>
    
    </div>
    </GlobalProvider>
  );
}

export default App;
