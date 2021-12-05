import { useState } from 'react'
import classnames from 'classnames'

const Panel: React.FC<{ blank?: boolean }> = ({ blank }) => {
  const [count, setCount] = useState(0)

  return (
    <div className={classnames(['panel', "flex flex-col flex-1 h-full", { 'border': !blank }])}>
      {!blank && (
        <div className="w-full flex-1 flex items-center justify-center text-4xl font-bold">
          {count}
        </div>
      )}
      {!blank && (
        <div className="w-full flex justify-center items-stretch h-16">
          <button type="button" onClick={() => {setCount((prev) => prev + 1)}} className="w-1/2 flex items-center justify-center bg-blue-500 text-white font-bold text-3xl">+</button>
          <button type="button" onClick={() => {setCount((prev) => Math.max(0, prev - 1))}} className="w-1/2 flex items-center justify-center bg-red-400 text-white font-bold text-3xl">-</button>
        </div>
      )}
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <div id="app" className="flex flex-col justify-start items-start w-screen h-screen fixed left-0 top-0">
      <div className="flex justify-center items-stretch row w-screen flex-1">
        {new Array(7).fill(0).map((_, i) => (
          <Panel blank={!(i === 1 || i === 5)} />
        ))}
      </div>
      <div className="flex justify-center items-stretch row w-screen flex-1" style={{ marginTop: '-1px' }}>
        {new Array(7).fill(0).map((_, i) => (
          <Panel blank={!(i < 6)} />
        ))}
      </div>
      <div className="flex justify-center items-stretch row w-screen flex-1" style={{ marginTop: '-1px' }}>
        {new Array(7).fill(0).map((_, i) => (
          <Panel  blank={!(i > 0 && i < 6)} />
        ))}
      </div>
    </div>
  )
}
