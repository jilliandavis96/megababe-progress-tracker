import { useState } from "react";

function ClassForm({ addClass }) {
  const [formData, setFormData] = useState({
    date: "",
    note: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date) {
      setError("Please select a date.");
      return;
    }
    addClass({
      id: Date.now(),
      date: formData.date,
      note: formData.note,
    });
    setFormData({ date: "", note: "" });
    setError("");
  };

  return (
    <section className="class-form">
      <h2>Log a Class</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="note">Note (optional)</label>
        <input
          type="text"
          id="note"
          name="note"
          placeholder="How did it go?"
          value={formData.note}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Log Class</button>
      </form>
    </section>
  );
}

export default ClassForm;