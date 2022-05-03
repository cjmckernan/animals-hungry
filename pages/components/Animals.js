import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useState } from 'react'



const Animals = ({animals, dataChanged}) => {

  Animals.generateRadioButtons = (numMeals, currentMeal) => {
    let radioButtons = [];
    let mealFed
    for (let index = 1; index < numMeals+1; index++) {
      mealFed = currentMeal >= index ? true : false
      radioButtons.push(
        <div key={index} className="form-check px-6">
          <input defaultChecked={mealFed} onClick={dataChanged} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain cursor-pointer" type="checkbox" />
        </div> 
      )
    }
    return radioButtons;
  }

  return (
        <div>
            <div className="text-2xl">Animals Hungry</div>
                <table className="table">
                <tbody>
                    {animals.map(animal => {
                    return (
                        <tr className="" key={animal._id}>
                            <td><div className="text-2xl text-center">{animal.name}</div></td>
                            <td className='inline-flex px-6'>{Animals.generateRadioButtons(animal.numberOfMeals, animal.currentMeal)}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Animals