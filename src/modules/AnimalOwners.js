import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/animalOwners/${id}`)
    .then(r => r.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/animalOwners`)
    .then(r => r.json())
  }
}