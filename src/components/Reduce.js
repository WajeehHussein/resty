
const initialState = {
  history: []
}
export default function Reduce(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      const addHistory = [...state.history, payload];
      return {
        history: addHistory
      }
    case "CLEAR":
      return initialState
  }
}

export const add = (formData) => {
  return {
    type: 'ADD',
    payload: formData
  }
}