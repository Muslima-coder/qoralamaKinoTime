import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import SingleMovie from "./pages/SingleMovie";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/singleMovie/:id" element={<SingleMovie/>}/>
    </Routes> 
  );
}


export default App;

// const App = () => {
//   return (
//     <div>
//       <SearchPart/>
//     </div>
//   )
// }

// export default App

