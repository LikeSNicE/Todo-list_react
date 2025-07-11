import { useEffect, useState, useCallback } from "react";
import { useFilter } from "../context/FilterContext";
import { useLoading } from "../context/LoadingContext";
import { debounce } from "lodash";
import api from "../api/api";

const useTask = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const filter = useFilter();

  const { startLoading, stopLoading } = useLoading();

  const addTask = useCallback(
    async (title, categories = []) => {
      if (title.trim() === "") return;

      const newTask = {
        title,
        completed: false,
        categories
      };

      try {
        startLoading();
        const { data } = await api.post("/tasks", newTask);
        setTasks((prev) => [...prev, data]);
      } catch (error) {
        console.log(error.message);
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading]
  );

  const deleteTask = useCallback(
    async (id) => {
      try {
        startLoading();
        await api.delete(`/tasks/${id}`);
        setTasks((prev) => prev.filter((itemTask) => itemTask.id !== id));
      } catch (error) {
        console.log(error.message);
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading]
  );

  const fetchTasks = useCallback(
    debounce(async () => {
      try {
        startLoading();
        const params = {};
        if (filter.searchQuery) {
          params.title = `*${filter.searchQuery}*`;
        }
        if (filter.sortBy) {
          params.sortBy = filter.sortBy;
        }
        const { data } = await api.get("/tasks", { params });
        console.log("API response:", data);
        setTasks(data);
      } catch (error) {
        setError(error.message);
        console.error("Fetch error:", error.message);
      } finally {
        stopLoading();
      }
    }, 500),
    [filter.searchQuery, filter.sortBy] // Зависимости для debounce
  );

  const updateFieldTask = useCallback(
    async (id, updatedField = {}) => {
      try {
        startLoading();

        const { data } = await api.patch(`/tasks/${id}`, updatedField);

        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, ...data } : task
          )
        );
      } catch (error) {
        console.error("Ошибка при обновлении задачи:", error.message);
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading]
  );

  const getTask = useCallback(
    (id) => {
      return tasks.find((task) => task.id === id);
    },
    [tasks]
  );

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    addTask,
    deleteTask,
    updateFieldTask,
    getTask,
    error,
  };
};

export default useTask;
