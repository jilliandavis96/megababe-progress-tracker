import ClassItem from "./ClassItem";

function ClassList({ classes, deleteClass }) {
  return (
    <section className="class-list">
      <h2>Your Classes</h2>
      <p className="class-count">Total Classes: {classes.length}</p>
      {classes.length === 0 ? (
        <p className="empty-message">No classes logged yet. Add your first class!</p>
      ) : (
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