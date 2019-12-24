import code from "../../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../../styles/link"
import { Link as NavLink } from "gatsby"
import { CodeBlock, Note, Title, TypeText } from "../../styles/typography"
import { CodeAsLink } from "../../components/ApiPage"
import colors from "../../styles/colors"
import translateLink from "../../components/logic/translateLink"
import Popup from "../../components/Popup"

export default {
  title: "API Documentation",
  header: {
    description:
      "React Hook Form focuses on providing the best DX by simplifying the API.",
  },
  useForm: {
    title: "useForm",
    intro: (
      <>
        By invoking <code>useForm</code>, you will receive the following methods{" "}
      </>
    ),
    description: (
      <p>
        <code>useForm</code> also has <b>optional</b> arguments. The following
        example demonstrates all options' default value.
      </p>
    ),
    validateCriteriaMode: (
      <>
        <p>
          The default behavior <code>firstErrorDetected</code> will validate all
          fields' validation and gather all the first error encounter.
        </p>
        <p>
          With config set to <code>all</code>, all fields' validation will be
          run through and gather all the errors encounter.
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        Validation will trigger on the <code>submit</code> event and invalid
        inputs will attach <code>onChange</code> event listeners to re-validate
        them.
      </>
    ),
    validateOnBlur: (
      <>
        Validation will trigger on the <code>blur</code> event.
      </>
    ),
    validateOnChange: (
      <>
        Validation will trigger on the <code>change</code> event with each
        input, and lead to multiple re-renders. Not recommended: Consider this
        as a bad performance practice.
      </>
    ),
    defaultValues: goToSection => (
      <>
        <p>
          You can set the input's default value with{" "}
          <code>defaultValue/defaultChecked</code>{" "}
          <Link href="https://reactjs.org/docs/uncontrolled-components.html">
            (read more from the React doc for Default Values)
          </Link>{" "}
          or pass <code>defaultValues</code> as an optional argument to populate
          default values for the entire form.
        </p>

        <p>
          <Note>Note:</Note> Values defined in <code>defaultValues</code> will
          be injected into{" "}
          <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink> as{" "}
          <code>defaultValue</code>.
        </p>

        <p>
          <Note>Note:</Note> <code>defaultValues</code> doesn't auto populate
          with the manually registered input (eg:{" "}
          <code>{`register({ name: 'test' })`}</code>) because the manual{" "}
          <code>register</code> field does not provide the <code>ref</code> to
          React Hook Form.
        </p>
      </>
    ),
    validationSchema: goToSection => (
      <p>
        Apply form validation rules with <code>Yup</code> at the schema level,
        please refer to the{" "}
        <CodeAsLink onClick={() => goToSection("ValidationSchema")}>
          validationSchema
        </CodeAsLink>{" "}
        section.
      </p>
    ),
    reValidateMode: (
      <p>
        This option allows you to configure when inputs with errors getd
        re-validated (by default, validation is triggered during an input
        change.) <Popup />
      </p>
    ),
    validationFields: (
      <p>
        Providing an array of fields means only included fields will be
        validated. This option is useful when you want to toggle which fields
        are required to validate.
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          By default when the user submits a form and that contains an error,
          the first field with an error will be focused.
        </p>

        <p>
          <Note>Note:</Note> Only registered fields with a <code>ref</code> will
          work. Manually registered inputs won't work. eg:{" "}
          <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: goToSection => (
      <p>
        Setting this option to <code>true</code> will enable the browser's
        native validation. You can{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          find out more about the built-in browser validation
        </a>
        , and refer to the{" "}
        <CodeAsLink onClick={() => goToSection("nativeValidation")}>
          nativeValidation
        </CodeAsLink>{" "}
        section for more details and examples.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input
          or an array of inputs. This is useful when you register your input
          during <code>useEffect</code> as custom register and to unregister
          it after component unmount.
        </p>
        <p>
          <Note>Note:</Note> When you unregister an input, its value will no
          longer be included in the form data that gets submitted.
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          This method allows you to register input/select <code>Ref</code> and
          validation rules into React Hook Form.
        </p>
        <p>
          Validation rules are all based on HTML standard and also allow
          custom validation.
        </p>
        <p>
          <Note>Important:</Note> <code>name</code> is <b>required</b> and{" "}
          <b>unique</b>. Input name also supports dot and bracket syntax,
          which allows you to easily create nested form fields. Example table
          is below:
        </p>
      </>
    ),
    fieldArray: (
      <p
        style={{
          paddingLeft: 10,
          borderLeft: `4px solid ${colors.lightPink}`,
        }}
      >
        If you working on <code>arrays/array fields</code>, you can assign an
        input name as <code>name[index]</code>.{" "}
        <Link
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          Check out the Field Array example
        </Link>
        .
      </p>
    ),
    example: "Submit Result",
    selectHelp:
      "By selecting the register option, the API table below will get updated.",
    options: {
      title: "Register options",
      registerWithValidation: "Register with validation",
      registerWithValidationMessage:
        "Register with validation and error message",
      note: goToSection => (
        <>
          <Title>Custom Register</Title>
          <p>
            You can also register inputs manually, which is useful when
            working with custom components and <code>Ref</code> is not
            accessible. This is actually the case when you are working with
            React Native or custom component like{" "}
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>
            .
          </p>

          <p>
            By using a custom register call, you will need to update the input
            value with{" "}
            <CodeAsLink onClick={() => goToSection("setValue")}>
              setValue
            </CodeAsLink>
            , because input is no longer registered with its ref.
          </p>

          <p>
            <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
          </p>

          <p>
            <Note>Note:</Note> If you want the custom registered input to
            trigger a re-render during its value update, then you should give
            a type to your registered input.
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          A Boolean which, if true, indicates that the input must have a value
          before the form can be submitted. You can assign a string to return
          an error message in the <code>errors</code> object.
        </>
      ),
      maxLength: "The maximum length of the value to accept for this input.",
      minLength: "The minimum length of the value to accept for this input.",
      max: "The maximum value to accept for this input.",
      min: "The minimum value to accept for this input.",
      pattern: "The regex pattern for the input.",
      validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
    },
  },
  formState: {
    title: "formState",
    description: "This object contain information about the form state.",
    dirty: "Set to true after a user interacted with any of the inputs.",
    isSubmitted: "Set true after a user submitted the form.",
    touched: "An array of all inputs which have been interacted.",
    isSubmitting: (
      <>
        During form submitting will set to <code>true</code> and after
        submitting set to <code>false</code>
      </>
    ),
    submitCount: "Number of forms submit.",
    isValid: "Set true if doesn't have any error.",
  },
  errors: {
    title: "errors",
    description: currentLanguage => (
      <>
        <p>
          Object contains form errors or error messages which belong to each
          input.
        </p>

        <p>
          <Note>Note: </Note>The object itself is structured as flat (not
          nested) which means you access errors directly with input name. eg:{" "}
        </p>
        <p>
          <code>{`<input name="username[0].firstName" ref={register} />; \nerrors['username[0].firstName'];`}</code>
        </p>
        <p>
          we will consider to introduce nested error object once{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining">
            Optional chaining
          </a>{" "}
          has better browser support.
        </p>

        <p>
          <Note>Note:</Note> You can also learn recipes on{" "}
          <NavLink
            to={translateLink("advanced-usage#ErrorMessage", currentLanguage)}
          >
            Error Message
          </NavLink>{" "}
          from advanced page.
        </p>
      </>
    ),
    types: (
      <>
        This is useful for input validation like rules of password, which
        multiple errors need to return for a single field. To enable this
        feature, make sure you have set{" "}
        <code>validateCriteriaMode: 'all'</code>.
      </>
    ),
    message: `Message is an empty string by default. However, if you register validation with error message, then it will be returned.`,
    ref: `Reference for your input element.`,
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>
          This will watch specified input/inputs and return its value, and
          it's useful for determining what to render.
        </p>

        <ul>
          <li>
            <p>
              When <code>defaultValue</code> is not defined, the first render
              of <code>watch</code> will return <code>undefined</code> because
              it is called before <code>register</code>, but you can set the{" "}
              <code>defaultValue</code> as the second argument to return
              value.
            </p>
          </li>
          <li>
            <p>
              However, if <code>defaultValues</code> was initialised in{" "}
              <code>useForm</code> as argument, then the first render will
              return what's provided in <code>defaultValues</code>.
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          Watch input value by name (similar to lodash{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          function)
        </>
      ),
      multiple: "Watch multiple inputs",
      all: "Watch all inputs",
      nest: "Watch all inputs and return nested object",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          This function will pass the form data when form validation is
          successful.
        </p>
        <p>
          <Note>Note:</Note> You can pass an <code>async</code> function for
          asynchronous validation. eg:{" "}
        </p>
        <p>
          <CodeBlock>
            handleSubmit(async (data) => await fetchAPI(data))
          </CodeBlock>
        </p>
      </>
    ),
  },
  reset: goToSection => ({
    title: "reset",
    description: (
      <>
        <p>
          This function will reset the fields' values and errors within the
          form. You can pass <code>values</code> as an optional argument to
          reset your form into assigned default values.
        </p>
        <p>
          <Note>Note:</Note> For controlled components like{" "}
          <code>React-Select</code> which don't expose <code>ref</code>, you
          will have to reset the input value manually through{" "}
          <CodeAsLink onClick={() => goToSection("setValue")}>
            setValue
          </CodeAsLink>{" "}
          or using{" "}
          <CodeAsLink onClick={() => goToSection("Controller")}>
            Controller
          </CodeAsLink>{" "}
          to wrap around your controlled component.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <p>The function allows you to manually set one or multiple errors.</p>
    ),
  },
  clearError: {
    title: "clearError",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: reset all errors
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: reset single error
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: reset multiple errors
          </p>
        </li>
      </ul>
    ),
  },
  setValue: {
    title: "setValue",
    description: (
      <>
        <p>
          This function allows you to dynamically set input/select value. At
          the same time, it tries to avoid re-render when it's not necessary
          and only the following conditions will trigger re-render.
        </p>
        <ul>
          <li>
            <p>When an error is triggered by a value update</p>
          </li>
          <li>
            <p>When an error is corrected by a value update</p>
          </li>
          <li>
            <p>
              When setValue is invoked for the first time and formState{" "}
              <code>dirty</code> is set to true
            </p>
          </li>
          <li>
            <p>
              When setValue is invoked and formState <code>touched</code> is
              updated
            </p>
          </li>
        </ul>
        <p>
          <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
          will push the input's <code>name</code> into <code>touched</code>.
        </p>
        <p>
          You can also set <code>shouldValidate</code> to <code>true</code>{" "}
          and it will trigger field validation. eg:{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          This function will return the entire form data, and it's useful in a
          function when you want to retrieve form values.
        </p>

        <ul>
          <li>
            <p>
              By default <code>getValues()</code> will return form data in a
              flat structure. eg:{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </p>
          </li>
          <li>
            <p>
              Working on the defined form fields,{" "}
              <code>getValues({`{ nest: true }`})</code> will return data in a
              nested structure according to input <code>name</code>. eg:{" "}
              <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
            </p>
          </li>
        </ul>
      </>
    ),
  },
  triggerValidation: {
    title: "triggerValidation",
    description: (
      <>
        <p>To manually trigger an input/select validation in the form.</p>
        <p>
          <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
          object will be updated.
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "ValidationSchema",
    description: (
      <p>
        If you would like to centralize your validation rules with external
        validation schema, you can apply <code>validationSchema</code> at{" "}
        <code>useForm</code> as an optional argument. React Hook Form
        currently supports{" "}
        <Link
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </Link>{" "}
        for object schema validation.
      </p>
    ),
  },
  Controller: {
    title: "Controller",
    description: (
      <>
        <p>
          React Hook Form embrace uncontrolled components and native inputs,
          however it's hard to avoid working with external controlled
          component such as{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JedWatson/react-select"
          >
            React-Select
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ant-design/ant-design"
          >
            AntD
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          . This wrapper component will make your life easier to work with
          them.
        </p>
      </>
    ),
  },
  formContext: {
    title: "FormContext",
    introduction: (
      <p>
        Form context is intended to solve the problem when there are deep
        nested inputs in your components tree, and passing methods deep down
        as <code>props</code> becomes painful.
      </p>
    ),
    description: (
      <>
        <p>
          Once your form is wrapped with <code>FormContext</code>, the{" "}
          <code>useFormContext</code>: <TypeText>function</TypeText> can be
          invoked in its child component.
        </p>
        <p>
          <Note>Note:</Note> invoking <code>useFormContext</code> will give
          you all of the <code>useForm</code> hook functions.
        </p>
      </>
    ),
  },
  control: {
    title: "control",
    description: (
      <p>
        This object is made for React Hook Form's Controller component, which
        contains methods for registering controlled component into React Hook
        Form.
      </p>
    ),
  },
}
