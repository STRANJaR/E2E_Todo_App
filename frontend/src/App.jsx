import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
import Home from './components/Home'
import CreateTodo from './components/CreateTodo'

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Home/>}>
                <Route path='/todos' element={<CreateTodo/>}/>
            </Route>
        )
    )
}

export default App
