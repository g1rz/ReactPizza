import React from 'react';

// import store from './redux/store';
import { useDispatch } from 'react-redux';

import { Header } from './components/';
import { Home, Cart } from './pages/';
import { Route } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {}, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPizzas: (items) => dispatch(setPizzasAction(items)),
//     };
// };

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
