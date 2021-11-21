import React, { useContext } from 'react'
import GlobalContext from '../context'

function Button() {
  const { handleReset } = useContext(GlobalContext)

  return (
    <button
      className="button"
      onClick={handleReset}
    >
      RESET
    </button>
  )
}

export default Button
