import Link from "next/link";

export default function RecipeDetailsPage({getRecipeDetails}){
    return(
        
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <Link href={'/recipe-list'}>All Recipes</Link>
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full lg:sticky top-0 sm:flex gap-2">
                    <img
                        src={getRecipeDetails.image}
                        alt={getRecipeDetails.name}
                        className="w-5/5 object-cover rounded-md"
                    
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-950">{getRecipeDetails?.name}</h2>
                    <div className="mt-5 gap-4">
                        <p className="text-2xl font-bold text-gray-950">{getRecipeDetails.mealType[0]}</p>
                    </div>
                    <div className="mt-5 gap-4">
                        <p className="text-xl font-bold text-gray-950">{getRecipeDetails?.cuisine}</p>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
                        <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                            {
                                getRecipeDetails.ingredients.map((ingredient,index)=>(
                                    <li key={index}>{ingredient}</li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}