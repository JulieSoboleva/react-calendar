import Calendar from './components/Calendar'

const date = new Date()

function App() {
  return (
    <Calendar date={date} />
  )
}

export default App
