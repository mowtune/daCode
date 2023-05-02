import Home from './home/home';
import Servicepage from './servicepage/servicepage';
// import Case from './case/case';
// import Specialists from './specialists/specialists'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import Header from '../src/header/header';
// import Footer from '../src/footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Servicepage} />
          {/* <Route path='/case' exact component={Case} /> */}
          {/* <Route path='/specialists' exact component={Specialists} /> */}
          {/* <Route path='/blog' exact component={Blog} /> */}
        </Switch>
      </main>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
