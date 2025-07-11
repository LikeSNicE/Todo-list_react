import "./App.css";

// hooks 
import useModal from "./hooks/useModal";
import useTask from "./hooks/useTask";

// Components
import HeaderTop from "./components/HeaderTop/HeaderTop";
import Header from "./components/Header/Header";
import TasksList from "./components/TasksList/TasksList";
import BtnCreatingTask from "./components/BtnCreatingTask/BtnCreatingTask";
import SpinnerLoader from "./components/SpinnerLoader/SpinnerLoader";

// Мodal
import ModalAddTask from "./components/ModalAddTask/ModalAddTask";
import ModalEditingTaskTitle from "./components/ModalEditingTaskTitle/ModalEditingTaskTitle";
import ModalAddCategoryToTask from "./components/ModalAddCategoryToTask/ModalAddCategoryToTask";

// Context
import { LoadingProvider } from "./context/LoadingContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider } from "./context/ThemeContext";
import { CategoryProvider } from "./context/CategoryContext";


function App() {
  return (
    <>
      <ThemeProvider>
        <LoadingProvider>
          <FilterProvider>
            <CategoryProvider>
              <AppContent />
            </CategoryProvider>
            <SpinnerLoader />
          </FilterProvider>
        </LoadingProvider>
      </ThemeProvider>
    </>
  );
}

const AppContent = () => {
  const modal = useModal();
  const task = useTask();

  return (
    <div className="max-w-[1056px] mx-auto px-4">
      <HeaderTop />
      <Header />
      <TasksList
        modal={modal}
        tasks={task.tasks}
        deleteTask={task.deleteTask}
        toggleTask={task.updateFieldTask}
      />
      <BtnCreatingTask modal={modal} />

      {modal.activeModal === "modalAddTask" && (
        <ModalAddTask addTask={task.addTask} closeModal={modal.closeModal} />
      )}
      {modal.activeModal === "modalEditingTaskTitle" && (
        <ModalEditingTaskTitle
          task={task.getTask(modal.modalProps.id)}
          updateFieldTask={task.updateFieldTask}
          closeModal={modal.closeModal}
        />
      )}
      {modal.activeModal === "modalAddCategoryToTask" && (
        <ModalAddCategoryToTask
          task={task.getTask(modal.modalProps.id)}
          updateFieldTask={task.updateFieldTask}
          closeModal={modal.closeModal}
        />
      )}
    </div>
  );
};

export default App;
