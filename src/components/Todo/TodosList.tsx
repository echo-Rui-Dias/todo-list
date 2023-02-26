import ClipBoard from "../../icons/ClipBoard";
import Todo from "./Todo";
import { TodoListProps, UpdateTodoIsCheckedProps } from "./TodoLayout";

interface todoListProps {
    todoList: TodoListProps[];
    updateTodoIsChecked: UpdateTodoIsCheckedProps;
    removeTodo: (slug: string) => void;
}

export default function TodosList({
    todoList,
    updateTodoIsChecked,
    removeTodo,
}: todoListProps) {
    return (
        <section className="mt-16 grid gap-6">
            <header className="flex justify-between">
                <p className="text-sm font-bold text-blue">
                    Todos created{" "}
                    <span className="rounded-full bg-gray-400 py-0.5 px-2 text-gray-100 text-xs">
                        {todoList.length}
                    </span>
                </p>
                <p className="text-sm font-bold text-purple">
                    Completed{" "}
                    <span className="rounded-full bg-gray-400 py-0.5 px-2 text-gray-100 text-xs">
                        {" "}
                        {
                            todoList.filter(
                                (todo: TodoListProps) => todo.isChecked === true
                            ).length
                        }{" "}
                        of {todoList.length}
                    </span>
                </p>
            </header>
            {todoList.length ? (
                <ul className="grid gap-3">
                    {todoList.map((todo: TodoListProps) => (
                        <Todo
                            key={todo.slug}
                            slug={todo.slug}
                            label={todo.label}
                            updateTodoIsChecked={updateTodoIsChecked}
                            removeTodo={removeTodo}
                        />
                    ))}
                </ul>
            ) : (
                <div className="border-t border-gray-400 py-16 px-6 flex flex-col justify-center items-center gap-4">
                    <ClipBoard />
                    <article className="text-gray-300 text-center">
                        <p>
                            <strong>You don't have tasks registered yet</strong>
                        </p>
                        <p>Create tasks and organize your to-do items</p>
                    </article>
                </div>
            )}
        </section>
    );
}
