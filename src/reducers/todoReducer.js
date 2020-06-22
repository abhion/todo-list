
export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD": {
        return [...state, action.payload];
      }
      case "DONE": {
        return state.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, done: true };
          } else {
            return { ...item };
          }
        });
      }
  
      case "PENDING": {
        return state.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, done: false };
          } else {
            return { ...item };
          }
        });
      }
  
      case "DELETE": {
        return state.filter(item => {
          return item.id !== action.payload.id;
        });
      }

      case "CLEAR":{
        return [];
      }
  
      default:
        break;
    }
  };