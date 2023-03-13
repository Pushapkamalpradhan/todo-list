const TodoForm = () => {
  const onFormSubmit = () => {};

  const onInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        plaeholder="Enter toto"
        className="input"
        onChange={onInputChange}
      />
    </form>
  );
};
export default TodoForm;
