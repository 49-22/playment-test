import React from "react"

export const DropDown = ({ items, label, onChange }) => {
  return (
    <div style={{ margin: 16 }}>
      <label>{label}</label>
      <select onChange={args => onChange && onChange(args.target.value)}>
        {items.map((item, index) => {
          return <option key={index}>{item.label}</option>
        })}
      </select>
    </div>
  )
}
