import {Route, Routes} from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";

function App() {
  return (
      <Routes>
        <Route path="/sign-up" element={<Register/>}/>
        {/*<Route path="/sign-in" element={<Login handleLogin={onLogin}/>}/>*/}
          <Route path={'/movies'} element={<Movies></Movies>}></Route>
          <Route path={'/saved-movies'} element={<SavedMovies></SavedMovies>}></Route>
          <Route path={'/'} element={<Main></Main>}></Route>
      </Routes>
  );
}

export default App;
