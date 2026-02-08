import { FiX } from "react-icons/fi";

type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: TModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity w-full h-full"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-xl w-full max-w-2xl shadow-xl">
        
        {/* Header */}
        <div className="flex justify-between items-center px-7 py-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold">{title}</h2>

          <button
            onClick={onClose}
            className="p-4 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-7">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
