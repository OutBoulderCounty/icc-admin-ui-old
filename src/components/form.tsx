import * as React from "react"
import { useQuery } from "react-query"

import Loader from "./loader"
import ErrorComponent from "./error"
import FieldOptions from "./fieldOptions"
import { useNavigate, useParams } from "react-router-dom"
import Modal from "./modal"
import { Dialog } from "@headlessui/react"
import Input from "./input"

export default function Form() {
  const [formName, setFormName] = React.useState("") //name input
  const [isChecked, setIsChecked] = React.useState(false) //checkbox
  const navigate = useNavigate()
  const { id } = useParams()
  const [open, setOpen] = React.useState(false)

  const manageFormsPath = "/admin/forms"

  //cancel button uses goToFroms function; ROUTE IS NOT YET AVAILABLE
  const goToForms = () => navigate(manageFormsPath)

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setOpen(true)
  }

  // Types:
  //

  return (
    <div className="min-h-full py-12 sm:px-6 lg:px-8 ">
      <Modal open={open} setOpen={setOpen}>
        <div>
          <div className="mt-3 text-center sm:mt-5">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              New Element
            </Dialog.Title>
            <div className="mt-2">
              <form className="text-left">
                <label htmlFor="label">Label</label>
                <Input type="text" id="label" name="label" />
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue="text"
                >
                  <option>Text</option>
                  <option>Text Area</option>
                  <option>Number</option>
                  <option>Checkboxes</option>
                  <option>Radio Buttons</option>
                  <option>Line</option>
                  <option>Header</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-6">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => setOpen(false)}
          >
            Go back to dashboard
          </button>
        </div>
      </Modal>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Edit Form
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600"></p>
      </div>
      <form className="mx-auto max-w-lg">
        <label htmlFor="formName">Name</label>
        <input
          type="text"
          id="formName"
          name="formName"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md max-w-lg h-10 px-4"
        />
        <button
          className="block w-full max-w-md mx-auto my-5 rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          onClick={openModal}
        >
          New Element
        </button>

        {/* <div className="flex">
          <div className="mt-8 md:w-1/2">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
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
        </div> */}
      </form>
    </div>
  )
}
{
  /*
  This example requires updating your template:
  <html class="h-full bg-gray-50">
  <body class="h-full">
*/
}
