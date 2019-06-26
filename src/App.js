import React from "react"

import "./App.css"
import { StaticText } from "./components/Text"
import { Input } from "./components/Input"
import { DropDown } from "./components/DropDown"
import FormData from "./data/formData"
import { Button } from "./components/button"

const Components = {
  Input,
  StaticText,
  DropDown
}

function App() {
  const [appstate, setAppstate] = React.useState({})
  const [formData, updateFormData] = React.useState(FormData)

  console.log(formData)

  const handleAnyChange = (value, fieldName) => {
    if (fieldName === "addComponent") {
      updateFormData([
        ...formData,
        {
          id: "field-7",
          name: "emergencyContactInput",
          componentName: "Input",
          initialValue: "Father",
          value: ""
        }
      ])
    } else {
      setAppstate({
        ...appstate,
        [fieldName]: value
      })
    }
  }

  // Component movement operations
  const moveUp = currentIndex => {
    let newFormData = [...formData]

    newFormData[currentIndex - 1] = formData[currentIndex]
    newFormData[currentIndex] = formData[currentIndex - 1]

    updateFormData(newFormData)
  }

  const moveDown = currentIndex => {
    let newFormData = [...formData]

    newFormData[currentIndex + 1] = formData[currentIndex]
    newFormData[currentIndex] = formData[currentIndex + 1]

    updateFormData(newFormData)
  }

  const deleteElement = currentIndex =>
    updateFormData(formData.filter((_, index) => index !== currentIndex))

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        {formData.map((field, index) => {
          const { componentName, name, id, ...rest } = field
          const Component = Components[componentName]
          return (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Component
                key={id}
                {...rest}
                onChange={value => {
                  handleAnyChange(value, name)
                }}
              />
              <Button displayLabel="Up" onClick={() => moveUp(index)} />
              <Button displayLabel="Down" onClick={() => moveDown(index)} />
              <Button
                displayLabel="Delete"
                onClick={() => deleteElement(index)}
              />
            </div>
          )
        })}

        <Button
          onClick={() => downloadJSON(appstate)}
          displayLabel="Download JSON"
        />
        <a id="downloadAnchorElem" />
      </div>
    </div>
  )
}

export default App

function downloadJSON(appState) {
  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(appState))
  var dlAnchorElem = document.getElementById("downloadAnchorElem")
  dlAnchorElem.setAttribute("href", dataStr)
  dlAnchorElem.setAttribute("download", "scene.json")
  dlAnchorElem.click()
}
