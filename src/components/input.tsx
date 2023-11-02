import { ComponentProps, ElementType, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import clsx from "clsx";

interface InputProps extends ComponentProps<"input"> {
  type: string;
  id: string;
  iconStart?: ElementType;
}

export function Input({ type: Type, id, iconStart: IconStart, ...props }: InputProps) {
  const [type, setType] = useState(Type);

  function changeInputType() {
    setType(type === "text" ? "password" : "text");
  }

  return (
    <label
      htmlFor={id}
      className={clsx(
        "flex items-center gap-4 h-12 w-full px-4 border-2 border-[#4A494A] rounded-lg select-none transition-all",
        "text-white",
        "focus-within:border-[#005EF3]"
      )}
    >
      {IconStart && <IconStart size={24} />}

      <input type={type} id={id} name={id} className="bg-transparent outline-none h-full w-full placeholder:text-white/60" {...props} />

      {id === "password" &&
        (type === "password" ? (
          <Eye size={24} onClick={changeInputType} className="cursor-pointer" />
        ) : (
          <EyeOff size={24} onClick={changeInputType} className="cursor-pointer" />
        ))}
    </label>
  );
}
