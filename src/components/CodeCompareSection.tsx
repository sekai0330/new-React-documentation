import * as React from "react"
import styled from "styled-components"
import { Title, H1 } from "../styles/typography"
import formikCode from "./codeExamples/formikCode"
import reactHookFormCode from "./codeExamples/reactHookFormCode"
import reduxFormCode from "./codeExamples/reduxFormCode"
import { CenterContent } from "../styles/containers"
import CodeArea from "./CodeArea"

const GridView = styled.section`
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 40px;
  }
`

export default function CodeCompareSection() {
  return (
    <div
      style={{
        marginBottom: 40,
      }}
    >
      <CenterContent>
        <H1>
          <code>{`</>`}</code> Library Code Comparison
        </H1>

        <p>
          Reducing the amount of code that you have to write is one of the
          primary goals for React Hook Form. To illustrate that, let's look at a
          very simple form of validation among some of the most popular form
          validation libraries.
        </p>
      </CenterContent>

      <GridView
        style={{
          marginTop: 20,
        }}
      >
        <section>
          <Title>Formik</Title>
          <CodeArea rawData={formikCode} withOutCopy />
        </section>

        <section>
          <Title>React Hook Form</Title>
          <CodeArea rawData={reactHookFormCode} withOutCopy />
        </section>

        <section>
          <Title>Redux Form</Title>
          <CodeArea rawData={reduxFormCode} withOutCopy />
        </section>
      </GridView>
    </div>
  )
}
