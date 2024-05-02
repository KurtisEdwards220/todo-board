function Board({ task, index, taskList, setTaskList }) {
  function handleDelete() {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => index === removeIndex)
    );
  }

  return (
    <>
      <div className="max-w-md rounded-xl flex flex-col items-center justify-center border text-center text-lg">
        <p>{task}</p>
        <button
          className="bg-red-500 text-white rounded py-1 px-2 mt-4 hover:opacity-70"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default Board;
