import { Routes, Route } from 'react-router-dom';
import './App.css';
import BoardListComponent from "./components/BoardListComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import CreateBoardComponent from "./components/CreateBoardComponent";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from "./auth/SignUpForm";
import LoginForm from "./auth/LoginForm";


function App() {
    return (
        <div>
            <HeaderComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={<BoardListComponent />} />
                    <Route path="/board" element={<BoardListComponent />} />
                    <Route path="/board/create" element={<CreateBoardComponent />} />
                    <Route path="/auth/signUp" element={<SignUpForm />} />
                    <Route path="/auth/login" element={<LoginForm />} />

                </Routes>
            </div>
            <FooterComponent />
        </div>
    );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/board/main" element={<BoardMain />} />
//         <Route path="/board/write" element={<BoardWrite />} />
//         <Route path="/board/list" element={<BoardList />} />
//         {/* 다른 Route들도 여기에 추가할 수 있습니다. */}
//       </Routes>
//     </div>
//   );
// }

// --------------------------------------------------------------------


// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//             <Route path="/" element={<BoardMain />} />
//             <Route path="/board/write" element={<BoardWrite />} />
//           {/* 다른 Route들도 여기에 추가할 수 있습니다. */}
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
//
// export default App;

// function App() {
//     return <div>
//         Hello, React
//         Hello, React2
//     </div>;
//
// }

// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Routes>
//                     <Route path="/board/write" element={<BoardWrite/>}/>
//                 </Routes>
//             </React.Fragment>
//         );
//     }
// }
//
// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/board/write" element={<BoardWrite/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

