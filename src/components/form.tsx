import * as React from "react"
import { useQuery } from "react-query"

import Loader from "./loader"
import ErrorComponent from "./error"
import FieldOptions from "./fieldOptions"
import { useNavigate } from 'react-router-dom'

export default function Form() {
  const [formName, setFormName] = React.useState('') //name input
  const [isChecked, setIsChecked] = React.useState(false); //checkbox
  const navigate = useNavigate();

  const manageFormsPath = '/admin/forms';

  //cancel button uses goToFroms function; ROUTE IS NOT YET AVAILABLE  
  const goToForms = () => navigate(manageFormsPath);

  return (
      <div className="min-h-full py-12 sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Edit Information</h2>
          <p className="mt-2 text-center text-sm text-gray-600"></p>
        </div>
        <form>
          <div className="flex">
            <div className="mt-8 md:w-1/2">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Name :
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="email"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

              </div>
            </div>   
            <FieldOptions />
          </div>
        </form>          
      </div>
  )
}
{/*
  This example requires updating your template:
  <html class="h-full bg-gray-50">
  <body class="h-full">
*/}  