import "./styles/index.css";
import Header from "./components/Header/Header";
import TodoLayout from "./components/Todo/TodoLayout";

function App() {
    return (
        <div className="bg-gray-600 min-h-screen text-gray-100">
            <Header />
            <main className="flex justify-center max-w-3xl m-auto flex-col">
                <TodoLayout />
            </main>
        </div>
    );
}

export default App;
