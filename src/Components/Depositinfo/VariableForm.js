import * as React from "react";
import defaultState from "./defaultState";

function VariablesForm({ onUpdate }) {
  const [state, setState] = React.useState(defaultState);

  const { initialAmount, period, apy, monthlyContribution } = state;

  return (
    <section><br />
      <h2>Financials</h2>
      <div className="flex">
        <label htmlFor="initialAmount">
          Initial Funding Balance ($): 
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
          Investment Period (Years): 
          <input
            class="box"
            type="number"
            id="period"
            name="period"
            value={period}
            onChange={({ target }) => setState({ ...state, period: Number(target.value) })}
          /><br /><br />
        </label>
        <label htmlFor="apy">
          Annual Percentage Yield (%): 
          <input
            class="box"
            type="number"
            id="apy"
            name="apy"
            value={apy}
            onChange={({ target }) => setState({ ...state, apy: Number(target.value) })}
          /><br /><br />
        </label>
        <label htmlFor="monthlyContribution">
          Monthly Contribution ($) (Optional): 
          <input
            class="box"
            type="number"
            id="monthlyContribution"
            name="monthlyContribution"
            value={monthlyContribution}
            onChange={({ target }) =>
              setState({ ...state, monthlyContribution: Number(target.value) })}
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