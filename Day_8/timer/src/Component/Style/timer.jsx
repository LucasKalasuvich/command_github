import '../Style/App.scss'
import { App } from '../Pages/App'

const endDate = new Date().getTime() + 7*24*60*60*1000;

function App() {
    return (
        <div className='app-wrapper'>
            <timer heading="7 Days Remaining" endDate={endDate}/>
        </div>
    )
}

export default App