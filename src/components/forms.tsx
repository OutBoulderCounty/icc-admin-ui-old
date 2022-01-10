import * as React from "react"
import { useQuery } from "react-query"

import Loader from "./loader"
import ErrorComponent from "./error"

type ActiveProps = {
  isActive: boolean
  className?: string
}

const Active: React.FC<ActiveProps> = ({ isActive, className, children }) => {
  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${className} ${
        isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {children}
    </span>
  )
}

type Form = {
  id: number
  name: string
  required: boolean
  live: boolean
}

type Forms = {
  forms: Form[]
}

type Error = {
  error: string
}

const Forms: React.FC = () => {
  const { data, isLoading, error } = useQuery<Forms, Error>(
    "forms",
    async () => {
      const audience = "https://api.inclusivecareco.org"
      const scope = "admin:all"
      // TODO: authenticate
      const token = ""
      return await (
        await fetch(`${process.env.REACT_APP_API_URL}/forms`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json()
    }
  )

  /*
    https://react-query.tanstack.com/quick-start  

    data: resolved data
    isLoading: boolean; if fails to fetch
    error: default null, error object for the query if error was thrown

    Form builder:
    user needs create form object, click a button create a new form
    user gets routed to create forms get request: /forms
    LOOK AT provider forms.tsx line 129 and look at form.tsx (provider ui)

    type of the element

    Need a PUT request: /form
    POST request :/form
  */

  if (isLoading) return <Loader />

  // if (error) {
  //   return <ErrorComponent message={String(error)} />
  // }
  return (
    <div className="flex flex-col h-full">
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow sm:rounded-lg">
            <table className="divide-y divide-gray-200 max-w-xl mx-auto border border-gray-200 h-full">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Required
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-scroll">
                {data?.forms.map((form, formIdx) => (
                  <tr
                    key={form.id}
                    className={formIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {form.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Active isActive={form.required}>
                        {form.required ? "Yes" : "No"}
                      </Active>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Active isActive={form.live}>
                        {form.live ? "Active" : "Inactive"}
                      </Active>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href={`/forms/${form.id}`}
                        className="text-violet hover:text-violet-darkest"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forms

/*
  username
  password
  form
  inputs
  error handling
  authentication
  focus on delete request later  
*/
