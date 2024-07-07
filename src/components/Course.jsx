export default function Course({ courseName, desc = "Unknown",children }) {
  return (
    <div>
      <h2>Course name : {courseName}</h2>
      <p>{desc}</p>
      {children}
      <hr />
    </div>
  );
}
