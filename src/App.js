import Home from './home/home';
// import Services from './services/services';
// import Case from './case/case';
// import Specialists from './specialists/specialists'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header/>
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/services' exact component={Services} />
          <Route path='/case' exact component={Case} />
          <Route path='/specialists' exact component={Specialists} />
          <Route path='/blog' exact component={Blog} /> */}
        </Switch>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
