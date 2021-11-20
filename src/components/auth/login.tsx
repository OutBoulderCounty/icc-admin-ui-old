import * as React from "react"
import { useMutation } from "react-query"

import Loader from "../loader"
import Error from "../error"

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

  React.useEffect(() => {
    if (mutation.data) {
      console.log(mutation.data)
    }
  }, [mutation.data])

  if (mutation.error) {
    return <Error message={String(mutation.error)} />
  }

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const target = e.target as typeof e.target & {
            email: { value: string }
          }
          mutation.mutate(target.email.value)
        }}
      >
        <input name="email" type="text" placeholder="Email" />
        {mutation.isLoading ? (
          <Loader />
        ) : mutation.data ? (
          <p>Email sent!</p>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  )
}

export default Login
