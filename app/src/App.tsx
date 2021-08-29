import { createTheme, ThemeProvider } from "@material-ui/core";
import { useEffect, useReducer } from "react";

// TODO: add our own styles
const theme = createTheme({});

type Pokemon = {
  name: string,
  id: string,
}

type AppState = {
  pokemons?: Pokemon[],
  filters?: Array<any>,
}

const initialAppState: AppState = {
}

type AppReducerAction = {
  type: 'setPokemons'
  payload: Pokemon[]
}

const reducer = (prevState: AppState, action: AppReducerAction): AppState => {
  switch(action.type) {
    case 'setPokemons':
      return {
        ...prevState,
        pokemons: action.payload,
      }
  }
}

export type AppReducer = {
  state: AppState,
  dispatch: React.Dispatch<AppReducerAction>
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialAppState);

  useEffect(() => {
    // TODO: React query
  }, [state.filters])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>Pokemon</ThemeProvider>
    </div>
  );
}

export default App;
