import RecipeDetailsPage from "@/components/ui/recipe-details";

async function fetchRecipeDetails(currentId){
    try {
    const apiResponse=await fetch(`https://dummyjson.com/recipes/${currentId}`);
    const data=await apiResponse.json();
    return data;        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}


export default async function RecipeDetails({params}){

    const getRecipeDetails=await fetchRecipeDetails(params?.details)
    return(
        <RecipeDetailsPage getRecipeDetails={getRecipeDetails}/>
    )
}