import React from 'react';
import CssModule from '../../commonents/cssmodel/cssModule';
import Counter from '../../commonents/counthooksReducer/counter'
class App extends React.Component{
    render() {
        return(
            <div className='app'>
                <CssModule> </CssModule>
                <Counter></Counter>
            </div>
        )
    }
}
export default App;
