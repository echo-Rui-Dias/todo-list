import { useState } from "react";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";

export interface TodoListProps {
    slug: string;
    label: string;
    isChecked: boolean;
}

export interface UpdateTodoIsCheckedProps {
    (isChecked: boolean, slug: string): void;
}

export default function TodoLayout() {
    const [todoList, setTodoList] = useState<TodoListProps[]>([
        {
            slug: "1",
            label: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isChecked: false,
        },
        {
            slug: "2",
            label: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isChecked: false,
        },
        {
            slug: "3",
            label: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isChecked: false,
        },
    ]);

    const addTodoToTodosList = (todo: string) => {
        setTodoList((prev: TodoListProps[]) => [
            ...prev,
            {
                slug: prev?.length ? String(+prev[prev.length - 1].slug + 1) : "1",
                label: todo,
                isChecked: false,
            },
        ]);
    };

    const removeTodo = (slug: string) => {
        setTodoList((prev: TodoListProps[]) =>
            prev.filter((item) => item.slug !== slug)
        );
    };

    const updateTodoIsChecked: UpdateTodoIsCheckedProps = (isChecked, slug) => {
        setTodoList((prev: TodoListProps[]) =>
            prev.map((item) => {
                if (item.slug === slug) {
                    return { ...item, isChecked: isChecked };
                }
                return { ...item };
            })
        );
    };

    return (
        <section className="mx-4">
            <AddTodo addTodoToTodosList={addTodoToTodosList} />
            <TodosList
                todoList={todoList}
                updateTodoIsChecked={updateTodoIsChecked}
                removeTodo={removeTodo}
            />
        </section>
    );
}
