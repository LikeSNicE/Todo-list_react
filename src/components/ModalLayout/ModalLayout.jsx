const ModalLayout = ({children }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-70 z-50"
        
      />
      <div className="fixed inset-0 z-51 flex justify-center items-center overflow-y-auto h-[calc(100%-1rem)] max-h-full">
        <div
          className="relative p-4 w-full max-w-2xl max-h-full"
        >
          <div className="relative bg-gray-50 rounded-lg shadow-sm dark:bg-gray-900 dark:text-white">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

ModalLayout.Header = function Header({ children }) {
  return (
    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
      {children}
    </div>
  );
};

ModalLayout.Body = function Body({ children }) {
  return <div className="p-4 md:p-5 space-y-4">{children}</div>;
};

ModalLayout.Footer = function Footer({ children }) {
  return (
    <div className="p-4 md:p-5 border-t border-gray-200 rounded-b">
      {children}
    </div>
  );
};

export default ModalLayout;
