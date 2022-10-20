import React from "react"

import { Form } from "react-bootstrap"

const PeriodHeader=({setChange, periods}) => {
  return(
    <Form.Select
      aria-label="Select a Game Match"
      id="recapSelector"
      onChange={(e) => setChange(e.target.value)}
      size="sm"
    >
      {
        periods && periods.map((period, index) => {
          if (period === 'gameRecap') return <option key={index} value={period} selected>Total</option>
          return <option key={index} value={period}>Period {period}</option>
        })
      }
    </Form.Select>
  )
}

export default PeriodHeader