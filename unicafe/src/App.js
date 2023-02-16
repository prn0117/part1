import { useState } from 'react'
const Header = () => {
  return (
    <>
      <h1>
        give feedback
      </h1>
    </>
  )
}
const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
        {/*Adding % sign in case of percentage statistic line */}
        <td>{props.text} {props.value} %</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{props.text} {props.value}</td>
    </tr>
  )
}
const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
  )
}
const StatisticsHead = () => {
  return (
    <>
      <h1>
        statistics
      </h1>

    </>
  )
}
const Statistics = ({ click }) => {
  const tot = click.good + click.neutral + click.bad;
  const avg = (click.good * 1 + click.bad * -1) / tot;
  const pos = click.good * (100 / tot);

  if (tot === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value={click.good} />
          <StatisticLine text="neutral" value={click.neutral} />
          <StatisticLine text="bad" value={click.bad} />
          <StatisticLine text="all" value={tot} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={pos} />
        </tbody>
      </table>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [click, setClick] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const goodClick = () => {
    setClick({ ...click, good: click.good + 1 });
  }

  const neutralClick = () => {
    setClick({ ...click, neutral: click.neutral + 1 });
  }

  const badClick = () => {
    setClick({ ...click, bad: click.bad + 1 });
  }

  return (
    <div>
      <Header></Header>
      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutralClick} text='neutral' />
      <Button handleClick={badClick} text='bad' />
      <StatisticsHead></StatisticsHead>
      <Statistics click={click} />
    </div>
  )
}

export default App