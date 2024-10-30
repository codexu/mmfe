import getConfig from 'next/config';

export default function Home() {
  const { publicRuntimeConfig } = getConfig();
  const { pkg } = publicRuntimeConfig;
  const dependencies = Object.keys(pkg.dependencies).map((key) => 
    <tr key={key}>
      <td>{key}</td>
      <td>{(pkg.dependencies as { [key: string]: string })[key]}</td>
    </tr>
  )
  const devDependencies = Object.keys(pkg.devDependencies).map((key) => 
    <tr key={key}>
      <td>{key}</td>
      <td>{(pkg.devDependencies as { [key: string]: string })[key]}</td>
    </tr>
  )
  
  return (
    <>
      <div className="flex jucstify-center items-center flex-col">
        <div className="grid grid-cols-1">
          <div className="w-24 rounded">
            <img alt="React logo" 
            src={`${publicRuntimeConfig.assetPrefix}/next.svg`} width={100} height={100} />
          </div>
        </div>
        <h1 className="font-bold text-2xl my-4">Next.js App</h1>
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
