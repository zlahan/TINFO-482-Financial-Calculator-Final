import * as React from "react";
import defaultState from "./defaultState";

function VariablesForm({ onUpdate }) {
  const [state, setState] = React.useState(defaultState);

  const { initialAmount, period, Apr} = state;

  return (
    <section><br />
      <h2>Financials</h2>
      <div className="flex">
        <label htmlFor="initialAmount">
          Balance ($): 
          <input
            class="box"
            type="number"
            id="initialAmount"
            name="initialAmount"
            value={initialAmount}
            onChange={({ target }) => setState({ ...state, initialAmount: Number(target.value) })}
          /><br /><br />
        </label>
        <label htmlFor="period">
           Length (Years): 
          <input  
            class="box"
            type="number"
            id="period"
            name="period"
            value={period}
            onChange={({ target }) => setState({ ...state, period: Number(target.value) })}
          /><br /><br />
        </label>
        <label htmlFor="Apr">
          APR (%): 
          <input
            class="box"
            type="number"
            id="Apr"
            name="Apr"
            value={Apr}
            onChange={({ target }) => setState({ ...state, Apr: Number(target.value) })}
          /><br /><br />
        </label>
      </div>
      <button type="button" class="button" onClick={() => onUpdate(state)}>
        Update Chart
      </button><br /><br />
    </section>
  );
}

export default VariablesForm;