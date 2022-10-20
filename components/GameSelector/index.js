import React from "react";
import { Form } from 'react-bootstrap'

const GameSelector= ({ selectChange } ) => {
  return(
    <div className="input-group input-group-sm">
      <div className="input-group-prepend">
        <label className="input-group-text custom" htmlFor="gameSelector">Select a Game Match</label>
      </div>
      <Form.Select
        aria-label="Select a Game Match"
        id="gameSelector"
        onChange={(e) => selectChange(e.target.value)}
      >
        <option value="12771">BIF vs LHC</option>
        <option value="12915">BIF vs FBK</option>
        <option value="12939">FHC vs IKO</option>
      </Form.Select>
    </div>
  )
}

export default GameSelector
