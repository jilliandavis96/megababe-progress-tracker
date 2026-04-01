import ClassItem from "./ClassItem";

// ClassList receives the classes array and renders a ClassItem for each entry
function ClassList({ classes, deleteClass }) {
  return (
    <section className="class-list">
      <h2>Your Classes</h2>
      {/* Display total number of classes logged */}
      <p className="class-count">Total Classes: {classes.length}</p>

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