
const Header = ({name}) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.arr[0].name} exercises={props.arr[0].exercises} />
      <Part name={props.arr[1].name} exercises={props.arr[1].exercises} />
      <Part name={props.arr[2].name} exercises={props.arr[2].exercises} />
    </>
  )
}
const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.exercises}
      </p>
    </>
  )
}

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
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
      <Header name={course.name} />
      <Content arr={course.parts.slice()} />
      <Total exercises={course.parts.slice()[0].exercises + course.parts.slice()[1].exercises + course.parts.slice()[2].exercises} />
    </>
  )
}
export default App;
