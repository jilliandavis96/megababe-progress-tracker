import Button from "./Button";

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
      {/* Reusable Button component handles the delete action */}
      <Button text="Delete" onClick={() => deleteClass(classEntry.id)} className="delete-btn" />
    </div>
  );
}

export default ClassItem;