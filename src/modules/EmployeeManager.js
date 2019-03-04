import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/employees/${id}`)
    .then(r => r.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/employees`)
    .then(r => r.json())
  },
  fireEmployee(id) {
    return fetch(`${Settings.remoteURL}/employees/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => fetch(`${Settings.remoteURL}/employees/`))
    .then(r => r.json())
  },
  addEmployee(newEmployee) {
    return fetch(`${Settings.remoteURL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    }).then(data => data.json())
  }
}