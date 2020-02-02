import * as React from "react"
import Footer from "./Footer"
import { useStateMachine } from "little-state-machine"
import nav from "../data/nav"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import styles from "./ResourcePage.module.css"
import containerStyle from "../styles/container.module.css"

export default function ResourcePage({ defaultLang }: { defaultLang: string }) {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  return (
    <div className={containerStyle.container}>
      <main className={styles.root}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          {nav[currentLanguage].resources}
        </h1>
        <p className={typographyStyles.subHeading}>
          {generic.blog[currentLanguage]}, {generic.video[currentLanguage]} &{" "}
          {generic.newsletter[currentLanguage]}
        </p>

        <h2 className={typographyStyles.title}>
          {generic.blog[currentLanguage]}
        </h2>

        <ul className={styles.contentList}>
          <li>
            <article className={styles.article}>
              <a
                href="https://blog.logrocket.com/react-hook-form-vs-formik-a-technical-and-performance-comparison/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  React Hook Form vs. Formik: A technical and performance
                  comparison
                </h3>
              </a>

              <p>
                <a
                  href="https://blog.logrocket.com/author/siegfriedgrimbeek/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Siegfried Grimbeek
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://itnext.io/is-react-hook-form-the-future-57c6f94a2665"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Is React Hook Form the future?</h3>
              </a>

              <p>
                <a
                  href="https://itnext.io/@gapur.kassym"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gapur Kassym
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://medium.com/@angular_evan/yup-you-should-use-react-hook-form-9864d8bc80ef"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Yup, you should use React Hook Form</h3>
              </a>

              <p>
                <a
                  href="https://medium.com/@angular_evan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Evan Williams
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://medium.com/better-programming/build-the-next-generation-of-forms-with-react-hooks-forms-b4f2039e51c1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Build the Next Generation of Forms With React Hooks Forms
                </h3>
              </a>

              <p>
                <a
                  href="https://medium.com/@riccardogiorato"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Riccardo Giorato
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://nordschool.com/react-hook-form/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Pain-Free Forms with React Hook Form</h3>
              </a>

              <p>
                <a
                  href="https://mansour.blog/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ahmed Mansour
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://cloud.tencent.com/developer/article/1520536"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React Hook form 表单校验</h3>
              </a>

              <p>
                <a
                  href="https://cloud.tencent.com/developer/user/5206638"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  我已经洗完澡了
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://medium.com/the-existing/%E0%B8%97%E0%B8%B3-multi-step-forms-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-react-hook-form-%E0%B9%81%E0%B8%A5%E0%B8%B0-usecontext-b3c2137836e2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>ทำ Multi-Step Forms ด้วย React Hook Form และ useContext</h3>
              </a>

              <p>
                <a
                  href="https://medium.com/@jidapapattanang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jidapa Pattanang
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://velog.io/@iamchanii/react-hooks-form-%EC%9D%84-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-54k0rrj6m7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>라이브러리 추천: react-hook-form</h3>
              </a>

              <p>
                <a
                  href="https://velog.io/@iamchanii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  이찬희
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://blog.logrocket.com/popular-react-hook-libraries/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Popular React Hook libraries</h3>
              </a>

              <p>
                <a
                  href="https://blog.logrocket.com/author/raphaelugwu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Raphael Ugwu
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://dev.to/bluebill1049/form-validation-with-hook-in-3kb-3d0l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React form validation with Hook in 5kB</h3>
              </a>

              <p>
                <a
                  href="https://dev.to/bluebill1049"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bill Luo
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://dev.to/bluebill1049/uncontrolled-form-for-react-2b3n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>⛓ Uncontrolled form validation with React</h3>
              </a>

              <p>
                <a
                  href="https://dev.to/bluebill1049"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bill Luo
                </a>
              </p>
            </article>
          </li>

          <li>
            <article className={styles.article}>
              <a
                href="https://qiita.com/yhosok/items/7dd1963ee7138ec0642f"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React Hook Form 入門</h3>
              </a>

              <p>
                <a
                  href="https://qiita.com/yhosok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yasunori Hosokawa
                </a>
              </p>
            </article>
          </li>

          <li>
            <article className={styles.article}>
              <a
                href="https://qiita.com/seira/items/63c801a9ed2d1b9eb401"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React-Hook-Formがイケてるって聞いたので触ってみた</h3>
              </a>

              <p>
                <a
                  href="https://qiita.com/seira"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  seira
                </a>
              </p>
            </article>
          </li>

          <li>
            <article className={styles.article}>
              <a
                href="https://qiita.com/akihiro_FE/items/b2295e6b98e8e8c881ed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React-hook-formで簡単にバリデーションフォーム作る</h3>
              </a>

              <p>
                <a
                  href="https://qiita.com/akihiro_FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  akihiro_FE
                </a>
              </p>
            </article>
          </li>
        </ul>

        <h2 className={typographyStyles.title}>
          {generic.newsletter[currentLanguage]}
        </h2>

        <ul className={styles.contentList}>
          <li>
            <article className={styles.article}>
              <a
                href="https://zerotomastery.io/blog/web-developer-monthly-october-2019/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Zero to Mastery</h3>
                <p>
                  Forms with React just got simpler with React Hook Form. Make
                  sure you scroll to the bottom to see code comparison with the
                  alternatives. Really neat!
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://react.statuscode.com/issues/159"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React Status</h3>
                <p>
                  It’s not just an interesting project, but it has one of the
                  best project homepages I’ve seen too, complete with code
                  comparisons with similar libraries. GitHub repo.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://javascriptweekly.com/issues/458"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>JavaScript Weekly</h3>
                <p>
                  Performant, flexible and extensible forms with easy to use for
                  validation.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="http://reactjsnewsletter.com/issues/179#start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React.js Newsletter</h3>
                <p>
                  It’s not just an interesting project, but it has one of the
                  best project homepages I’ve seen too, complete with code
                  comparisons with similar libraries. GitHub repo.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://us15.campaign-archive.com/?u=b015626aa6028495fe77c75ea&id=df27ee2eff"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>FullStack Bulletin Newsletter</h3>
                <p>
                  A performant, flexible and extensible React (and React
                  Native!) forms library with easy to use for validation.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://syndicode.com/2019/10/30/monthly-most-popular-js-repositories-evolve-and-prosper/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Monthly most popular JavaScript repositories</h3>
                <p>
                  React Hook Form stands for React hooks for forms validation.
                  Performant, flexible and extensible forms with easy to use for
                  validation.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="http://ruanyifeng.com/blog/2019/11/weekly-issue-82.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>科技爱好者周刊：第 82 期</h3>
                <p>
                  这是一个 React 表单库，基于 React
                  Hooks，看上去代码相当简洁，star
                  也很高，也许以后可以摆脱那些笨重的表单组件了。
                </p>
              </a>
            </article>
          </li>
        </ul>

        <h2 className={typographyStyles.title}>
          {generic.video[currentLanguage]}
        </h2>
        <ul className={styles.contentList}>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=-mFXqOaqgZk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>React Hook Form - custom hook for forms validation.</h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/channel/UC9qgXurGpQzePCx928oyIZg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bill Luo
                </a>
              </p>
              <p>
                In this video tutorial, I am demonstrating how you can use
                react-hook-form to easily validate your forms.
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=bU_eq8qyjic&t=38s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>The best way to create forms in React</h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/user/satansdeer1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maksim Ivanov
                </a>
              </p>
              <p>How to create forms in React.</p>
              <p>
                Right now the best way to create forms in React is to use React
                Form Hook library.
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://dev.to/bettercodingacademy/i-m-a-professional-react-developer-and-here-s-how-i-build-a-production-ready-react-node-js-app-using-typescript-and-graphql-ga8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Build a production-ready React/Node.js app using TypeScript
                  and GraphQL (React Hook Form).
                </h3>
              </a>
              <p>
                <a
                  href="https://dev.to/bettercodingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lucas Chen
                </a>
              </p>
            </article>
          </li>
          <li>
            <article className={styles.article}>
              <a
                href="https://www.youtube.com/watch?v=lHclVxcborY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Does this library make Redux Form obsolete? | React Hook Form
                  Tutorial | React Tutorials
                </h3>
              </a>
              <p>
                <a
                  href="https://www.youtube.com/channel/UCTD_PLq3KAUwkIIs9fk3pAA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Better Coding Academy
                </a>
              </p>
            </article>
          </li>
        </ul>

        <Footer currentLanguage={currentLanguage} />
      </main>
    </div>
  )
}
