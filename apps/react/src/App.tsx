import ReactLogo from './assets/react.svg'
import pkg from '../package.json'

function App() {
  const dependencies = Object.keys(pkg.dependencies).map((key) => 
    <tr>
      <td>{key}</td>
      <td>{(pkg.dependencies as { [key: string]: string })[key]}</td>
    </tr>
  )
  const devDependencies = Object.keys(pkg.devDependencies).map((key) => 
    <tr>
      <td>{key}</td>
      <td>{(pkg.devDependencies as { [key: string]: string })[key]}</td>
    </tr>
  )
  return (
    <>
      <div className="flex jucstify-center items-center flex-col">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-24 rounded">
            <img alt="React logo" className='w-full' src={ReactLogo} />
          </div>
          <div className="w-24 rounded">
            <img alt="Vite logo" className='w-full' src="/vite.svg" />
          </div>
        </div>
        <h1 className="font-bold text-2xl my-4">React App</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Dependencies</th>
                  <th>Version</th>
                </tr>
              </thead>
              <tbody>
                {dependencies}
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>DevDependencies</th>
                  <th>Version</th>
                </tr>
              </thead>
              <tbody>
                {devDependencies}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
