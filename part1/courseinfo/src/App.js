const Header = ({ course }) => (
  <>
    <h1>{course.name}</h1>
  </>
)

const Content = ({course}) => (
  <>
    {course.parts.map((part) => (<Part prop={part}/>))}
  </>
)

const Part = ({prop}) => (
  <>
  <p>{prop.name} {prop.exercises}</p>
  </>
)


const Total = ({sum}) => (
  <>
    <p>Number of Exercises {sum.parts.reduce((prev, curr) => prev + curr.exercises, 0)}</p>
  </>
)



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 5
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total sum={course}/>
    </div>
  )
}

export default App