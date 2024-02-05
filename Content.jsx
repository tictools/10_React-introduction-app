import { Part } from "./Part";

export const Content = ({ courseData }) => {
  return (
    <>
      {courseData.map((course) => {
        const { part, exercises } = course;
        return <Part key={part} part={part} exercises={exercises} />;
      })}
    </>
  );
};
