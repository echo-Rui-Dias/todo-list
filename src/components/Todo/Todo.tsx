import { useState } from "react";
import Trash from "../../icons/Trash";
import CheckBox from "../Inputs/CheckBox";
import { UpdateTodoIsCheckedProps } from "./TodoLayout";

export interface TodoProps {
    slug: string;
    label: string;
    updateTodoIsChecked: UpdateTodoIsCheckedProps;
    removeTodo: (slug: string) => void;
}

export default function Todo({
    slug,
    label,
    updateTodoIsChecked,
    removeTodo,
}: TodoProps) {
    const [isTodoChecked, setIsTodoChecked] = useState<boolean>(false);

    const handleInputCheckbox = () => {
        setIsTodoChecked(!isTodoChecked);
        updateTodoIsChecked(!isTodoChecked, slug);
    };

    return (
        <li className="grid p-4 gap-3 bg-gray-500 border border-gray-400 items-start rounded-lg todo-grid">
            <CheckBox
                slug={slug}
                isChecked={isTodoChecked}
                handleInputCheckbox={handleInputCheckbox}
            />
            <p
                className={`flex-grow ${
                    isTodoChecked ? "text-gray-300 line-through" : ""
                }`}
            >
                {label}
            </p>
            <Trash className="text-gray-300 hover:bg-gray-400 hover:text-danger duration-200 rounded cursor-pointer" onClick={() => removeTodo(slug)} />
        </li>
    );
}
