import * as React from "react"
import { useMutation } from "react-query"
import { LockClosedIcon } from "@heroicons/react/solid"

import Loader from "../loader"
import Error from "../error"
import logo from "../../images/color-vertical1x.png"

const Login: React.FC = () => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3002"
      : "https://admin.inclusivecareco.org"
  const mutation = useMutation((email: string) => {
    return fetch(`${process.env.REACT_APP_API_URL}/login`, {
      body: JSON.stringify({
        email,
        redirect_url: `${url}/dashboard`,
      }),
      method: "POST",
    })
  })

  if (mutation.error) {
    return <Error message={String(mutation.error)} />
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & { email: { value: string } }
    mutation.mutate(target.email.value)
  }

  return (
    // <div>
    //   <h1>Login</h1>
    //   <form
    //     onSubmit={async (e) => {
    //       e.preventDefault()
    //       const target = e.target as typeof e.target & {
    //         email: { value: string }
    //       }
    //       mutation.mutate(target.email.value)
    //     }}
    //   >
    //     <input name="email" type="text" placeholder="Email" />
    //     {mutation.isLoading ? (
    //       <Loader />
    //     ) : mutation.data ? (
    //       <p>Email sent!</p>
    //     ) : (
    //       <button type="submit">Submit</button>
    //     )}
    //   </form>
    // </div>

    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8">
        <div>
          <img
            className="mx-auto h-36 w-auto"
            src={logo}
            alt="Inclusive Care CO logo"
          />
          <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p>
            This process will create an account if one does not exist. However,
            you will not be automatically granted administrator permissions. To
            be added as an ICC administrator, please contact
            <a
              href="mailto:cwinters@outboulder.org"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Clark Winters
            </a>{" "}
            after you login using this form.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
