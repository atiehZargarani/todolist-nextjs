import TheHeader from "@/components/TheHeader";
import Tasks from "@/components/Tasks";

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
            <Tasks  />
          </section>
        </main>
      </div>
    </div>
  );
}
