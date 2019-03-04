import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/Owners/${id}`)
    .then(r => r.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/Owners`)
    .then(r => r.json())
  },
  deleteOwner(id) {
    return fetch(`${Settings.remoteURL}/Owners/${id}`, {
      method: "DELETE"
    })
    .then(() => fetch("http://localhost:5002/Owners"))
    .then(r => r.json())
  },
  addOwner(newOwner) {
    return fetch(`${Settings.remoteURL}/Owners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwner)
    }).then(data => data.json())
  }
}