import TaskItem from "../TaskItem/TaskItem";

const TasksList = ({deleteTask, tasks, modal, toggleTask}) => {
  const listItems = (tasks || []).map((task) => (
    <TaskItem 
      id={task.id}
      key={task.id}
      title={task.title}
      completed={task.completed}
      categories={task.categories}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
      modal={modal}
    />
  ));

  return (
    <>
      {tasks.length === 0 ? (
        <p>К сожалению на данный момент нет задач</p>
      ) : (
        <ul>{listItems}</ul>
      )}
    </>
  );
}

export default TasksList;
