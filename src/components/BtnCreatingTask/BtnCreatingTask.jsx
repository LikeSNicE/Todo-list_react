const BtnCreatingTask = ({ modal }) => {
  return (
    <div
      className="
      fixed bottom-20 
      right-4
      md:right-4
      lg:right-[max(1rem,calc(50%-512px+1rem))]
    "
    >
      <button
        onClick={() => modal.openModal("modalAddTask")}
        className="rounded-full w-[50px] h-[50px] bg-[var(--color-accent)] text-white flex items-center justify-center cursor-pointer"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default BtnCreatingTask;
