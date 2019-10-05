import styled from "styled-components"
import colors from "./colors"
import breakpoints from "./breakpoints"

export const SubHeading = styled.p`
  font-size: 13px;
  padding: 0 20px;
  text-align: center;
  color: ${colors.lightPink};
  max-width: 330px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
    max-width: none;
  }
`

export const Heading = styled.h1`
  font-weight: 100;
  text-align: center;
  margin-bottom: 10px;

  @media ${breakpoints.fromMediumScreen} {
    font-size: 55px !important;
    margin-bottom: 10px;
    margin-top: 80px;
  }

  @media ${breakpoints.fromLargeScreen} {
    margin-top: 20px;
  }
`

const commonStyle = `
  font-size: 24px;
  display: inline-block;
  margin: 40px auto 40px;
  font-weight: 300;
  padding-bottom: 5px;
  border-bottom: 2px solid ${colors.secondary};

  @media (min-width: 768px) {
    font-size: 36px;
  }
`

export const H1 = styled.h1`
  ${commonStyle}
`

export const H2 = styled.h2`
  ${commonStyle}
`

export const QuestionTitle = styled.h2`
  @media ${breakpoints.fromMediumScreen} {
    padding-left: 10px;
    border-left: 5px solid ${colors.lightPink};
    line-height: 1;
  }
`

export const H5 = styled.h5`
  font-size: 18px;
  text-align: left;
  font-weight: 500;
  border-bottom: 1px solid ${colors.lightBlue};
  padding-bottom: 15px;
  margin: 50px 0 10px;

  & > code {
    font-size: 18px !important;
  }
`

export const HeadingWithTopMargin = styled(Heading)`
  @media (min-width: 768px) {
    margin-top: 30px;
  }
`

export const Title = styled.h2`
  text-align: center;
  font-weight: 200;
  margin-top: 10px;
  font-size: 1.1rem;
  overflow: hidden;
  margin-bottom: 30px;
  position: relative;
  line-height: 2;

  @media (min-width: 768px) {
    margin-top: 20px;
    font-size: 1.3rem;
    line-height: 1.5;
  }

  &:before,
  &:after {
    background-color: #4f6294;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  &:before {
    right: 0.5em;
    margin-left: -50%;
  }

  &:after {
    left: 0.5em;
    margin-right: -50%;
  }
`

export const Error = styled.p`
  font-size: 12px;
  color: ${colors.lightPink};
`

export const Note = styled.b`
  color: ${colors.lightPink};
`
