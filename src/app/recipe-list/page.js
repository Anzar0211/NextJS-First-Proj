import RecipeList from "@/components/ui/recipe-list";


async function fetchListOfRecipes(){
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    return data?.recipes;
}



export default async function Recipes(){
    const recipeList=await fetchListOfRecipes()
    return(
        <RecipeList recipeList={recipeList}/>
    );
}