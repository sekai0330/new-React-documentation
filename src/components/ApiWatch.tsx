import * as React from 'react'
import SyntaxHighlighterWithCopy from './SyntaxHighlighterWithCopy'
import watchCode from './codeExamples/watchCode'
import { CodeHeading, Table, TableWrapper, Type } from './ApiPage'

export default function ApiWatch({ tabIndex }: any) {
  return (
    <>
      <CodeHeading>
        <h2>
          watch: <Type>Function</Type>
        </h2>
      </CodeHeading>
      <p>
        This will watch specified input and return its value. first-time run <code>watch</code> will always return{' '}
        <code>undefined</code> because called before <code>render</code>, but you can set the default value as the second
        argument.
      </p>
      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>Type</th>
              <th
                style={{
                  minWidth: 300,
                }}
              >
                Description
              </th>
              <th>Example</th>
            </tr>
            <tr>
              <td>
                <Type>string</Type>
              </td>
              <td>Watch on individual input</td>
              <td>
                <code>const value = watch('inputName');</code>
              </td>
            </tr>
            <tr>
              <td>
                <Type>{`string[]`}</Type>
              </td>
              <td>Watch multiple inputs over the form</td>
              <td>
                <code>const values = watch(['inputName1', 'inputName2']);</code>
              </td>
            </tr>
            <tr>
              <td>
                <Type>undefined</Type>
              </td>
              <td>Watch every input fields in the form</td>
              <td>
                <code>const values = watch();</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
      <SyntaxHighlighterWithCopy tabIndex={tabIndex} rawData={watchCode} url="https://codesandbox.io/s/pp1l40q7wx" />

      <hr />
    </>
  )
}
