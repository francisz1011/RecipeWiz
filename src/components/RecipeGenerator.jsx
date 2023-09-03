import React, { useState } from 'react';



const RecipeGenerator = () => {
  const [ingredient, setIngredient] = useState('');
  const [cuisine, setCuisine] = useState('indian');
  const [portionSize, setPortionSize] = useState('1');
  const [recipe, setRecipe] = useState('');


  
  const generateRecipe = async () => {
    // You can use an API to generate the recipe here.
   const recipeSample = 'Sample Recipe:- Ingredient:- boneless,to bite-sized pieces cup plain yogurt tablespoons ginger-garlic paste a blend of equal parts ginger and garlic, finely minced teaspoon turmeric powderteaspoon finely minced teaspoon turmeric powderteaspoon red chili powder adjust to taste Salt to taste  to bite-sized pieces cup plain yogurt tablespoons ginger-garlic paste a blend of equal parts ginger and garlic, finely minced teaspoon turmeric powderteaspoon chili powder adjust to taste Salt to taste !'
    setRecipe(recipeSample);
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div id='RecipeGenerator' className="flex justify-center items-center h-full  ">
        <div className="mb-[200px] mt-[250px] ml-[380px] max-w-lg  p-8 bg-white  bg-opacity-50 rounded-lg shadow-lg">
          <h1 className="text-4xl mb-4 from rounded-lg p-2 font-extrabold ">AI Recipe Generator</h1>
          <div className="mb-4">
            <label htmlFor="ingredient" className="block mb-2   font-bold text-violet-800 text-2xl">
              Enter an ingredient:
            </label>
            <input
              type="text"
              id="ingredient"
              className="w-full border border-gray-300 rounded p-2"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cuisine" className="block mb-2 text-2xl font-bold text-violet-800">
              Select a cuisine:
            </label>
            <select 
              id="cuisine"
              className="w-full border border-gray-300 rounded p-2 bg-yellow-500 font-serif"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="indian">Indian</option>
              <option value="greek">Greek</option>
              <option value="american">American</option>
              <option value="mexican">Mexican</option>
              <option value="japanese">Japanese</option>
              <option value="chinese">Chinese</option>
              <option value="korean">Korean</option>
              {/* Add more cuisine options here */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-violet-800 text-2xl">Select a portion size:</label>
            <div className=' text-violet-800 text-lg font-serif'>
              {/* Radio buttons and labels here */}
              <label className="mr-4">
                <input
                  type="radio"
                  value="1"
                  checked={portionSize === '1'}
                  onChange={() => setPortionSize('1')}
                  className="mr-2"
                />
                For 1 person
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  value="2"
                  checked={portionSize === '2'}
                  onChange={() => setPortionSize('2')}
                  className="mr-2"
                />
                For 2 people
              </label>
              <label>
                <input
                  type="radio"
                  value="4"
                  checked={portionSize === '4'}
                  onChange={() => setPortionSize('4')}
                  className="mr-2"
                />
                For 4 people
              </label>
            </div>
          </div>
          <div className="mb-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full ml-[100px] "
              onClick={generateRecipe}
            >
              Generate Recipe
            </button>
          </div>
        </div>
        <h1 className=" text-2xl mt-[220px] whitespace-pre-wrap max-w-lg mx-auto p-2 bg-white text-violet-800 rounded-lg opacity-50 mb-[160px] font-serif">{recipe} </h1>
        
      </div>
      
      
    </div>
  );
};

export default RecipeGenerator;
