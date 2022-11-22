import Filter from "../filter/filter.component";
import "./build-page.styles.scss";
import WorkoutSelection from "../filter/workout-card/workout-card.component";

const BuildPage = () => {
  return (
    <div className="build-page">
      <Filter></Filter>
    </div>
  );
};

export default BuildPage;
