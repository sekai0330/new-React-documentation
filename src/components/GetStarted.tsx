import styled from "styled-components"
import CodeArea, { CopyIcon } from "./CodeArea"
import code from "./codeExamples/defaultExample"
import colors from "../styles/colors"
import * as React from "react"
import breakpoints from "../styles/breakpoints"
import getStarted from "../data/getStarted"
import generic from "../data/generic"
import copyClipBoard from "./utils/copyClipBoard"

export const InstallCode = styled.span`
  background: ${colors.buttonBlue} !important;
  padding: 13px 20px;
  border-radius: 4px;
  margin-top: 20px;
  display: block;
`

export const CopyButton = styled.button`
  display: none;
  background: ${colors.lightBlue};
  color: white;
  border-radius: 4px;
  font-size: 13px;
  float: right;
  text-transform: uppercase;
  border: 1px solid transparent;
  margin-top: -2px;
  cursor: pointer;

  &:hover {
    background: none;
    border: 1px solid ${colors.secondary};
    color: white;

    & span {
      background: ${colors.primary};
    }
  }

  @media ${breakpoints.fromMediumScreen} {
    display: inline-block;
  }
`

export default function GetStarted({
  quickStartRef,
  currentLanguage,
  getStarted,
}: {
  quickStartRef: any
  currentLanguage: string
  getStarted: any
}) {
  return (
    <>
      <h2 ref={quickStartRef}>{getStarted.install.linkTitle}</h2>
      <p>{getStarted.install.description}</p>

      <InstallCode>
        npm install react-hook-form
        <CopyButton
          onClick={() => {
            copyClipBoard("npm install react-hook-form")
            alert(generic.copied[currentLanguage])
          }}
        >
          <CopyIcon>
            <span />
          </CopyIcon>{" "}
          {generic.copy[currentLanguage]}
        </CopyButton>
      </InstallCode>

      <h2
        style={{
          marginTop: 50,
        }}
      >
        {getStarted.example.title}
      </h2>
      <p>{getStarted.example.description}</p>
      <CodeArea rawData={code} url="https://codesandbox.io/s/kw7z2q2n15" />
    </>
  )
}
