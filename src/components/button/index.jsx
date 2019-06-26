import React from "react"

export const Button = ({ displayLabel, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{displayLabel}</button>
    </div>
  )
}
