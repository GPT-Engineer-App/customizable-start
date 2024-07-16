import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gradient-to-br from-pink-100 to-pink-200">
      <h1 className="text-4xl font-bold mb-4 text-pink-800">Welcome to Your Stylish Pink App</h1>
      <p className="text-xl mb-8 text-pink-700">This is your starting point. Customize it as you like.</p>
      <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">Get Started</Button>
    </div>
  );
};

export default Index;