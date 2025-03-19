interface InputWithIconProps {
    icon: React.ElementType;
    placeholder: string;
    type?: string;
  }
  
  const InputWithIcon: React.FC<InputWithIconProps> = ({ icon: Icon, placeholder, type = "text" }) => {
    return (
      <div className="flex items-center border p-4 flex-1 gap-2">
        {Icon && <Icon className="text-gray-400" />}
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none border-none w-full"
        />
      </div>
    );
  };
  
  export default InputWithIcon;
  