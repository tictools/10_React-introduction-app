import { Content } from "../Content";
import { Header } from "../Header";
import { Total } from "../Total";

const App = () => {
  const course = "Half Stack application development";

  const part_01 = {
    part: "Fundamentals of React",
    exercises: 10,
  };

  const part_02 = {
    part: "Using props to pass data",
    exercises: 7,
  };

  const part_03 = {
    part: "State of a component",
    exercises: 14,
  };

  const part_04 = {
    part: "State of a component",
    exercises: 14000,
  };

  const courseData = [part_01, part_02, part_03, part_04];

  return (
    <div>
      <Header course={course} />
      <Content courseData={courseData} />
      <Total
        exercises1={part_01.exercises}
        exercises2={part_02.exercises}
        exercises3={part_03.exercises}
      />
    </div>
  );
};

export default App;
