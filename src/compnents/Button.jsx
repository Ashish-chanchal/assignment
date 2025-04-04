import React from 'react'

function Button({title}) {
  return (
    <button className="w-full py-3 px-4 text-center bg-yellow-400 hover:bg-yellow-500 transition text-gray-800 font-medium rounded-md mt-4">
              {title}
            </button>
  )
}

export default Button
