const RatingCheckboxForm = ({
  showDifficultyRating,
  showFunRating,
  toggleShowFunRating,
  toggleShowDifficultyRating,
}) => {
  return (
    <div className="input-form">
      <label htmlFor="funRating">Show enjoyment
      <input
        onChange={toggleShowFunRating}
        type="checkbox"
        id="funRating"
        name="funRating"
        value="funRating"
        checked={showFunRating}
      />
      </label>
      <label htmlFor="difficultyRating">Show difficulty
      <input
        onChange={toggleShowDifficultyRating}
        type="checkbox"
        id="difficultyRating"
        name="difficultyRating"
        value="difficultyRating"
        checked={showDifficultyRating}
      />
      </label>
    </div>
  );
};

export default RatingCheckboxForm;
