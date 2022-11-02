import { Fragment } from "react";
import WorkoutCard from "../filter.component/workout-card.component/workout-card.component";
import "./workouts-list.component.scss";

const WorkoutsList = (musclegroups) => {
  const exercises = [
    [
      "Chest",
      [
        [1, "Bench Press"],
        [2, "Chest Flies"],
      ],
    ],

    [
      "Biceps",
      [
        [3, "Curls"],
        [4, "Chin ups"],
      ],
    ],
    [
      "Abs",
      [
        [5, "Sit Ups"],
        [6, "Crunch"],
      ],
    ],
    [
      "Shoulders",
      [
        [7, "Military Press"],
        [8, "Lateral Raise"],
      ],
    ],
    [
      "Triceps",
      [
        [9, "Military Push-Ups"],
        [10, "Tricep Extensions"],
      ],
    ],
    [
      "Quads",
      [
        [11, "Back Squat"],
        [12, "Bulgarian Split Squats"],
      ],
    ],
    [
      "Hamstrings",
      [
        [13, "Hamstring Curl"],
        [14, "Romanian Deadlift"],
      ],
    ],
    [
      "Calves",
      [
        [15, "Calve Raises"],
        [16, "Seated Calve Raises"],
      ],
    ],
  ];

  const fullList = (array) => {
    array.map(([musclegroup, [[id1, workout1], [id2, workout2]]]) => {
      const [muscleGroup, [ID1, workOut1], [ID2, workOut2]] = [
        musclegroup,
        [
          [id1, workout1],
          [id2, workout2],
        ],
      ];
      return (
        console.log(muscleGroup),
        console.log(ID1),
        console.log(workOut1),
        console.log(ID2),
        console.log(workOut2)
      );
    });
  };
  return (
    <div className="cards-container">
      {exercises.map(([muscleGroup, [[id1, workout1], [id2, workout2]]]) => (
        <Fragment>
          <WorkoutCard
            musclegroup={muscleGroup}
            id1={id1}
            workout1={workout1}
          ></WorkoutCard>
          <WorkoutCard
            musclegroup={muscleGroup}
            id2={id2}
            workout2={workout2}
          ></WorkoutCard>
        </Fragment>
      ))}
    </div>
  );
};

export default WorkoutsList;
