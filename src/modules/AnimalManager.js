import Settings from "./Settings";

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/animals/${id}`).then(r => r.json());
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/animals`).then(r => r.json());
  },
  deleteAnimal(id) {
    return fetch(`${Settings.remoteURL}/animals/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => fetch(`${Settings.remoteURL}/animals/`))
    .then(r => r.json())
  },
  addAnimal(newAnimal) {
    return fetch(`${Settings.remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },
  editAnimal(editedAnimal) {
    return fetch(`${Settings.remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  }
}
