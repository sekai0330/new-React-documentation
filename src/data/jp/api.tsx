import code from "../../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../../styles/link"
import { CodeBlock, Note, Title, TypeText } from "../../styles/typography"
import { CodeAsLink } from "../../components/ApiPage"
import colors from "../../styles/colors"
import Popup from "../../components/Popup"
import generic from "../generic"
import CodeArea from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"

export default {
  title: "API ドキュメント",
  header: {
    description:
      "React Hook Form は API をシンプルにすることにより、最高な DX を提供することに焦点を当てています。",
  },
  useForm: {
    title: "useForm",
    intro: (
      <>
        <code>useForm</code>{" "}
        を呼び出すことにより、次のメソッドを受け取ることができます。{" "}
      </>
    ),
    description: (
      <p>
        <code>useForm</code> は<b>省略可能</b>な引数もあります。
        下記の例は、全てのオプションのデフォルト値を示します。
      </p>
    ),
    validateCriteriaMode: (
      <>
        <p>
          デフォルトの設定である <code>firstErrorDetected</code>{" "}
          は、全てのフィールドのバリデーションを行い、最初に発生したエラーを収集します。
        </p>
        <p>
          このオプションを <code>all</code>{" "}
          に設定すると、全てのフィールドのバリデーションが実行され、
          発生した全てのエラーが収集されます。
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        <code>submit</code> イベントからバリデーションがトリガーされ、
        無効な入力は <code>onChange</code>{" "}
        イベントリスナーをアタッチして再度バリデーションを行います。
      </>
    ),
    validateOnBlur: (
      <>
        <code>blur</code> イベントからバリデーションがトリガーされます。
      </>
    ),
    validateOnChange: (
      <>
        入力の度に <code>change</code>{" "}
        イベントからバリデーションがトリガーされ、複数の再レンダリングが行われます。
        非推奨: これをパフォーマンスの悪い習慣と考えてください。
      </>
    ),
    defaultValues: goToSection => (
      <>
        <p>
          <code>defaultValue/defaultChecked</code> を使用して input
          のデフォルト値を設定するか{" "}
          <Link href="https://reactjs.org/docs/uncontrolled-components.html">
            (詳細については React ドキュメントを参照)
          </Link>{" "}
          、<code>defaultValues</code>{" "}
          を省略可能な引数として渡してフォーム全体のデフォルト値を設定することができます。
        </p>

        <p>
          <Note>注意：</Note> <code>defaultValues</code> で定義された値は{" "}
          <code>defaultValue</code> として{" "}
          <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
          に注入されます。
        </p>

        <p>
          <Note>注意：</Note> 手動で <code>register</code>{" "}
          を適用したフィールドでは React Hook Form に <code>ref</code>{" "}
          を提供しないため、 手動で登録した input (例:{" "}
          <code>{`register({ name: 'test' })`}</code>) に{" "}
          <code>defaultValues</code> は自動設定されません。
        </p>
      </>
    ),
    validationSchema: goToSection => (
      <p>
        スキーマレベルで <code>Yup</code>{" "}
        を使用してフォームバリデーションルールを適用します。{" "}
        <CodeAsLink onClick={() => goToSection("ValidationSchema")}>
          validationSchema
        </CodeAsLink>{" "}
        セクションを参照してください。
      </p>
    ),
    reValidateMode: (
      <p>
        このオプションを使用すると、エラーのある入力が再度バリデーションされるタイミングを設定することができます。{" "}
        (デフォルトでは、入力変更時にバリデーションがトリガーされます。){" "}
        <Popup />
      </p>
    ),
    validationFields: (
      <p>
        フィールドの配列を指定すると、含まれているフィールドのみがバリデーションが行われます。
        このオプションは、バリデーションが必要なフィールドを切り替えたい時に便利です。
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          デフォルトでは、ユーザーがフォームを送信してそのフォームにエラーが含まれている時、
          エラーのある最初のフィールドがフォーカスされます。
        </p>

        <p>
          <Note>注意：</Note> <code>ref</code>{" "}
          を持つ登録したフィールドのみが機能します。 手動で登録した input
          では機能しません。例：{" "}
          <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: goToSection => (
      <p>
        このオプションを <code>true</code>{" "}
        に設定すると、ブラウザーネイティブバリデーションが有効になります。
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          ビルトインブラウザーバリデーションの詳細を確認
        </a>
        できます。詳細と例については{" "}
        <CodeAsLink onClick={() => goToSection("nativeValidation")}>
          nativeValidation
        </CodeAsLink>{" "}
        セクションを参照してください。
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          このメソッドでは、単一の input または input の配列に{" "}
          <code>unregister</code> を適用することができます。 これは、{" "}
          <code>useEffect</code> でカスタム登録として input を登録 (
          <code>register</code>) し、
          コンポーネントのアンマウント後に登録を解除する場合に便利です。
        </p>
        <p>
          <Note>注意：</Note> input を登録解除 (<code>unregister</code>)
          すると、 その値は送信されたフォームデータに含まれなくなります。
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          このメソッドを使用すると、input/select の <code>Ref</code>{" "}
          とバリデーションルールを React Hook Form に登録 (<code>register</code>
          ) することができます。
        </p>
        <p>
          バリデーションルールは全て HTML
          標準に基づいており、カスタムバリデーションも可能です。
        </p>
        <p>
          <Note>重要：</Note> <code>name</code> 属性は<b>必須</b>かつ
          <b>ユニーク</b>です。 input の name
          属性はドット記法およびブラケット記法もサポートしているため、
          ネストされたフォームフィールドを簡単に作成することができます。例は下記の通りです：
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
        <code>arrays/array</code> フィールドを使用する場合、input の name 属性を{" "}
        <code>name[index]</code> のように割り当てることができます。
        <Link
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          フィールド配列の例をご覧ください
        </Link>
        。
      </p>
    ),
    example: "フォームの送信結果",
    selectHelp:
      "登録オプションを選択すると、下記の API テーブルが更新されます。",
    options: {
      title: "登録オプション",
      registerWithValidation: "バリデーションのみで登録",
      registerWithValidationMessage: "バリデーションとエラーメッセージで登録",
      note: goToSection => (
        <>
          <Title>カスタム登録</Title>
          <p>
            また、input を手動で登録 (manual <code>register</code>)
            することもできます。 これは、カスタムコンポーネントを操作していて{" "}
            <code>Ref</code> にアクセスできない場合に便利です。 React Native や{" "}
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>{" "}
            のようなカスタムコンポーネントを使用している場合がこれに該当します。
          </p>

          <p>
            カスタム登録を使用すると、 input の ref は登録されていないため、{" "}
            <CodeAsLink onClick={() => goToSection("setValue")}>
              setValue
            </CodeAsLink>{" "}
            で入力値を更新する必要があります。
          </p>

          <p>
            <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
          </p>

          <p>
            <Note>注意：</Note> 値の更新中に、カスタム登録した input
            で再レンダリングをトリガーしたい場合は、 登録した input に type
            属性を指定する必要があります。
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          Boolean の値。true
          の場合、フォームを送信する前に入力値が必須であることを示します。
          <code>errors</code>{" "}
          オブジェクトにエラーメッセージを返す文字列を割り当てることができます。
        </>
      ),
      maxLength: "input が受け付ける最大文字数。",
      minLength: "input が取りうる妥当と判断される最小文字数。",
      max: "input が受け付ける最大数。",
      min: "input が取りうる妥当と判断される最小数。",
      pattern: "input の内容が一致する必要がある正規表現。",
      validate: `引数として、単一のバリデーションを行うためにはコールバック関数を渡すことができ、複数のバリデーションを行うためにはコールバック関数のオブジェクトを渡すことができます。 (例を参照)`,
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>
          このオブジェクトには、フォームの状態に関する情報が含まれています。
        </p>

        <p>
          <Note>Important:</Note> <code>formState</code> is wrapped with{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>{" "}
          to improve render performance, so make you have invoke/read it before
          <code>render</code> in order to enable the state update.
        </p>
      </>
    ),
    dirty: "ユーザが入力操作した後 true に設定します。",
    isSubmitted: "ユーザーがフォームを送信した後 true に設定します。",
    touched: (
      <>
        操作された全ての input の <code>name</code> の配列。
      </>
    ),
    isSubmitting: (
      <>
        フォームの送信中は <code>true</code> に設定し、 フォームの送信後は{" "}
        <code>false</code> に設定します。
      </>
    ),
    submitCount: "フォームの送信回数。",
    isValid: "エラーがない場合は true に設定します。",
  },
  errors: {
    title: "errors",
    description: currentLanguage => (
      <>
        <p>
          オブジェクトには、各 input{" "}
          のフォームのエラーまたはエラーメッセージが含まれています。
        </p>
        <p>
          <Note>{generic.note[currentLanguage]}:</Note> V3 と V4 の違い:
        </p>

        <ul>
          <li>
            <p>V4: ネストされたオブジェクト</p>
            <p>
              <strong>理由:</strong> Optional chaining{" "}
              はコミュニティの間でより一般的になり、型のサポートが向上するため。
            </p>
            <p>
              <code>{`errors?.yourDetail?.firstName;`}</code>
            </p>
          </li>
          <li>
            <p>V3: フラットなオブジェクト</p>
            <p>
              <strong>理由:</strong> エラーがシンプルでアクセスしやすいため。
            </p>
            <p>
              <code>{`errors['yourDetail.firstName'];`}</code>
            </p>
          </li>
        </ul>
      </>
    ),
    types: (
      <>
        これは、単一のフィールドで複数のエラーを返す必要がある、
        パスワードのルールのような input のバリデーションに役立ちます。
        この機能を有効にするには、 <code>validateCriteriaMode: 'all'</code>{" "}
        を設定してください。
      </>
    ),
    message: `メッセージはデフォルトでは空文字です。ただし、バリデーションとエラーメッセージで登録するとエラーメッセージが返されます。`,
    ref: `input 要素の参照。`,
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>これは指定された input/inputs を監視し、その値を返します。</p>

        <ul>
          <li>
            <p>
              <code>defaultValue</code> が定義されていない場合、
              <code>watch</code> の初回のレンダリングは <code>register</code>{" "}
              の前に呼び出されるため <code>undefined</code> を返しますが、
              第2引数として <code>defaultValue</code>{" "}
              を設定して値を返すことができます。
            </p>
          </li>
          <li>
            <p>
              ただし、引数として <code>useForm</code> で{" "}
              <code>defaultValues</code> が初期化された場合、
              初回のレンダリングは <code>defaultValues</code>{" "}
              で指定された値を返します。
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          input の値を name から監視します (lodash の{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          関数に似ています)
        </>
      ),
      multiple: "複数の input を監視します",
      all: "全ての input を監視します",
      nest: "すべての入力を監視し、ネストされたオブジェクトを返します",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          この関数は、フォームバリデーションに成功するとフォームデータを渡します。
        </p>
        <p>
          <Note>注意：</Note> 非同期バリデーションのための <code>async</code>{" "}
          関数を渡すことができます。例：{" "}
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
          この関数は、フォーム内のフィールドの値とエラーをリセット (
          <code>reset</code>) します。 省略可能な引数として <code>values</code>{" "}
          を渡すと、 割り当てられたデフォルト値でフォームをリセットできます。
        </p>
        <p>
          <Note>注意：</Note> <code>ref</code> を公開しない{" "}
          <code>React-Select</code> のような制御されたコンポーネントの場合は、{" "}
          手動で入力値をリセットするために{" "}
          <CodeAsLink onClick={() => goToSection("setValue")}>
            setValue
          </CodeAsLink>{" "}
          を使用するか、{" "}
          <CodeAsLink onClick={() => goToSection("Controller")}>
            Controller
          </CodeAsLink>{" "}
          コンポーネントを使用して制御されたコンポーネントをラップする必要があります。
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: <p>単一または複数の input のエラーを手動で設定できます。</p>,
  },
  clearError: {
    title: "clearError",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: 全てのエラーをリセット
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: 単一のエラーをリセット
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: 複数のエラーをリセット
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
          この関数を使用すると、input/select の値を動的に設定できます。 setValue
          は不要な再レンダリングを避けようとしますが、
          以下の条件でのみ再レンダリングをトリガーします。
        </p>
        <ul>
          <li>
            <p>値の更新によってエラーがトリガーされるとき</p>
          </li>
          <li>
            <p>値の更新によってエラーが修正されるとき</p>
          </li>
          <li>
            <p>
              setValue が初めて実行され、 formState の <code>dirty</code> が
              true に設定されたとき
            </p>
          </li>
          <li>
            <p>
              setValue が実行され、 formState の <code>touched</code>{" "}
              が更新されたとき
            </p>
          </li>
        </ul>
        <p>
          <Note>注意：</Note> このメソッドを呼び出すことで、
          <code>formState</code> は input の <code>name</code> を{" "}
          <code>touched</code> にプッシュします。
        </p>
        <p>
          <code>shouldValidate</code> を <code>true</code> に設定すると、
          フィールドのバリデーションがトリガーされます。 例：{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>この関数は、フォーム全体のデータを返します。</p>

        <ul>
          <li>
            <p>
              デフォルトでは、<code>getValues()</code>{" "}
              はフォームデータをフラットな構造で返します。 例：{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </p>
          </li>
          <li>
            <p>
              定義されたフォームフィールドで、
              <code>getValues({`{ nest: true }`})</code> は input の{" "}
              <code>name</code>{" "}
              属性に基づいてネストされた構造でデータを返します。 例：{" "}
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
        <p>フォームで input/select のバリデーションを手動でトリガーします。</p>
        <p>
          <Note>注意：</Note> バリデーションが失敗すると、<code>errors</code>{" "}
          オブジェクトが更新されます。
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "validationSchema",
    description: (
      <p>
        外部バリデーションスキーマでバリデーションルールを一元管理したい場合は、
        省略可能な引数として <code>useForm</code> に{" "}
        <code>validationSchema</code> を適用できます。 React Hook Form
        は現在、オブジェクトスキーマバリデーションで{" "}
        <Link
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </Link>{" "}
        をサポートしています。
      </p>
    ),
  },
  Controller: {
    title: "Controller",
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>✓</td>
          <td>input のユニークな name 。</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <TypeText>React.ElementType | string</TypeText>
          </td>
          <td>✓</td>
          <td>
            制御されたコンポーネント。 例: <code>as="input"</code> または{" "}
            <code>{`as={<TextInput />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <TypeText>Object</TypeText>
          </td>
          <td>✓</td>
          <td>
            <code>control</code> オブジェクトは <code>useForm</code>{" "}
            から呼び出されます。 ただし、 FormContext
            を使用している場合は省略できます。
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <TypeText>any</TypeText>
          </td>
          <td></td>
          <td>
            非制御コンポーネントの <code>defaultValue</code> と同じですが、{" "}
            <code>boolean</code> 値を指定すると、チェックボックスの input
            として扱われます。
            <p>
              <Note>注意:</Note> <code>useForm</code> で{" "}
              <code>defaultValue</code> または <code>defaultValues</code>{" "}
              のどちらかを指定する必要があります。
            </p>
            <p>
              <Note>注意:</Note> 指定した場合、これは <code>useForm</code> の{" "}
              <code>defaultValue</code> よりも優先されます。
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <TypeText>Object</TypeText>
          </td>
          <td></td>
          <td>
            <code>register</code> によるバリデーションルール。
          </td>
        </tr>
        <tr>
          <td>
            <code>onChange</code>
          </td>
          <td>
            <TypeText>(args: any) => any</TypeText>
          </td>
          <td></td>
          <td>
            この <code>onChange</code> prop
            を使用すると、戻り値をカスタマイズすることができます。
            <br />
            例： <code>{`onChange={{(data) => data.value}}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onChangeName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td></td>
          <td>
            この prop
            を使用すると、特定のイベント名をターゲットにすることができます。
            例えば、 <code>onChange</code> イベントが <code>onTextChange</code>{" "}
            と命名されている場合。
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlurName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td></td>
          <td>
            この prop
            を使用すると、特定のイベント名をターゲットにすることができます。
            例えば、 <code>onBlur</code> イベントが <code>onTextBlur</code>{" "}
            と命名されている場合。
          </td>
        </tr>
        <tr>
          <td>
            <code>valueName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td></td>
          <td>
            この prop を使用すると、<code>value</code> prop をオーバーライドし、
            <code>value</code> prop
            を使用しない他のコンポーネントをサポートできます。 例えば、{" "}
            <code>checked</code>, <code>selected</code> 等...
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          React Hook Form は、非制御コンポーネントとネイティブ HTML input{" "}
          をサポートしていますが、{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JedWatson/react-select"
          >
            React-Select
          </a>{" "}
          や{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ant-design/ant-design"
          >
            AntD
          </a>{" "}
          、{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          などの外部の制御された UI{" "}
          コンポーネントライブラリと組み合わせての使用​​を避けることは難しいです。
          このラッパーコンポーネントにより、制御されたコンポーネントと組み合わせて簡単に使用​​できるようになります。
        </p>
        <p>
          Controllerコンポーネントへ渡す全ての props は、
          <code>as</code> prop で指定した Component インスタンスに転送されます。
          つまり、<code>label</code> prop を必要とするカスタム{" "}
          <code>Switch</code> コンポーネントがあるとします。 この{" "}
          <code>label</code> prop を Controller{" "}
          コンポーネントに直接渡すことができます。
          <code>name</code> prop{" "}
          は、主に後でフォームから値にアクセスするために使用されます。
        </p>

        <p>
          <code>defaultValue</code> prop を使用する場合、
          <code>useForm</code> で設定した <code>defaultValues</code>{" "}
          の値より優先されます。
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
    introduction: (
      <p>
        フォームコンテキストは、コンポーネントツリーに深くネストされた input
        があり、 メソッドを <code>props</code>{" "}
        として深く渡すことが苦痛になる場合の問題を解決することを目的としています。
      </p>
    ),
    description: (
      <>
        <p>
          フォームが <code>FormContext</code> でラップされると、
          ラップされた子コンポーネントで <code>useFormContext</code> を使用して{" "}
          <TypeText>function</TypeText> を呼び出すことができます。
        </p>
        <p>
          <Note>注意：</Note> <code>useFormContext</code> を呼び出すと全ての{" "}
          <code>useForm</code> フック関数が得られます。
        </p>
      </>
    ),
  },
  control: {
    title: "control",
    description: (
      <p>
        このオブジェクトは、 React Hook Form の Controller{" "}
        コンポーネント用に作成され、 React Hook Form{" "}
        に制御されたコンポーネントを登録するためのメソッドが含まれています。
      </p>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>
        関連する input{" "}
        のエラーメッセージを表示するためのシンプルなコンポーネント。
      </p>
    ),
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>✓</td>
          <td>関連するフィールド名</td>
        </tr>
        <tr>
          <td>
            <code>errors</code>
          </td>
          <td>
            <TypeText>object</TypeText>
          </td>
          <td>✓</td>
          <td>
            React Hook Form の <code>errors</code> オブジェクト
          </td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <TypeText>React.ElementType | string</TypeText>
          </td>
          <td></td>
          <td>
            ラッパーコンポーネント、または HTML タグ。 例:{" "}
            <code>as="span"</code> または <code>{`as={<Text />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>children</code>
          </td>
          <td>
            <TypeText>
              ({`{ message: string, messages: string[]}`}) => any
            </TypeText>
          </td>
          <td></td>
          <td>
            これは、単一または複数のエラーメッセージをレンダリングするための{" "}
            <a
              href="https://reactjs.org/docs/render-props.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              render prop
            </a>{" "}
            です。
          </td>
        </tr>
      </tbody>
    ),
  },
  NativeValidation: {
    title: "Browser built-in validation",
    description: (
      <p>
        下記の例は、ブラウザバリデーションを活用する方法を示しています。
        <code>nativeValidation</code> を <code>true</code> に設定するだけで、
        残りの構文は標準のバリデーションと同じになります。
      </p>
    ),
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          フィールド配列（動的な input）を操作するためのカスタムフック。
          このフックは、次のオブジェクトと関数を提供します。
        </p>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <Note>注意:</Note> <code>useForm</code> フックで{" "}
          <code>defaultValues</code> を指定することにより、<code>fields</code>{" "}
          に格納することができます。
        </p>

        <p>
          <Note>重要:</Note> <code>fields</code> オブジェクトから{" "}
          <code>id</code> をコンポーネントの <code>key</code>{" "}
          に割り当てていることを確認してください。
        </p>

        <p>
          <Note>重要:</Note> due to ref callback issue, for{" "}
          <code>register</code>
          without any validation, please make sure to pass empty object as
          payload. eg: <code>{`ref={register({})}`}</code>
        </p>
      </>
    ),
    table: (
      <>
        <tr>
          <td>
            <code>fields</code>
          </td>
          <td>
            <TypeText>object & {`{ id: string }`}</TypeText>
          </td>
          <td>
            このオブジェクトは、input
            をマップおよびレンダリングするための信頼できる情報源です。
            <p>
              <Note>重要: </Note> 各 input は制御することができないため、{" "}
              マップされたコンポーネントには <code>id</code> が必須です。
              これは、React{" "}
              が変更、追加もしくは削除されたのかを識別するのに役立ちます。
            </p>
            <p>
              eg: <code>{`{fields.map(d => <input key={d.id} />)}`}</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>append</code>
          </td>
          <td>
            <code>
              <TypeText>(obj: any) => void</TypeText>
            </code>
          </td>
          <td>フィールドの最後に input を追加します。</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code>
              <TypeText>(obj: any) => void</TypeText>
            </code>
          </td>
          <td>フィールドの先頭に input を追加します。</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code>
              <TypeText>(index: number, value: any) => void</TypeText>
            </code>
          </td>
          <td>特定の位置に input を挿入します。</td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code>
              <TypeText>(from: number, to: number) => void</TypeText>
            </code>
          </td>
          <td>input の位置を入れ替えます。</td>
        </tr>
        <tr>
          <td>
            <code>move</code>
          </td>
          <td>
            <code>
              <TypeText>(from: number, to: number) => void</TypeText>
            </code>
          </td>
          <td>
            input を別の位置に移動します。
            <p>
              <Note>注意:</Note> <code>move</code> と <code>swap</code>{" "}
              の違いは、
              <code>move</code> を呼び出し続けると input{" "}
              が円を描いて押し込まれるのに対して、
              <code>swap</code> は2つの input の位置を変更するだけです。
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code>
              <TypeText>(index?: number) => void</TypeText>
            </code>
          </td>
          <td>
            特定の位置の input を削除します。引数で index を渡さない場合は全ての{" "}
            input を削除します。
          </td>
        </tr>
      </>
    ),
  },
}
