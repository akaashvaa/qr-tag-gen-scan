import './App.css'
import CreateQR from './component/CreateQR'
import ReadQR from './component/ReadQR'
function App() {
  return (
    <>
      <div className="container " style={{ marginTop: '8rem' }}>
        <h1 className="mt-4 mb-8 text-center display-2">
          Qr Code Generator & Scanner
        </h1>

        <div className="row pt-4 mt-6">
          <CreateQR />
          <ReadQR />
        </div>
      </div>
    </>
  )
}

export default App
