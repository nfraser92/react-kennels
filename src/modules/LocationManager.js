import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/Locations/${id}`)
    .then(r => r.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/Locations`)
    .then(r => r.json())
  },
  deleteLocation(id) {
    return fetch(`${Settings.remoteURL}/Locations/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => fetch(`${Settings.remoteURL}/Locations/`))
    .then(r => r.json())
  },
  addLocation(newLocation) {
    return fetch(`${Settings.remoteURL}/Locations/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newLocation)
  }).then(r => r.json())
  }
}














