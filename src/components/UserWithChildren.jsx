function UserWithChildren(props) {
  return (
    <div>
      <h2>Ime: {props.ime}</h2>
      <h3>Godine: {props.godine}</h3>
      <div>{props.children}</div>
    </div>
  );
}
export default UserWithChildren;
