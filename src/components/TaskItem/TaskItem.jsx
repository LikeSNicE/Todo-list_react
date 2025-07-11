

const TaskItem = ({ id,title, deleteTask, modal, toggleTask, completed, categories}) => {


  const handleToggleTaskCheckbox = (e) => {
    const checked = e.target.checked;
    toggleTask(id, {completed: checked})
    console.log(checked);
  }

  return (
    <div className="my-2">
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

      <div className="flex flex-wrap gap-2 mt-2">
        {categories.map((cat) => (
          <span
            key={cat}
            className="dark:bg-white dark:text-gray-900 bg-gray-900 text-white rounded-full px-3 py-1 text-sm"
          >
            {cat}
          </span>
        ))}

        <button
          type="button"
          onClick={() => modal.openModal("modalAddCategoryToTask", { id })}
          className="ml-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
