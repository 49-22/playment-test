import React from "react"

export const Input = ({ value, onChange }) => {
  return (
    <div style={{ margin: 16 }}>
      <input onChange={event => onChange && onChange(event.target.value)} />
    </div>
  )
}
