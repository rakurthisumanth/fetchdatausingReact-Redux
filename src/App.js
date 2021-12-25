import React from 'react'
import Container from './components/tabledata/Container'
import {Provider} from 'react-redux'
import store from './redux/store/store'

function App() {
    return (
        <Provider store={store}>
<div>
    <Container/>
</div>
       
        </Provider>
      
    )
}

export default App
