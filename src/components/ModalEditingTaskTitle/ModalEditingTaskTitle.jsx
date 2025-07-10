import { useState, useEffect } from "react";

import ModalLayout from "../ModalLayout/ModalLayout";

const ModalEditingTaskTitle = ({ closeModal, task, updateTaskField }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
    }
  }, [task]);

  if (!task) return null;

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSave = () => {
    if (title.trim() === "") return;
    updateTaskField(task.id, { title });
    closeModal();
  };

  return (
    <ModalLayout>
      <ModalLayout.Header>
        <h3 className="text-xl font-semibold text-gray-900">
          Редактировать название задачи
        </h3>
        <button className="cursor-pointer" onClick={() => closeModal()}>
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>
      </ModalLayout.Header>

      <ModalLayout.Body>
        <textarea
          value={title}
          onChange={handleChange}
          className="bg-white border-2 w-full px-4 py-2 min-h-[150px] rounded-lg"
          placeholder="Новое название задачи..."
        ></textarea>
      </ModalLayout.Body>

      <ModalLayout.Footer>
        <div className="flex justify-end gap-2">
          <button
            onClick={closeModal}
            className="w-[200px] bg-(--color-accent) text-white cursor-pointer p-2 rounded-lg"
          >
            Отмена
          </button>
          <button
            onClick={handleSave}
            className="w-[200px] bg-(--color-accent) text-white cursor-pointer p-2 rounded-lg"
          >
            Редактировать
          </button>
        </div>
      </ModalLayout.Footer>
    </ModalLayout>
  );
};

export default ModalEditingTaskTitle;
