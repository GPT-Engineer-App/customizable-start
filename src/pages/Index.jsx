import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your New App</h1>
      <p className="text-xl mb-8">This is your starting point. Customize it as you like.</p>
      <Button size="lg">Get Started</Button>
    </div>
  );
};

export default Index;