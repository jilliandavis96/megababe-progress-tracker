import { useState } from "react";

// ClassForm handles user input for logging a new class
function ClassForm({ addClass }) {
  // formData holds both the date and optional note in one state object
  const [formData, setFormData] = useState({
    date: "",
    note: "",
  });

  // error state shows a message if the user tries to submit without a date
  const [error, setError] = useState("");

  // handleChange updates the correct field in formData using the input's name attribute
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that date is not empty before submitting
    if (!formData.date) {
      setError("Please select a date.");
      return;
    }

    // Pass the new class up to App via the addClass prop
    addClass({
      id: Date.now(),
      date: formData.date,
      note: formData.note,
    });

    // Reset the form after successful submission
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
        {/* Conditionally render error message if validation fails */}
        {error && <p className="error">{error}</p>}
        <button type="submit">Log Class</button>
      </form>
    </section>
  );
}

export default ClassForm;