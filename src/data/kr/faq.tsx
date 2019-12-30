import * as React from "react"
import { Note } from "../../styles/typography"
import { CodeAsLink, Table, TableWrapper } from "../../components/ApiPage"
import colors from "../../styles/colors"

export default {
  title: "자주 묻는 질문",
  header: {
    title: "자주 묻는 질문",
    description: "자주 묻는 질문",
  },
  questions: [
    {
      title: "React Hook Form 의 퍼포먼스",
      description: (
        <p>
          이 커스텀 훅을 만들 때 가장 먼저 고려된 목표 중 하나가 퍼포먼스입니다.
          React Hook Form 은 비제어 컴포넌트를 활용하고 있기 때문에{" "}
          <code>ref</code> 에서 <code>register</code> 함수가 실행됩니다. 이러한
          접근 방식은 사용자가 타이핑하거나 값을 변경할 때 리랜더링이 일어나는
          양을 줄여줄 것입니다. 제어 컴포넌트가 아니기 때문에 페이지에
          컴포넌트가 마운트되는 속도도 훨씬 더 빠릅니다. 마운트되는 속도에 대해
          여러분이 참고하실 수 있도록 간단한 속도 비교 테스트를{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            target="_blank"
            rel="noopener noreferrer"
          >
            이 저장소에
          </a>{" "}
          올려 두었습니다.
        </p>
      ),
    },
    {
      title: "접근성 있는 입력 에러와 메세지를 어떻게 만드나요?",
      description: (
        <p>
          React Hook Form 은{" "}
          <a
            href="https://ko.reactjs.org/docs/uncontrolled-components.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            비제어 컴포넌트
          </a>
          를 기반으로 하고 있으므로, 접근성이 높은 커스텀 폼을 쉽게 만들 수
          있습니다.
        </p>
      ),
    },
    {
      title: "클래스 컴포넌트와 사용할 수 있나요?",
      description: (
        <>
          <p>
            아니오. 사용할 수 없습니다만, 클래스 컴포넌트를 감싸는 래퍼를 만들
            수는 있습니다.
          </p>

          <blockquote>
            여러분은 클래스 컴포넌트 안에서 훅을 사용할 수 없습니다. 하지만
            확실히 클래스 컴포넌트와 훅을 사용하는 함수 컴포넌트를 같은 트리
            안에서 섞어 사용할 수 있습니다. 컴포넌트가 클래스인지, 훅을 사용하는
            함수 컴포넌트인지는 개별 컴포넌트의 세부 구현에 불과합니다. 긴
            안목으로 보아 우리는 사람들이 훅을 우선적으로 고려하여 리액트
            컴포넌트를 작성하길 기대합니다.
          </blockquote>
        </>
      ),
    },
    {
      title: "폼을 어떻게 리셋하나요?",
      description: (
        <>
          <p>폼을 초기화하는데 두 가지 방법이 있습니다.</p>
          <ul>
            <li>
              <b>HTMLFormElement.reset()</b>
              <p>
                이 메서드는 폼의 리셋 버튼을 누르는 것과 똑같이 동작하지만,
                오로지 <code>input/select/checkbox</code> 값들만 초기화합니다.
              </p>
            </li>
            <li>
              <b>
                React Hook Form API: <code>reset()</code>
              </b>
              <p>
                React Hook Form 의 <code>reset</code> 메서드는 모든 필드 값을{" "}
                리셋하며, 또한 폼 안의 모든 <code>errors</code> 를 초기화합니다.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "어떻게 폼의 기본값을 설정하나요?",
      description: (
        <p>
          React Hook Form 은 비제어 컴포넌트를 활용합니다. 비제어 컴포넌트를
          사용하면 <code>defaultValue</code> 나 <code>defaultChecked</code> 값을
          개별 필드에 넣어 기본값을 설정할 수 있습니다. 하지만 훅에서 기본적으로
          손쉽게 모든 인풋의 기본값을 설정할 수 있는 방법을 제공합니다. 아래의
          예제를 보세요.
        </p>
      ),
    },
    {
      title: "ref 를 공유할 수 있나요?",
      description: (
        <p>
          React Hook Form 은 입력 값을 모으기 위해 <code>ref</code> 를 필요로
          합니다. 하지만 <code>ref</code> 를 다른 목적으로 (예: 해당 뷰로
          스크롤하기) 활용하고 싶을 수도 있습니다. 아래의 예제로 그 방법을
          확인해보세요.
        </p>
      ),
    },
    {
      title: "만약에 ref 에 접근할 수 없다면 어떻게 하죠?",
      description: (
        <>
          <p>
            사실 <code>ref</code> 없이 <code>register</code> 를 할 수 있습니다.
            수동으로 <code>setValue</code>, <code>setError</code> 그리고{" "}
            <code>triggerValidation</code> 를 사용하면 됩니다.
          </p>

          <p>
            <Note>참고:</Note> <code>ref</code> 가 등록되지 않았기 때문에, React
            Hook Form 은 인풋에 이벤트 리스너를 등록할 수 없을 겁니다. 따라서
            인풋 값과 에러를 수동으로 업데이트 해 주어야 합니다.
          </p>
        </>
      ),
    },
    {
      title: "브라우저 호환성은 어떤가요?",
      description: (
        <>
          <p>React Hook Form 은 모든 메이저 브라우저를 지원합니다.</p>

          <p>
            오래된 IE11 를 지원하려면, react-hook-form IE11 버전을 불러와서
            사용할 수 있습니다.
          </p>
        </>
      ),
    },
    {
      title: "왜 첫 번째 키 입력이 동작하지 않을까요?",
      description: (
        <>
          <p>
            <code>value</code> 대신에 <code>defaultValue</code> 를 사용하고
            있는지 다시 확인해주세요.
          </p>

          <p>
            React Hook Form 은 비제어 컴포넌트를 활용하기 때문에{" "}
            <code>onChange</code> 를 사용하여 <code>state</code> 를 바꾸고, 그
            값을 인풋의 <code>value</code> 에 반영해줄 필요가 없습니다. 따라서{" "}
            <code>value</code> 자체가 필요 없습니다. 사실 초기 값을 지정하고자
            할 때 <code>defaultValue</code> 만 넣어주면 됩니다.
          </p>
        </>
      ),
    },
    {
      title: "MutationObserver 때문에 테스트가 실패하는데요?",
      description: (
        <p>
          만약에 테스트하는데 어려움을 겪고 계시다면{" "}
          <code>MutationObserver</code> 때문입니다.{" "}
          <code>mutationobserver-shim</code> 패키지를 설치하고{" "}
          <a
            href="https://jestjs.io/docs/en/configuration"
            target="_blank"
            rel="noopener noreferrer"
          >
            setup.js 파일
          </a>
          에서 불러오세요.
        </p>
      ),
    },
    {
      title: "React Hook Form 을 Formik, Redux Form 과 비교한다면?",
      description: (
        <>
          <p>
            먼저, 모든 라이브러리들은 폼을 만드는 과정을 쉽고 좋게 만들겠다는
            공통의 문제를 해결하려고 합니다. 하지만 세 라이브러리는 약간
            근본적인 차이를 가지고 있고, react-hook-form 은 비제어 입력을
            기본으로 삼고 있습니다. 그리하여 여러분의 폼이 최대한의 퍼포먼스를
            내고 최소한의 리랜더링만 발생하도록 합니다. 그 위에 react-hook-form
            은 리액트 훅을 기반으로 만들어졌으며 훅으로 사용됩니다. 따라서
            별도의 컴포넌트를 불러올 필요가 없습니다. 아래에 더 자세한 차이점을
            표기했습니다.
          </p>

          <TableWrapper>
            <Table>
              <thead>
                <tr style={{ borderBottom: `1px solid ${colors.lightPink}` }}>
                  <th width={200} />
                  <th>
                    <p>React Hook Form</p>
                  </th>
                  <th>
                    <p>Formik</p>
                  </th>
                  <th>
                    <p>Redux Form</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>컴포넌트</b>
                  </td>
                  <td>
                    <a>
                      <a
                        href="https://ko.reactjs.org/docs/uncontrolled-components.html"
                        target="_blank"
                      >
                        비제어
                      </a>
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://ko.reactjs.org/docs/forms.html"
                      target="_blank"
                    >
                      제어
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://ko.reactjs.org/docs/forms.html"
                      target="_blank"
                    >
                      제어
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>랜더링</b>
                  </td>
                  <td>최소한의 리랜더링</td>
                  <td>인풋에 타이핑하면서 지역 상태가 변할떄마다 리랜더링</td>
                  <td>
                    인풋에 타이핑하면서 상태 관리 라이브러리(Redux)의 상태가
                    바뀔 때마다 리랜더링
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>API</b>
                  </td>
                  <td>훅</td>
                  <td>컴포넌트 (RenderProps, Form, Field) + 훅</td>
                  <td>컴포넌트 (RenderProps, Form, Field)</td>
                </tr>
                <tr>
                  <td>
                    <b>패키지 크기</b>
                  </td>
                  <td>
                    작음
                    <br />
                    <code>
                      react-hook-form@3.26.2
                      <br />
                      <Note />
                      <Note>5.3KB</Note>
                    </code>
                  </td>
                  <td>
                    중간
                    <br />
                    <code>
                      formik@2.0.1
                      <br />
                      <Note>14.4KB</Note>
                    </code>
                  </td>
                  <td>
                    큼
                    <br />
                    <code>
                      redux-form@8.2.6
                      <br />
                      <Note>27KB</Note>
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>유효성 검사</b>
                  </td>
                  <td>
                    내장됨 &{" "}
                    <a href="https://github.com/jquense/yup" target="_blank">
                      Yup
                    </a>
                  </td>
                  <td>
                    직접 만들어야 함 &{" "}
                    <a href="https://github.com/jquense/yup" target="_blank">
                      Yup
                    </a>
                  </td>
                  <td>직접 만들어야 함 & 플러그인</td>
                </tr>
                <tr>
                  <td>
                    <b>러닝 커브</b>
                  </td>
                  <td>낮음</td>
                  <td>중간</td>
                  <td>중간</td>
                </tr>
                <tr>
                  <td>
                    <b>현황</b>
                  </td>
                  <td>작은 커뮤니티: 새로운 라이브러리이며 성장 중</td>
                  <td>큰 커뮤니티: 커뮤니티 안에서 잘 정립된 폼 라이브러리</td>
                  <td>큰 커뮤니티: 커뮤니티 안에서 잘 정립된 폼 라이브러리</td>
                </tr>
              </tbody>
            </Table>
          </TableWrapper>
        </>
      ),
    },
    {
      title: "제어 컴포넌트와 조합할 수 있나요?",
      description: (
        <>
          <p>
            짧게 말씀드리면 <b>할 수 있습니다.</b>
          </p>
          <p>
            React-hook-form 은 사용자가 제어되는 폼을 만들도록 권장하진 않지만{" "}
            제어 컴포넌트와 쉽게 조합할 수 있습니다.
          </p>
          <p>
            그 방법은 <code>watch</code> API 를 사용하여 각 인풋 값의 변화를
            관찰하고 value prop 에 할당하는 것입니다.
          </p>
          <p>
            또는 감싸는 컴포넌트인{" "}
            <a href="https://www.react-hook-form.com/api#Controller">
              title="React Hook Form Controller Controller
            </a>{" "}
            을 사용하여 커스텀 레지스터를 관리 할 수 ​​있습니다.
          </p>
        </>
      ),
    },
    // translate please
    {
      title: "Testing React Hook Form",
      description: (
        <div>
          <ul>
            <li>
              <p>
                Why am I getting <code>act</code> warning?
              </p>

              <p>
                All validation methods in React Hook Form will be treated as
                async functions, so it's important to wrap <code>async</code>{" "}
                around your{" "}
                <CodeAsLink
                  href="https://reactjs.org/docs/test-utils.html#act"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  act
                </CodeAsLink>
                .
              </p>
            </li>
            <li>
              <p>Why input change is not fire event?</p>

              <p>
                React Hook Form using <code>input</code> event for input change,
                so to fix it. you can easily switch to{" "}
                <code>fireEvent.input</code> for react-testing-library
              </p>
            </li>
          </ul>
        </div>
      ),
    },
  ],
}
