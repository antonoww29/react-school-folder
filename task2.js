// Task2.js
export default function Task2({ firstName, lastName, title, image, children }) {
  return (
    <header id="user" className="card">
      <h2 className="name">{firstName} {lastName}</h2>
      <h3 className="title">{title}</h3>

      <div className="image">
        <img src={image} alt="example" className="avatar" />
      </div>

      <p className="children">{children}</p>
    </header>
  );
}
