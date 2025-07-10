import { useLoading } from "../../context/LoadingContext";
import './SpinnerAnimation.css';

const SpinnerLoader = () => {
  const {isLoading} = useLoading();

  if (!isLoading) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-index-[999] flex-col">
        <div className="w-[50px] h-[50px] rounded-full border-5 border-t-transparent spinner-animation"></div>
        <p className="text-center font-bold mt-4">Загрузка ...</p>
      </div>
    </>
  );
}

export default SpinnerLoader;
