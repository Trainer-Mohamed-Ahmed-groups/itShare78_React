export function Test() {
  return <div>Test</div>;
}

export function Hello() {
  let username = "Ali",
    lastName = "Mohamed";
  return (
    <div className={`ok ${username}`}>
      Hello {username} {lastName}
    </div>
  );
}
