import TheHeader from "@/components/TheHeader";
import Taskslist from "@/components/TasksList";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col space-y-4 w-1/2">
        <header>
          <TheHeader
            title="Todo"
            description="app for managing your tasks :)"
          />
        </header>
        <main>
          <section>
            <Taskslist />
          </section>
        </main>
      </div>
    </div>
  );
}
