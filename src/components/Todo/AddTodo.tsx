import { useState } from "react";
import Plus from "../../icons/Plus";

export interface AddTodoProps {
    addTodoToTodosList: (todo: string) => void;
}

export default function AddTodo({ addTodoToTodosList }: AddTodoProps) {
    const [todo, setTodo] = useState<string>("");
    const handleTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    const handleOnAdd = () => {
        addTodoToTodosList(todo);
        setTodo("");
    };

    return (
        <div className="flex gap-2 -mt-7 text-gray-100 flex-wrap">
            <input
                type={"text"}
                placeholder={"Add new task"}
                value={todo}
                onChange={(event) => handleTodo(event)}
                className={
                    "p-4 bg-gray-500 border rounded-lg border-gray-700 focus:border-purple-dark outline-none flex-grow"
                }
            />
            <button
                onClick={handleOnAdd}
                className="p-4 bg-blue-dark hover:bg-blue rounded-lg flex items-center justify-center gap-2 font-bold duration-200 flex-grow xs:flex-grow-0"
            >
                Criar <Plus />
            </button>
        </div>
    );
}
