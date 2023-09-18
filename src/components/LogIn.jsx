import { useState } from "react"


export default function LogIn() {
    const initialState = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialState)

    
  return (
      <section>
          <h2>Log In</h2>

          <div>
              <label htmlFor="email">
                  <input type="email" name="email" id="email" />
              </label>
              <label htmlFor="password">
                  <input type="password" name="password" id="password" />
              </label>
          </div>
    </section>
  )
}
