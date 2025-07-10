

const TaskItem = ({ id,title, deleteTask, modal, toggleTask, completed}) => {


  const handleToggleTaskCheckbox = (e) => {
    const checked = e.target.checked;
    toggleTask(id, {completed: checked})
    console.log(checked);
  }

  return (
    <div
      className="flex justify-between border-b py-2 
    fisrt:pt-2 
    last:border-none
    last:pb-2"
    >
      <div className="flex gap-4">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleTaskCheckbox}
        />
        <p
          className={
            completed ? "font-medium line-through" : "font-medium text-base"
          }
        >
          {title}
        </p>
      </div>
      <div className="flex gap-4">
        {completed ? (
          <></>
        ) : (
          <button
            className="cursor-pointer"
            type="button"
            onClick={() =>
              modal.openModal("modalEditingTaskTitle", {
                id,
              })
            }
          >
            <i className="fa-solid fa-pen"></i>
          </button>
        )}

        <button
          onClick={() => deleteTask(id)}
          className="cursor-pointer"
          type="button"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
