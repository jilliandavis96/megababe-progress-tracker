// ClassItem represents a single logged class entry
function ClassItem({ classEntry, deleteClass }) {
  return (
    <div className="class-item">
      <div className="class-item-info">
        {/* Format the date to be human readable */}
        <p className="class-date">{new Date(classEntry.date + "T00:00:00").toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}</p>
        {/* Conditionally render note only if one was provided */}
        {classEntry.note && <p className="class-note">📝 {classEntry.note}</p>}
      </div>
      {/* Call deleteClass with this entry's id when delete button is clicked */}
      <button className="delete-btn" onClick={() => deleteClass(classEntry.id)}>
        Delete
      </button>
    </div>
  );
}

export default ClassItem;