export const step1 = `import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Result from "./Result";

createStore({
  data: {}
});

export default function App() {
  return (
    <StateMachineProvider>
      <Router>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/result" component={Result} />
      </Router>
    </StateMachineProvider>
  );
}
`

export const step2 = `import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = props => {
  const { register, handleSubmit } = useForm();
  const { action } = useStateMachine(updateAction);
  const onSubmit = data => {
    action(data);
    props.history.push("./step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);
`

export const step3 = `import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Result = props => {
  const { state } = useStateMachine(updateAction);

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};`
