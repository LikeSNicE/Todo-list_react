import { useCategory } from "../../context/CategoryContext";
import { useState } from "react";
import ModalLayout from "../ModalLayout/ModalLayout";

const ModalAddTask = ({ closeModal, addTask }) => {
  const [value, setValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const {categories} = useCategory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTask(value.trim(), [selectedCategory]);
      setValue("");
      closeModal();
    }
  };

  return (
    <ModalLayout>
      <ModalLayout.Header>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Добавить Задачу
        </h3>
        <button
          className="cursor-pointer dark:text-white"
          onClick={() => closeModal()}
        >
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>
      </ModalLayout.Header>

      <ModalLayout.Body>
        <h3 className="font-medium text-lg">Название задачи</h3>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-white border-2 rounded-lg w-full px-4 py-2 min-h-[150px] dark:bg-gray-900 dark:border-1"
          placeholder="Запишите про свою задачу..."
        ></textarea>

        <h3 className="font-medium text-lg">Категория задачи</h3>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 text-sm rounded-lg block p-2.5 w-full"
        >
          <option
            value=""
            className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
          >
            Выберите категорию
          </option>
          {categories.map((cat) => (
            <option
              key={cat.id}
              value={cat.name}
              className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
            >
              {cat.name}
            </option>
          ))}
        </select>
      </ModalLayout.Body>

      <ModalLayout.Footer>
        <button
          onClick={handleSubmit}
          className="bg-(--color-accent) text-white p-2 rounded-lg w-full cursor-pointer"
        >
          Добавить задачу
        </button>
      </ModalLayout.Footer>
    </ModalLayout>
  );
};

export default ModalAddTask;
