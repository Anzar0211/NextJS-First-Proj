import Link from "next/link";

export default function Home(){
  return(
    <div>
      <h1 className="text-2xl font-bold">Welcome to recipe homepage</h1>
      <Link href={'/recipe-list'}>Explore Recipes</Link>
    </div>
  );
} 