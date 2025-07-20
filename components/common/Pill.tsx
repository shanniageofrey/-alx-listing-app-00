interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium"
    >
      {label}
    </button>
  );
};

export default Pill;
