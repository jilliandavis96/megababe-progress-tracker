// Reusable Button component used throughout the app
function Button({ text, onClick, type, className }) {
  return (
    <button type={type || "button"} onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default Button;