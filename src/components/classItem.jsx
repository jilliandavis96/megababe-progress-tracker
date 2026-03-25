function ClassItem({ classEntry, deleteClass }) {
  return (
    <div className="class-item">
      <div className="class-item-info">
        <p className="class-date">{new Date(classEntry.date + "T00:00:00").toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}</p>
        {classEntry.note && <p className="class-note">📝 {classEntry.note}</p>}
      </div>
      <button className="delete-btn" onClick={() => deleteClass(classEntry.id)}>
        Delete
      </button>
    </div>
  );
}

export default ClassItem;