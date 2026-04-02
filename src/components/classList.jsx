import ClassItem from "./ClassItem";

// ClassList receives the classes array and renders a ClassItem for each entry
function ClassList({ classes, deleteClass }) {

  // Calculate the current streak by counting consecutive weeks with at least one class
  const getStreak = () => {
    if (classes.length === 0) return 0;

    // Get unique weeks from logged classes
    const weeks = new Set(
      classes.map((c) => {
        const date = new Date(c.date + "T00:00:00");
        const year = date.getFullYear();
        const week = Math.ceil(
          ((date - new Date(year, 0, 1)) / 86400000 + 1) / 7
        );
        return `${year}-${week}`;
      })
    );

    // Sort weeks newest first
    const sortedWeeks = Array.from(weeks).sort((a, b) => (a > b ? -1 : 1));

    // Count consecutive weeks starting from the most recent
    let streak = 1;
    for (let i = 0; i < sortedWeeks.length - 1; i++) {
      const [year1, week1] = sortedWeeks[i].split("-").map(Number);
      const [year2, week2] = sortedWeeks[i + 1].split("-").map(Number);
      const diff = (year1 - year2) * 52 + (week1 - week2);
      if (diff === 1) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  return (
    <section className="class-list">
      <h2>Your Classes</h2>
      {/* Display total number of classes logged */}
      <p className="class-count">Total Classes: {classes.length}</p>

      {/* Only show streak if at least one class is logged */}
      {classes.length > 0 && (
        <p className="streak">🔥 Current Streak: {getStreak()} week{getStreak() !== 1 ? "s" : ""}</p>
      )}

      {/* Conditionally render empty message or list of classes */}
      {classes.length === 0 ? (
        <p className="empty-message">No classes logged yet. Add your first class!</p>
      ) : (
        // Map through classes array and render a ClassItem for each one
        classes.map((classEntry) => (
          <ClassItem
            key={classEntry.id}
            classEntry={classEntry}
            deleteClass={deleteClass}
          />
        ))
      )}
    </section>
  );
}

export default ClassList;