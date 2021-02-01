const RatingCheckboxForm = ({
  showDifficultyRating,
  showFunRating,
  toggleShowFunRating,
  toggleShowDifficultyRating,
}) => {
  return (
    <div className="inputForm">
      <label htmlFor="funRating">Fun rating</label>
      <input
        onChange={toggleShowFunRating}
        type="checkbox"
        id="funRating"
        name="funRating"
        value="funRating"
        checked={showFunRating}
      />
      <label htmlFor="difficultyRating">Difficulty rating</label>
      <input
        onChange={toggleShowDifficultyRating}
        type="checkbox"
        id="difficultyRating"
        name="difficultyRating"
        value="difficultyRating"
        checked={showDifficultyRating}
      />
    </div>
  );
};

export default RatingCheckboxForm;
