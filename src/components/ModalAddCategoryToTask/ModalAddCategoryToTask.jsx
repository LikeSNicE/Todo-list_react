import { useState } from "react";
import ModalLayout from "../ModalLayout/ModalLayout";
import { useCategory } from "../../context/CategoryContext";

const ModalAddCategoryToTask = ({closeModal, task, updateFieldTask}) => {
  const {categories, addCategory} = useCategory();

  const [selected,setSelected] = useState(task.categories || []);
  const [newCategoryName, setNewCategoryName] = useState("");

    const toggleCategory = (name) => {
      setSelected((prev) =>
        prev.includes(name)
          ? prev.filter((cat) => cat !== name)
          : [...prev, name]
      );
    };

  
  const handleAddNewCategory = async () => {
    
    const trimmed = newCategoryName.trim();

    if(!trimmed || categories.find(cat => cat.name === trimmed)) return;

    try {
      const newCat = await addCategory(trimmed);
      console.log(newCat);
      setSelected(prev => [...prev, newCat])
      setNewCategoryName("");
    } catch (error) {
      console.error("Не удалось добавить категорию", error);
    }
  }

    const handleSubmit = () => {
      updateFieldTask(task.id, { categories: selected });
      closeModal();
    };

  return (
    <ModalLayout>
      <ModalLayout.Header>
        <h3 className="text-xl font-semibold dark:text-white">
          Категории задачи
        </h3>
        <button onClick={closeModal}>
          <i className="fa-solid fa-xmark fa-lg dark:text-white" />
        </button>
      </ModalLayout.Header>

      <ModalLayout.Body>
        <h4 className="font-medium text-lg mb-2">Выберите категории</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <label
              key={cat.name}
              className={`px-3 py-1 rounded-full cursor-pointer text-sm ${
                selected.includes(cat.name)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white"
              }`}
            >
              <input
                type="checkbox"
                checked={selected.includes(cat.name)}
                onChange={() => toggleCategory(cat.name)}
                className="hidden"
              />
              {cat.name}
            </label>
          ))}
        </div>

        <div className="mt-4">
          <label className="block text-sm mb-1">Новая категория:</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Введите название"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <button
              onClick={handleAddNewCategory}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Добавить
            </button>
          </div>
        </div>
      </ModalLayout.Body>

      <ModalLayout.Footer>
        <button
          onClick={handleSubmit}
          className="bg-(--color-accent) text-white w-full py-2 rounded-lg"
        >
          Сохранить
        </button>
      </ModalLayout.Footer>
    </ModalLayout>
  );
}

export default ModalAddCategoryToTask;
