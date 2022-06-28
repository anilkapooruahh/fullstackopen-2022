import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (prop, setter) => {
    const handler = () => {
        setter(prop + 1)
    }

    return handler
  }

  const handleGoodClick = handleClick(good, setGood)
  const handleNeutalClick = handleClick(neutral, setNeutral)
  const handleBadClick = handleClick(bad, setBad)

  const calcAverage = () => (good - bad) / (good + bad  + neutral)

  const calcPositive = () => (good * 100) / (good + bad + neutral)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutalClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
      <Statistics good={good} bad={bad} neutral={neutral} average={calcAverage()} positive={calcPositive()}/>
    </div>
  )
}

const Statistics = ({good, neutral, bad, average, positive}) => {
  if (good + bad + neutral === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
        <table>
          <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value = {neutral}/>
          <StatisticLine text="bad" value = {bad}/>
          <StatisticLine text="average" value = {average}/>
          <StatisticLine text="positive" value = {positive}/>   
          </tbody>
        </table>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>
      {text} {value}
    </td>
  </tr>
)
export default App