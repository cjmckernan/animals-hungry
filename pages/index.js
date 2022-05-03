import Link from 'next/link'
import fetch from 'isomorphic-unfetch'





const Home = ({ animals }) => {
  
  return (   
     <div className="h-screen w-screen">   
        <div className="text-2xl px-8 py-8">Animals Hungry</div>
        <div className="grid">
        <table className="table-auto">
          <tbody>
            {animals.map(animal => {
              return (
                <tr className="py-6" key={animal._id}>
                  <td><div className="text-2xl text-center">{animal.name}</div></td>
                  <td className='inline-flex px-6'>{Home.generateRadioButtons(animal.numberOfMeals)}</td>
                  <td>{animals.currentMeal}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
   </div>
  )
}

Home.generateRadioButtons = (numMeals) => {
  let radioButtons = [];
  for (let index = 1; index < numMeals+1; index++) {
    radioButtons.push(
      <div key={index} className="form-check px-6">
        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" />
        <label className="form-check-label inline-block text-white-800 px-2" >Meal {index}</label>
      </div> 
    )
  }
  return radioButtons;
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/animals')
  const { data } = await res.json();

  return { animals: data }
}


export default Home;