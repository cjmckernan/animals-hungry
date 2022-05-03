import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const Home = ({ animals }) => {
  return (   
     <div className="h-screen w-screen flex flex-col justify-center">   
        <div className="text-2xl text-center py-8">Animals Hungry</div>
        <div className="grid">
        <table className="table-auto">
          <tbody>
          {animals.map( animal => {
            return (
              <div key={animal._id}>
              <tr>
                <td className='px-6'>
                  <div className="text-2xl text-center">{animal.name}</div>
                </td>
                <div className="form-check">
                  <a>{animal.numberOfMeals}</a>
                    {/* <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" /> */}
                  </div> 
              </tr>
              </div>
            )
          })}
            </tbody>
          </table>
        </div>
   </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/animals')
  const { data } = await res.json();

  return { animals: data }
}

export default Home;